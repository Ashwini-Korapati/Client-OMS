
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import '../EmpPayslip/EmpPayslip.css';
// import img from '../../../../HRModule/Assets/nmitlogo.png'


// const Payslip = () => {
//     const dispatch = useDispatch();
//     const profile = useSelector(state => state.profile);
//     const { emp } = profile ? profile.emp : {};  
//     const { employeeDetails, payslipDetails, status, error } = useSelector(state => state.payslip);
//     const [month, setMonth] = useState(new Date().getMonth() + 1); // Get current month (1-12)
//     const [year, setYear] = useState(new Date().getFullYear()); // Get current year
//     const [empId, setEmpId] = useState(4); // Update this with the actual emp_id you want to fetch
//     const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

//     useEffect(() => {
//         if (empId && month && year) {
//             dispatch(fetchPayslip({ month, year, emp_id: empId }));
//         }
//     }, [dispatch, month, year, empId]);

   

    // const handleDownload = async () => {
    //     console.log("Download initiated", handleDownload);
    //     const doc = new jsPDF();
       
    //     try {
    //         // Load and add Company Logo and Header
    //         const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
    //             const reader = new FileReader();
    //             reader.onloadend = () => resolve(reader.result);
    //             reader.readAsDataURL(blob);
    //         }));
       
    //         // Add Company Logo
    //         doc.addImage(logo, 'PNG', 10, 10, 20, 20); // Adjusted logo size
    //         doc.setFontSize(14); // Reduced font size for the company name
    //         doc.text('NM IT Solutions Pvt Ltd', 40, 20);
    //         doc.setFontSize(10); // Reduced font size for the address
    //         doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 40, 25);
    //         doc.line(10, 30, 200, 30); // Line separator
       
    //         // Add Employee Details Section
    //         doc.setFontSize(10); // Reduced font size for employee details
    //         const employeeDetailsY = 35;
    //         doc.text(`Name:  ${emp?.FirstName}`, 10, employeeDetailsY);
    //         doc.text(`Employee No: ${emp?.id}`, 100, employeeDetailsY);
    //         doc.text(`Joining Date: ${new Date(employeeDetails.DOJ).toLocaleDateString()}`, 10, employeeDetailsY + 8);
    //         doc.text(`Designation: ${emp.designation}`, 100, employeeDetailsY + 8);
    //         doc.text(`Bank Name: ${employeeDetails.bankName || '-'}`, 10, employeeDetailsY + 16);
    //         doc.text(`Bank Account No: ${employeeDetails.accountNo || '-'}`, 100, employeeDetailsY + 16);
    //         doc.text(`PAN Number: ${employeeDetails.panNo || '-'}`, 10, employeeDetailsY + 24);
    //         doc.text(`PF No: ${employeeDetails.pfNumber || '-'}`, 100, employeeDetailsY + 24);
    //         doc.text(`PF UAN: ${employeeDetails.uanNumber || '-'}`, 10, employeeDetailsY + 32);
       
    //         // Draw the Earnings Table
    //         const earningsStartY = employeeDetailsY + 40;
    //         doc.autoTable({
    //             startY: earningsStartY,
    //             head: [['Earnings', 'Amount (₹)']],
    //             body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
    //             theme: 'plain',
    //             styles: {
    //                 cellPadding: 2,
    //                 fontSize: 9,
    //                 lineColor: [0, 0, 0],
    //                 lineWidth: 0.1
    //             },
    //             headStyles: {
    //                 fillColor: [255, 255, 255],
    //                 textColor: [0, 0, 0]
    //             },
    //             alternateRowStyles: {
    //                 fillColor: [245, 245, 245]
    //             }
    //         });
       
    //         // Draw the Deductions Table
    //         const deductionsStartY = doc.lastAutoTable.finalY + 10;
    //         doc.autoTable({
    //             startY: deductionsStartY,
    //             head: [['Deductions', 'Amount (₹)']],
    //             body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
    //             theme: 'plain',
    //             styles: {
    //                 cellPadding: 2,
    //                 fontSize: 9,
    //                 lineColor: [0, 0, 0],
    //                 lineWidth: 0.1
    //             },
    //             headStyles: {
    //                 fillColor: [255, 255, 255],
    //                 textColor: [0, 0, 0]
    //             },
    //             alternateRowStyles: {
    //                 fillColor: [245, 245, 245]
    //             },
    //             foot: [['Total Deductions', totalDeductions.toFixed(2)]],
    //             footStyles: {
    //                 fillColor: [255, 255, 255],
    //                 textColor: [0, 0, 0],
    //                 fontSize: 10,
    //                 fontStyle: 'bold'
    //             }
    //         });
       
    //         // Add Total Salary and Net Pay
    //         const totalSalaryY = doc.lastAutoTable.finalY + 10;
    //         doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 10, totalSalaryY);

    //         // doc.text(`Total Earnings: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY);
    //         doc.text(`Net Pay: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY + 8);
       
    //         // Add Disclaimer
    //         doc.text('Note: This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 16);
       
    //         // Save the document
    //         doc.save('payslip.pdf');
    //         console.log("PDF generated successfully");
    //     } catch (error) {
    //         console.error("Error generating PDF:", error);
    //     }
    // };
    

//     const handleHide = () => {
//         setIsTotalSalaryVisible(!isTotalSalaryVisible);
//     };

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     if (!employeeDetails || !payslipDetails) {
//         return <div>No payslip data available.</div>;
//     }

//     // Define types and keys
//     const earningsTypes = ['BASIC', 'HRA', 'SPECIAL ALLOWANCE', 'OTHER ALLOWANCE', 'TRAVEL ALLOWANCE'];
//     const deductionsTypes = ['PF', 'TOTAL'];

//     // Map earnings
//     const earnings = earningsTypes.map(type => {
//         const key = `revised_full_${type.replace(' ', '_').toLowerCase()}`;
//         return {
//             type,
//             amount: parseFloat(payslipDetails[key]) || 0
//         };
//     });

//     // Map total_amt to earnings
//     const totalAmount = parseFloat(payslipDetails.total_amt) || 0;

//     // Map deductions
//     const deductions = deductionsTypes.map(type => {
//         let key;
//         if (type === 'PF') {
//             key = 'revised_full_employer_pf'; // Use the correct key for PF
//         } else if (type === 'TOTAL') {
//             key = 'total_deductions'; // Use the correct key for total deductions
//         }
//         return {
//             type,
//             amount: parseFloat(payslipDetails[key]) || 0
//         };
//     });

//     // Calculate totals
//     const totalEarnings = totalAmount;
//     const totalDeductions = deductions.reduce((total, record) => total + record.amount, 0);

//     return (
//         <div className="payslip-container">
//             <div className="tabs">
//                 <button className="download-button1">Payslip</button>
//                 <button className="download-button" onClick={handleDownload}>Download</button>
//                 <select
//                     className="month-select"
//                     value={month}
//                     onChange={(e) => setMonth(parseInt(e.target.value))}
//                 >
//                     {[...Array(12).keys()].map(i => (
//                         <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('en', { month: 'short' })}</option>
//                     ))}
//                 </select>
//                 <select
//                     className="year-select"
//                     value={year}
//                     onChange={(e) => setYear(parseInt(e.target.value))}
//                 >
//                     {[year, year - 1].map(y => (
//                         <option key={y} value={y}>{y}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="main-content">
//                 <div className="payslip-details">
//                     <div className="earnings">
//                         <h3>Earnings</h3>
//                         <table id="earningsTable">
//                             <thead>
//                                 <tr>
//                                     <th>Earning Type</th>
//                                     <th>Amount in (₹)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {earnings.map((record, index) => (
//                                     <tr key={index}>
//                                         <td>{record.type}</td>
//                                         <td>{record.amount.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalEarnings.toFixed(2)}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <div className="deductions">
//                         <h3>Deductions</h3>
//                         <table id="deductionsTable">
//                             <thead>
//                                 <tr>
//                                     <th>Deductions Type</th>
//                                     <th>Amount in (₹)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {deductions.map((record, index) => (
//                                     <tr key={index}>
//                                         <td>{record.type}</td>
//                                         <td>{record.amount.toFixed(2)}</td>
//                                     </tr>
//                                 ))}
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalDeductions.toFixed(2)}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
                   
//             <div className="employee-details">
//                     <button className="hide-button" onClick={handleHide}>
//                         {isTotalSalaryVisible ? 'Hide' : 'Show'}
//                     </button>
//                     <h3>Employee details</h3>
//                     <div className="details">
//                         <p><strong>Name</strong>: {employeeDetails.firstName}</p>
//                         <p><strong>Employee No</strong>: {employeeDetails.emp_id}</p>
//                         <p><strong>Joining Date</strong>: {new Date(employeeDetails.DOJ).toLocaleDateString()}</p>
//                         <p><strong>Designation</strong>: {employeeDetails.designation}</p>
//                         <p><strong>PF Number</strong>: {employeeDetails.pfNumber || '-'}</p>
//                         <p><strong>UAN Number</strong>: {employeeDetails.uanNumber || '-'}</p>
//                         <p><strong>PAN Number</strong>: {employeeDetails.panNo || '-'}</p>
//                         <p><strong>Bank Name</strong>: {employeeDetails.bankName || '-'}</p>
//                         <p><strong>Account Number</strong>: {employeeDetails.accountNo || '-'}</p>
//                         <p><strong>IFSC Code</strong>: {employeeDetails.ifscCode || '-'}</p>

//                         <div className='total-salary'>
//                         <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalEarnings.toFixed(2) : '*******'}
//                     </div>
//                     </div>
              
//                 </div>
           
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payslip;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../EmpPayslip/EmpPayslip.css';
import img from '../../../../HRModule/Assets/nmitlogo.png'
import { FaDownload } from "react-icons/fa";

const Payslip = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const { emp } = profile ? profile.emp : {};  
    const { employeeDetails, payslipDetails, status, error } = useSelector(state => state.payslip);
    const [empId, setEmpId] = useState(4); // Update this with the actual emp_id you want to fetch
    const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

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

    const [selectedMonth, setSelectedMonth] = useState(pastThreeMonths[2].value);

    useEffect(() => {
        const [month, year] = selectedMonth.split('-').map(Number);
        if (empId && month && year) {
            dispatch(fetchPayslip({ month, year, emp_id: empId }));
        }
    }, [dispatch, selectedMonth, empId]);

    const handleDownload = async () => {
        console.log("Download initiated", handleDownload);
        const doc = new jsPDF();
       
        try {
            // Load and add Company Logo and Header
            const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            }));
       
            // Add Company Logo
            doc.addImage(logo, 'PNG', 10, 10, 20, 20); // Adjusted logo size
            doc.setFontSize(14); // Reduced font size for the company name
            doc.text('NM IT Solutions Pvt Ltd', 40, 20);
            doc.setFontSize(10); // Reduced font size for the address
            doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 40, 25);
            doc.line(10, 30, 200, 30); // Line separator
       
            // Add Employee Details Section
            doc.setFontSize(10); // Reduced font size for employee details
            const employeeDetailsY = 35;
            doc.text(`Name:  ${emp?.FirstName}`, 10, employeeDetailsY);
            doc.text(`Employee No: ${emp?.id}`, 100, employeeDetailsY);
            doc.text(`Joining Date: ${new Date(employeeDetails.DOJ).toLocaleDateString()}`, 10, employeeDetailsY + 8);
            doc.text(`Designation: ${emp.designation}`, 100, employeeDetailsY + 8);
            doc.text(`Bank Name: ${employeeDetails.bankName || '-'}`, 10, employeeDetailsY + 16);
            doc.text(`Bank Account No: ${employeeDetails.accountNo || '-'}`, 100, employeeDetailsY + 16);
            doc.text(`PAN Number: ${employeeDetails.panNo || '-'}`, 10, employeeDetailsY + 24);
            doc.text(`PF No: ${employeeDetails.pfNumber || '-'}`, 100, employeeDetailsY + 24);
            doc.text(`PF UAN: ${employeeDetails.uanNumber || '-'}`, 10, employeeDetailsY + 32);
       
            // Draw the Earnings Table
            const earningsStartY = employeeDetailsY + 40;
            doc.autoTable({
                startY: earningsStartY,
                head: [['Earnings', 'Amount (₹)']],
                body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain',
                styles: {
                    cellPadding: 2,
                    fontSize: 9,
                    lineColor: [0, 0, 0],
                    lineWidth: 0.1
                },
                headStyles: {
                    fillColor: [255, 255, 255],
                    textColor: [0, 0, 0]
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245]
                }
            });
       
            // Draw the Deductions Table
            const deductionsStartY = doc.lastAutoTable.finalY + 10;
            doc.autoTable({
                startY: deductionsStartY,
                head: [['Deductions', 'Amount (₹)']],
                body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain',
                styles: {
                    cellPadding: 2,
                    fontSize: 9,
                    lineColor: [0, 0, 0],
                    lineWidth: 0.1
                },
                headStyles: {
                    fillColor: [255, 255, 255],
                    textColor: [0, 0, 0]
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245]
                },
                foot: [['Total Deductions', totalDeductions.toFixed(2)]],
                footStyles: {
                    fillColor: [255, 255, 255],
                    textColor: [0, 0, 0],
                    fontSize: 10,
                    fontStyle: 'bold'
                }
            });
       
            // Add Total Salary and Net Pay
            const totalSalaryY = doc.lastAutoTable.finalY + 10;
            doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 10, totalSalaryY);

            // doc.text(`Total Earnings: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY);
            doc.text(`Net Pay: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY + 8);
       
            // Add Disclaimer
            doc.text('Note: This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 16);
       
            // Save the document
            doc.save('payslip.pdf');
            console.log("PDF generated successfully");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    const handleHide = () => {
        setIsTotalSalaryVisible(!isTotalSalaryVisible);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!employeeDetails || !payslipDetails) {
        return <div>No payslip data available.</div>;
    }

    // Define types and keys
    const earningsTypes = ['BASIC', 'HRA', 'SPECIAL ALLOWANCE', 'OTHER ALLOWANCE', 'TRAVEL ALLOWANCE'];
    const deductionsTypes = ['PF', 'TOTAL'];

    // Map earnings
    const earnings = earningsTypes.map(type => {
        const key = `revised_full_${type.replace(' ', '_').toLowerCase()}`;
        return {
            type,
            amount: parseFloat(payslipDetails[key]) || 0
        };
    });

    // Map total_amt to earnings
    const totalAmount = parseFloat(payslipDetails.total_amt) || 0;

    // Map deductions
    const deductions = deductionsTypes.map(type => {
        let key;
        if (type === 'PF') {
            key = 'revised_full_employer_pf'; // Use the correct key for PF
        } else if (type === 'TOTAL') {
            key = 'total_deductions'; // Use the correct key for total deductions
        }
        return {
            type,
            amount: parseFloat(payslipDetails[key]) || 0
        };
    });

    // Calculate totals
    const totalEarnings = totalAmount;
    const totalDeductions = deductions.reduce((total, record) => total + record.amount, 0);

    return (
        <div className="payslip-container">
            <div className="tabs">
                <button className="download-button1">Payslip</button>
                <button className="download-button" onClick={handleDownload}>Download  <FaDownload /></button>
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
                                {earnings.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.type}</td>
                                        <td>{record.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>{totalEarnings.toFixed(2)}</td>
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
                                {deductions.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.type}</td>
                                        <td>{record.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>{totalDeductions.toFixed(2)}</td>
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
                            <p><strong>Name</strong>: {employeeDetails.firstName}</p>
                            <p><strong>Employee No</strong>: {employeeDetails.emp_id}</p>
                            <p><strong>Joining Date</strong>: {new Date(employeeDetails.DOJ).toLocaleDateString()}</p>
                            <p><strong>Designation</strong>: {employeeDetails.designation}</p>
                            <p><strong>PF Number</strong>: {employeeDetails.pfNumber || '-'}</p>
                            <p><strong>UAN Number</strong>: {employeeDetails.uanNumber || '-'}</p>
                            <p><strong>PAN Number</strong>: {employeeDetails.panNo || '-'}</p>
                            <p><strong>Bank Name</strong>: {employeeDetails.bankName || '-'}</p>
                            <p><strong>Account Number</strong>: {employeeDetails.accountNo || '-'}</p>
                            <p><strong>IFSC Code</strong>: {employeeDetails.ifscCode || '-'}</p>

                            <div className='total-salary'>
                                <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalEarnings.toFixed(2) : '*******'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payslip;