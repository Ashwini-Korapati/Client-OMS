

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../EmpPayslip/EmpPayslip.css';
import img from '../../../../HRModule/Assets/nmitlogo.png';
import { FaDownload } from "react-icons/fa";

const Payslip = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const { emp } = profile?.emp || {};  
    const { employeeDetails, payslipDetails, status, error } = useSelector(state => state.payslip);
    const [empId, setEmpId] = useState(4);
    const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);
    const [localData, setLocalData] = useState(() => {
        const savedData = localStorage.getItem('payslipData');
        return savedData ? JSON.parse(savedData) : null;
    });
    const [hasError, setHasError] = useState(false);

    // Get current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Function to get the past three months
    const getPastThreeMonths = () => {
        let months = [];
        for (let i = 2; i >= 0; i--) {
            let date = new Date(currentYear, currentMonth - i, 1);
            months.push({
                value: `${date.getMonth() + 1}-${date.getFullYear()}`,
                label: date.toLocaleString('default', { month: 'short', year: 'numeric' })
            });
        }
        return months;
    };

    const pastThreeMonths = getPastThreeMonths();
    const [selectedMonth, setSelectedMonth] = useState(() => {
        const savedMonth = localStorage.getItem('selectedMonth');
        return savedMonth || (pastThreeMonths[2]?.value || '');
    });

    useEffect(() => {
        localStorage.setItem('selectedMonth', selectedMonth);
    }, [selectedMonth]);

    useEffect(() => {
        if (selectedMonth) {
            const [month, year] = selectedMonth.split('-').map(Number);
            if (empId && month && year) {
                setHasError(false);
                dispatch(fetchPayslip({ month, year, emp_id: empId }))
                    .unwrap()
                    .then(data => {
                        if (data.success === false) {
                            throw new Error(data.message);
                        }
                        const payload = {
                            employeeDetails: data.employeeDetails,
                            payslipDetails: data.payslipDetails
                        };
                        localStorage.setItem('payslipData', JSON.stringify(payload));
                        setLocalData(payload);
                    })
                    .catch(err => {
                        setHasError(true);
                        toast.error(err.message || 'Failed to load payslip data');
                        // Clear local data if the error is "No records found"
                        if (err.message.includes('No records found')) {
                            localStorage.removeItem('payslipData');
                            setLocalData(null);
                        }
                    });
            }
        }
    }, [dispatch, selectedMonth, empId]);

    const handleDownload = async () => {
        const dataToUse = !hasError && payslipDetails && employeeDetails 
            ? { payslipDetails, employeeDetails } 
            : localData;

        if (!dataToUse?.payslipDetails || !dataToUse?.employeeDetails) {
            toast.error('No payslip data available to download');
            return;
        }

        try {
            const doc = new jsPDF();
            
            // Load and add Company Logo and Header
            const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            }));
            
            // Add Company Logo
            doc.addImage(logo, 'PNG', 10, 10, 20, 20);
            doc.setFontSize(14);
            doc.text('NM IT Solutions Pvt Ltd', 40, 20);
            doc.setFontSize(10);
            doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 40, 25);
            doc.line(10, 30, 200, 30);

            // Prepare data for PDF
            const earnings = [
                { type: 'BASIC', amount: parseFloat(dataToUse.payslipDetails.revised_full_basic) || 0 },
                { type: 'HRA', amount: parseFloat(dataToUse.payslipDetails.revised_full_hra) || 0 },
                { type: 'SPECIAL ALLOWANCE', amount: parseFloat(dataToUse.payslipDetails.revised_full_special_allowance) || 0 },
                { type: 'OTHER ALLOWANCE', amount: parseFloat(dataToUse.payslipDetails.revised_full_other_allowance) || 0 },
                { type: 'TRAVEL ALLOWANCE', amount: parseFloat(dataToUse.payslipDetails.revised_full_travel_allowance) || 0 }
            ];

            const deductions = [
                { type: 'PF', amount: parseFloat(dataToUse.payslipDetails.revised_full_employer_pf) || 0 },
                { type: 'TOTAL', amount: parseFloat(dataToUse.payslipDetails.total_deductions) || 0 }
            ];

            const totalAmount = parseFloat(dataToUse.payslipDetails.total_amt) || 0;
            const totalDeductions = deductions.reduce((total, record) => total + record.amount, 0);

            // Add Employee Details Section
            doc.setFontSize(10);
            const employeeDetailsY = 35;
            doc.text(`Name: ${dataToUse.employeeDetails?.firstName || emp?.FirstName || '-'}`, 10, employeeDetailsY);
            doc.text(`Employee No: ${dataToUse.employeeDetails?.emp_id || emp?.id || '-'}`, 100, employeeDetailsY);
            doc.text(`Joining Date: ${dataToUse.employeeDetails?.DOJ ? new Date(dataToUse.employeeDetails.DOJ).toLocaleDateString() : '-'}`, 10, employeeDetailsY + 8);
            doc.text(`Designation: ${dataToUse.employeeDetails?.designation || emp?.designation || '-'}`, 100, employeeDetailsY + 8);
            doc.text(`Bank Name: ${dataToUse.employeeDetails?.bankName || '-'}`, 10, employeeDetailsY + 16);
            doc.text(`Bank Account No: ${dataToUse.employeeDetails?.accountNo || '-'}`, 100, employeeDetailsY + 16);
            doc.text(`PAN Number: ${dataToUse.employeeDetails?.panNo || '-'}`, 10, employeeDetailsY + 24);
            doc.text(`PF No: ${dataToUse.employeeDetails?.pfNumber || '-'}`, 100, employeeDetailsY + 24);
            doc.text(`PF UAN: ${dataToUse.employeeDetails?.uanNumber || '-'}`, 10, employeeDetailsY + 32);

            // Draw the Earnings Table
            const earningsStartY = employeeDetailsY + 40;
            doc.autoTable({
                startY: earningsStartY,
                head: [['Earnings', 'Amount (₹)']],
                body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain',
                styles: { cellPadding: 2, fontSize: 9 }
            });

            // Draw the Deductions Table
            const deductionsStartY = doc.lastAutoTable.finalY + 10;
            doc.autoTable({
                startY: deductionsStartY,
                head: [['Deductions', 'Amount (₹)']],
                body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain',
                styles: { cellPadding: 2, fontSize: 9 }
            });

            // Add Total Salary and Net Pay
            const totalSalaryY = doc.lastAutoTable.finalY + 10;
            doc.text(`Total Earnings: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY);
            doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 10, totalSalaryY + 8);
            doc.text(`Net Pay: ₹${(totalAmount - totalDeductions).toFixed(2)}`, 10, totalSalaryY + 16);
            doc.text('Note: This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 24);

            doc.save('payslip.pdf');
            toast.success('Payslip downloaded successfully');
        } catch (error) {
            console.error("Error generating PDF:", error);
            toast.error('Failed to generate payslip PDF');
        }
    };

    const handleHide = () => {
        setIsTotalSalaryVisible(!isTotalSalaryVisible);
    };

    // Determine which data to use (Redux or localStorage)
    const displayData = !hasError && payslipDetails && employeeDetails 
        ? { payslipDetails, employeeDetails } 
        : localData;

    if (status === 'loading' && !localData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="payslip-container">
            <div className="tabs">
                <button className="download-button1">Payslip</button>
                <button 
                    className="download-button" 
                    onClick={handleDownload}
                    disabled={!displayData}
                >
                    Download <FaDownload />
                </button>
                <select
                    className="month-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    {pastThreeMonths.map((month) => (
                        <option key={month.value} value={month.value}>
                            {month.label}
                        </option>
                    ))}
                </select>
            </div>
            
            {displayData ? (
                <div className="main-content">
                    <div className="payslip-details">
                        <div className="earnings">
                            <h3>Earnings</h3>
                            <table id="earningsTable">
                                <thead>
                                    <tr>
                                        <th>Earning Type</th>
                                        <th>Amount in (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: 'BASIC', amount: parseFloat(displayData.payslipDetails.revised_full_basic) || 0 },
                                        { type: 'HRA', amount: parseFloat(displayData.payslipDetails.revised_full_hra) || 0 },
                                        { type: 'SPECIAL ALLOWANCE', amount: parseFloat(displayData.payslipDetails.revised_full_special_allowance) || 0 },
                                        { type: 'OTHER ALLOWANCE', amount: parseFloat(displayData.payslipDetails.revised_full_other_allowance) || 0 },
                                        { type: 'TRAVEL ALLOWANCE', amount: parseFloat(displayData.payslipDetails.revised_full_travel_allowance) || 0 }
                                    ].map((record, index) => (
                                        <tr key={index}>
                                            <td>{record.type}</td>
                                            <td>{record.amount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>Total</td>
                                        <td>{parseFloat(displayData.payslipDetails.total_amt || 0).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="deductions">
                            <h3>Deductions</h3>
                            <table id="deductionsTable">
                                <thead>
                                    <tr>
                                        <th>Deductions Type</th>
                                        <th>Amount in (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: 'PF', amount: parseFloat(displayData.payslipDetails.revised_full_employer_pf) || 0 },
                                        { type: 'TOTAL', amount: parseFloat(displayData.payslipDetails.total_deductions) || 0 }
                                    ].map((record, index) => (
                                        <tr key={index}>
                                            <td>{record.type}</td>
                                            <td>{record.amount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>Total</td>
                                        <td>{parseFloat(displayData.payslipDetails.total_deductions || 0).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                       
                        <div className="employee-details">
                            <button className="hide-button" onClick={handleHide}>
                                {isTotalSalaryVisible ? 'Hide' : 'Show'}
                            </button>
                            <h3>Employee details</h3>
                            <div className="details">
                                <p><strong>Name</strong>: {displayData.employeeDetails.firstName || emp?.FirstName || '-'}</p>
                                <p><strong>Employee No</strong>: {displayData.employeeDetails.emp_id || emp?.id || '-'}</p>
                                <p><strong>Joining Date</strong>: {displayData.employeeDetails.DOJ ? new Date(displayData.employeeDetails.DOJ).toLocaleDateString() : '-'}</p>
                                <p><strong>Designation</strong>: {displayData.employeeDetails.designation || emp?.designation || '-'}</p>
                                <p><strong>PF Number</strong>: {displayData.employeeDetails.pfNumber || '-'}</p>
                                <p><strong>UAN Number</strong>: {displayData.employeeDetails.uanNumber || '-'}</p>
                                <p><strong>PAN Number</strong>: {displayData.employeeDetails.panNo || '-'}</p>
                                <p><strong>Bank Name</strong>: {displayData.employeeDetails.bankName || '-'}</p>
                                <p><strong>Account Number</strong>: {displayData.employeeDetails.accountNo || '-'}</p>
                                <p><strong>IFSC Code</strong>: {displayData.employeeDetails.ifscCode || '-'}</p>

                                <div className='total-salary'>
                                    <strong>Total Salary:</strong> {isTotalSalaryVisible ? 
                                        (parseFloat(displayData.payslipDetails.total_amt || 0) - 
                                         parseFloat(displayData.payslipDetails.total_deductions || 0)).toFixed(2) 
                                        : '*******'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-data-message">
                    {status === 'failed' ? (
                        <p>No payslip data available for the selected period</p>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default Payslip;