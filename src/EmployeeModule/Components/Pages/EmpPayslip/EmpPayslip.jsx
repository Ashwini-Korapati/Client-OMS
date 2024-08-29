
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
// import { FaDownload } from "react-icons/fa6";
// import img from '../../../../HRModule/Assets/nmitlogo.png'
// import '../EmpPayslip/EmpPayslip.css';

// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const Payslip = () => {
//     const dispatch = useDispatch();
//     const { emp } = useSelector(state => state.profile.emp);

//     const { salaryRecords, status, error } = useSelector(state => state.payslip);

//     const emp_id = ''; 
//     const [month, setMonth] = useState(7); 
//     const [year, setYear] = useState(2024); 
//     const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

//     useEffect(() => {
//         dispatch(fetchPayslip({ month, year, emp_id }));
//     }, [dispatch, month, year, emp_id]);

//     // const handleDownload = () => {
//     //     const doc = new jsPDF();

//     //     doc.text('Payslip', 20, 10);

//     //     doc.autoTable({
//     //         startY: 20,
//     //         head: [['Earning Type', 'Amount in (₹)']],
//     //         body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
//     //         theme: 'striped'
//     //     });

//     //     doc.autoTable({
//     //         startY: doc.lastAutoTable.finalY + 10,
//     //         head: [['Deduction Type', 'Amount in (₹)']],
//     //         body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
//     //         theme: 'striped'
//     //     });

//     //     const totalSalaryY = doc.lastAutoTable.finalY + 20;
//     //     doc.text(`Total Salary: ₹${totalAmountFromAPI.toFixed(2)}`, 20, totalSalaryY);
//     //     doc.save('payslip.pdf');
//     // };


//     const handleDownload = () => {
//         const doc = new jsPDF();
    
//         // Add Company Logo and Header
//         const logo = {img}; // Path to the company logo
//         doc.addImage(logo, 'PNG', 10, 10, 50, 20); // Adjust dimensions and position as needed
//         doc.setFontSize(18);
//         doc.text('NM IT Solutions Pvt Ltd', 70, 20);
//         doc.setFontSize(12);
//         doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 70, 30);
    
//         doc.setFontSize(14);
//         doc.text('Payslip', 10, 50);
    
//         // Add Employee Details
//         doc.setFontSize(12);
//         doc.text(`Name: ${salaryRecord.firstName}`, 10, 60);
//         doc.text(`Employee No: ${salaryRecord.emp_id}`, 10, 70);
//         doc.text(`Joining Date: ${new Date(salaryRecord.created_date).toLocaleDateString()}`, 10, 80);
//         doc.text(`Designation: ${salaryRecord.designation}`, 10, 90);
//         doc.text(`Bank Name: ${emp.bankName || '-'}`, 10, 100);
//         doc.text(`Bank Account No: ${emp.accountNo || '-'}`, 10, 110);
//         doc.text(`PAN Number: ${emp.pan || '-'}`, 10, 120);
//         doc.text(`PF Number: ${emp.pf || '-'}`, 10, 130);
//         doc.text(`UAN Number: ${emp.uan || '-'}`, 10, 140);
//         doc.text(`Effective Work Days: ${salaryRecord.effectiveWorkDays || '-'}`, 10, 150);
//         doc.text(`LOP: ${salaryRecord.lop || '-'}`, 10, 160);
    
//         // Add Earnings Table
//         doc.autoTable({
//             startY: 170,
//             head: [['Earnings', 'Amount (₹)']],
//             body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'striped',
//         });
    
//         // Add Deductions Table
//         doc.autoTable({
//             startY: doc.lastAutoTable.finalY + 10,
//             head: [['Deductions', 'Amount (₹)']],
//             body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'striped',
//         });
    
//         // Add Net Pay
//         const totalSalaryY = doc.lastAutoTable.finalY + 10;
//         doc.setFontSize(12);
//         doc.text(`Net Pay: ₹${totalAmountFromAPI.toFixed(2)}`, 10, totalSalaryY);
    
//         // Add Disclaimer
//         doc.text('This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 10);
    
//         doc.save('payslip.pdf');
//     };
    

//     const handleHide = () => {
//         setIsTotalSalaryVisible(!isTotalSalaryVisible);
//     };

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     if (salaryRecords.length === 0) {
//         return <div>No payslip data available.</div>;
//     }

//     const salaryRecord = salaryRecords[0];

//     const earnings = [
//         { type: "BASIC", amount: parseFloat(salaryRecord.revised_full_basic) || 0 },
//         { type: "HRA", amount: parseFloat(salaryRecord.revised_full_hra) || 0 },
//         { type: "SPECIAL ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_special_allowance) || 0 },
//         { type: "OTHER ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_other_allowance) || 0 },
//         { type: "TRAVELLING ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_travel_allowance) || 0 },
//     ];

//     const deductions = [
//         { type: "PF", amount: parseFloat(salaryRecord.revised_full_employer_pf) || 0 }
//     ];

//     const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
//     const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
//     const totalAmount = totalEarnings - totalDeductions;
//     const totalAmountFromAPI = parseFloat(salaryRecord.total_amt) || 0;

//     return (
//         <div className="payslip-container">
//             <div className="tabs">
//                 <button className="download-button1">Payslip</button>
//                 <button className="download-button" onClick={handleDownload}><FaDownload /></button>
//                 <select 
//                     className="month-select" 
//                     value={month}
//                     onChange={(e) => setMonth(parseInt(e.target.value))}
//                 >
//                     <option value={7}>Jul 2024</option>
//                     <option value={8}>Aug 2024</option>
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
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalAmountFromAPI.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                     </div>
//                     <div className="deductions">
//                         <h3>Deductions</h3>
//                         <table id="deductionsTable">
//                             <thead>
//                                 <tr>
//                                     <th>Deduction Type</th>
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
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalDeductions.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="employee-details">
//                     <button className="hide-button" onClick={handleHide}>
//                         {isTotalSalaryVisible ? 'Hide' : 'Show'}
//                     </button>
//                     <h3>Employee details</h3>
//                     <div className="details">
//                         <p><strong>Name</strong>: {salaryRecord.firstName}</p>
//                         <p><strong>Employee No</strong>: {salaryRecord.emp_id}</p>
//                         <p><strong>Joining Date</strong>: {new Date(salaryRecord.created_date).toLocaleDateString()}</p>
//                         <p><strong>Designation</strong>: {salaryRecord.designation}</p>
//                         <p><strong>PF Number</strong>: {emp.pf}</p>
//                         <p><strong>UAN Number</strong>: {emp.uan}</p>
//                         <p><strong>PAN Number</strong>: {emp.pan}</p>
//                         <p><strong>Bank Name</strong>: {emp.bankName}</p>
//                         <p><strong>Account Number</strong>: {emp.accountNo}</p>
//                         <p><strong>IFSC Code</strong>: {emp.ifsc}</p>
//                     </div>
//                     <div className='total-salary'>
//                         <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalAmountFromAPI.toFixed(2) : '*******'}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payslip;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
// import { FaDownload } from "react-icons/fa6";
// import img from '../../../../HRModule/Assets/nmitlogo.png'
// import '../EmpPayslip/EmpPayslip.css';

// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const Payslip = () => {
//     const dispatch = useDispatch();
//     const { emp } = useSelector(state => state.profile.emp);

//     const { salaryRecords, status, error } = useSelector(state => state.payslip);

//     const emp_id = ''; 
//     const [month, setMonth] = useState(7); 
//     const [year, setYear] = useState(2024); 
//     const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

//     useEffect(() => {
//         dispatch(fetchPayslip({ month, year, emp_id }));
//     }, [dispatch, month, year, emp_id]);

//     // const handleDownload = async () => {
//     //     const doc = new jsPDF();
    
//     //     // Load and add Company Logo and Header
//     //     const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
//     //         const reader = new FileReader();
//     //         reader.onloadend = () => resolve(reader.result);
//     //         reader.readAsDataURL(blob);
//     //     }));
//     //     doc.addImage(logo, 'PNG', 10, 10, 50, 20); // Adjust dimensions and position as needed
//     //     doc.setFontSize(18);
//     //     doc.text('NM IT Solutions Pvt Ltd', 70, 20);
//     //     doc.setFontSize(12);
//     //     doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 70, 30);
    
//     //     doc.setFontSize(14);
//     //     doc.text('Payslip', 10, 50);
    
//     //     // Add Employee Details
//     //     doc.setFontSize(12);
//     //     doc.text(`Name: ${salaryRecord.firstName}`, 10, 60);
//     //     doc.text(`Employee No: ${salaryRecord.emp_id}`, 10, 70);
//     //     doc.text(`Joining Date: ${new Date(salaryRecord.created_date).toLocaleDateString()}`, 10, 80);
//     //     doc.text(`Designation: ${salaryRecord.designation}`, 10, 90);
//     //     doc.text(`Bank Name: ${emp.bankName || '-'}`, 10, 100);
//     //     doc.text(`Bank Account No: ${emp.accountNo || '-'}`, 10, 110);
//     //     doc.text(`PAN Number: ${emp.pan || '-'}`, 10, 120);
//     //     doc.text(`PF Number: ${emp.pf || '-'}`, 10, 130);
//     //     doc.text(`UAN Number: ${emp.uan || '-'}`, 10, 140);
//     //     doc.text(`Effective Work Days: ${salaryRecord.effectiveWorkDays || '-'}`, 10, 150);
//     //     doc.text(`LOP: ${salaryRecord.lop || '-'}`, 10, 160);
    
//     //     // Add Earnings Table
//     //     doc.autoTable({
//     //         startY: 170,
//     //         head: [['Earnings', 'Amount (₹)']],
//     //         body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
//     //         theme: 'striped',
//     //     });
    
//     //     // Add Deductions Table
//     //     doc.autoTable({
//     //         startY: doc.lastAutoTable.finalY + 10,
//     //         head: [['Deductions', 'Amount (₹)']],
//     //         body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
//     //         theme: 'striped',
//     //     });
    
//     //     // Add Net Pay
//     //     const totalSalaryY = doc.lastAutoTable.finalY + 10;
//     //     doc.setFontSize(12);
//     //     doc.text(`Net Pay: ₹${totalAmountFromAPI.toFixed(2)}`, 10, totalSalaryY);
    
//     //     // Add Disclaimer
//     //     doc.text('This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 10);
    
//     //     doc.save('payslip.pdf');
//     // };
    


//     const handleDownload = async () => {
//         const doc = new jsPDF();
    
//         // Load and add Company Logo and Header
//         const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result);
//             reader.readAsDataURL(blob);
//         }));
//         doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Adjust dimensions and position as needed
//         doc.setFontSize(18);
//         doc.text('NM IT Solutions Pvt Ltd', 50, 20);
//         doc.setFontSize(12);
//         doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 50, 30);
//         doc.line(10, 40, 200, 40); // Draw a line to separate header
    
//         // Add Employee Details Section
//         doc.setFontSize(12);
//         const employeeDetailsY = 50;
//         doc.text(`Name: ${salaryRecord.firstName}`, 10, employeeDetailsY);
//         doc.text(`Employee No: ${salaryRecord.emp_id}`, 100, employeeDetailsY);
//         doc.text(`Joining Date: ${new Date(salaryRecord.created_date).toLocaleDateString()}`, 10, employeeDetailsY + 10);
//         doc.text(`Designation: ${salaryRecord.designation}`, 100, employeeDetailsY + 10);
//         doc.text(`Bank Name: ${emp.bankName || '-'}`, 10, employeeDetailsY + 20);
//         doc.text(`Bank Account No: ${emp.accountNo || '-'}`, 100, employeeDetailsY + 20);
//         doc.text(`PAN Number: ${emp.pan || '-'}`, 10, employeeDetailsY + 30);
//         doc.text(`PF No: ${emp.pf || '-'}`, 100, employeeDetailsY + 30);
//         doc.text(`PF UAN: ${emp.uan || '-'}`, 10, employeeDetailsY + 40);
    
//         // Draw the Earnings Table
//         const earningsStartY = employeeDetailsY + 50;
//         doc.autoTable({
//             startY: earningsStartY,
//             head: [['Earnings', 'Amount (₹)']],
//             body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'grid', // Use grid theme for better visibility of table borders
//             styles: { 
//                 cellPadding: 3, 
//                 fontSize: 10 
//             }
//         });
    
//         // Draw the Deductions Table
//         const deductionsStartY = doc.lastAutoTable.finalY + 10;
//         doc.autoTable({
//             startY: deductionsStartY,
//             head: [['Deductions', 'Amount (₹)']],
//             body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'grid',
//             styles: { 
//                 cellPadding: 3, 
//                 fontSize: 10 
//             }
//         });
    
//         // Add Total Salary and Net Pay
//         const totalSalaryY = doc.lastAutoTable.finalY + 10;
//         doc.text(`Total Earnings: ₹${totalEarnings.toFixed(2)}`, 10, totalSalaryY);
//         doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 100, totalSalaryY);
//         doc.text(`Net Pay: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY + 10);
    
//         // Add Disclaimer
//         doc.text('This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 20);
    
//         doc.save('payslip.pdf');
//     };
    

//     const handleHide = () => {
//         setIsTotalSalaryVisible(!isTotalSalaryVisible);
//     };

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     if (salaryRecords.length === 0) {
//         return <div>No payslip data available.</div>;
//     }

//     const salaryRecord = salaryRecords[0];

//     const earnings = [
//         { type: "BASIC", amount: parseFloat(salaryRecord.revised_full_basic) || 0 },
//         { type: "HRA", amount: parseFloat(salaryRecord.revised_full_hra) || 0 },
//         { type: "SPECIAL ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_special_allowance) || 0 },
//         { type: "OTHER ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_other_allowance) || 0 },
//         { type: "TRAVELLING ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_travel_allowance) || 0 },
//     ];

//     const deductions = [
//         { type: "PF", amount: parseFloat(salaryRecord.revised_full_employer_pf) || 0 }
//     ];

//     const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
//     const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
//     const totalAmount = totalEarnings - totalDeductions;
//     const totalAmountFromAPI = parseFloat(salaryRecord.total_amt) || 0;

//     return (
//         <div className="payslip-container">
//             <div className="tabs">
//                 <button className="download-button1">Payslip</button>
//                 <button className="download-button" onClick={handleDownload}><FaDownload /></button>
//                 <select 
//                     className="month-select" 
//                     value={month}
//                     onChange={(e) => setMonth(parseInt(e.target.value))}
//                 >
//                     <option value={7}>Jul 2024</option>
//                     <option value={8}>Aug 2024</option>
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
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalAmountFromAPI.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                     </div>
//                     <div className="deductions">
//                         <h3>Deductions</h3>
//                         <table id="deductionsTable">
//                             <thead>
//                                 <tr>
//                                     <th>Deduction Type</th>
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
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>{totalDeductions.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="employee-details">
//                     <button className="hide-button" onClick={handleHide}>
//                         {isTotalSalaryVisible ? 'Hide' : 'Show'}
//                     </button>
//                     <h3>Employee details</h3>
//                     <div className="details">
//                         <p><strong>Name</strong>: {salaryRecord.firstName}</p>
//                         <p><strong>Employee No</strong>: {salaryRecord.emp_id}</p>
//                         <p><strong>Joining Date</strong>: {new Date(salaryRecord.created_date).toLocaleDateString()}</p>
//                         <p><strong>Designation</strong>: {salaryRecord.designation}</p>
//                         <p><strong>PF Number</strong>: {emp.pf}</p>
//                         <p><strong>UAN Number</strong>: {emp.uan}</p>
//                         <p><strong>PAN Number</strong>: {emp.pan}</p>
//                         <p><strong>Bank Name</strong>: {emp.bankName}</p>
//                         <p><strong>Account Number</strong>: {emp.accountNo}</p>
//                         <p><strong>IFSC Code</strong>: {emp.ifsc}</p>
//                     </div>
//                     <div className='total-salary'>
//                         <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalAmountFromAPI.toFixed(2) : '*******'}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payslip;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
import { FaDownload } from "react-icons/fa6";
import img from '../../../../HRModule/Assets/nmitlogo.png'
import '../EmpPayslip/EmpPayslip.css';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Payslip = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const { emp } = profile ? profile.emp : {};  // Destructure safely
    const { salaryRecords, status, error } = useSelector(state => state.payslip);

    const emp_id = ''; 
    const [month, setMonth] = useState(7); 
    const [year, setYear] = useState(2024); 
    const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

    useEffect(() => {
        dispatch(fetchPayslip({ month, year, emp_id }));
    }, [dispatch, month, year, emp_id]);

    const handleDownload = async () => {
        console.log("Download initiated");
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
            doc.text(`Name: ${salaryRecord.firstName}`, 10, employeeDetailsY);
            doc.text(`Employee No: ${salaryRecord.emp_id}`, 100, employeeDetailsY);
            doc.text(`Joining Date: ${new Date(salaryRecord.created_date).toLocaleDateString()}`, 10, employeeDetailsY + 8);
            doc.text(`Designation: ${salaryRecord.designation}`, 100, employeeDetailsY + 8);
            doc.text(`Bank Name: ${emp.bankName || '-'}`, 10, employeeDetailsY + 16);
            doc.text(`Bank Account No: ${emp.accountNo || '-'}`, 100, employeeDetailsY + 16);
            doc.text(`PAN Number: ${emp.pan || '-'}`, 10, employeeDetailsY + 24);
            doc.text(`PF No: ${emp.pf || '-'}`, 100, employeeDetailsY + 24);
            doc.text(`PF UAN: ${emp.uan || '-'}`, 10, employeeDetailsY + 32);
    
            // Draw the Earnings Table
            const earningsStartY = employeeDetailsY + 40;
            doc.autoTable({
                startY: earningsStartY,
                head: [['Earnings', 'Amount (₹)']],
                body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain', // Changed theme to 'plain' to remove header color
                styles: { 
                    cellPadding: 2, 
                    fontSize: 9, // Reduced font size for table content
                    lineColor: [0, 0, 0], // Black line color for borders
                    lineWidth: 0.1 // Thinner lines
                },
                headStyles: {
                    fillColor: [255, 255, 255], // Set header background to white
                    textColor: [0, 0, 0] // Set header text color to black
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245] // Light gray background for alternate rows
                }
            });
    
            // Draw the Deductions Table
            const deductionsStartY = doc.lastAutoTable.finalY + 10;
            doc.autoTable({
                startY: deductionsStartY,
                head: [['Deductions', 'Amount (₹)']],
                body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
                theme: 'plain', // Changed theme to 'plain' to remove header color
                styles: { 
                    cellPadding: 2, 
                    fontSize: 9, // Reduced font size for table content
                    lineColor: [0, 0, 0], // Black line color for borders
                    lineWidth: 0.1 // Thinner lines
                },
                headStyles: {
                    fillColor: [255, 255, 255], // Set header background to white
                    textColor: [0, 0, 0] // Set header text color to black
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245] // Light gray background for alternate rows
                }
            });
    
            // Add Total Salary and Net Pay
            const totalSalaryY = doc.lastAutoTable.finalY + 10;
            doc.text(`Total Earnings: ₹${totalEarnings.toFixed(2)}`, 10, totalSalaryY);
            doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 100, totalSalaryY);
            doc.text(`Net Pay: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY + 8);
    
            // Add Disclaimer
            doc.text('Note:This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 16);
    
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

    if (salaryRecords.length === 0) {
        return <div>No payslip data available.</div>;
    }

    const salaryRecord = salaryRecords[0];

    const earnings = [
        { type: "BASIC", amount: parseFloat(salaryRecord.revised_full_basic) || 0 },
        { type: "HRA", amount: parseFloat(salaryRecord.revised_full_hra) || 0 },
        { type: "SPECIAL ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_special_allowance) || 0 },
        { type: "OTHER ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_other_allowance) || 0 },
        { type: "TRAVELLING ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_travel_allowance) || 0 },
    ];

    const deductions = [
        { type: "PF", amount: parseFloat(salaryRecord.revised_full_employer_pf) || 0 }
    ];

    const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
    const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
    const totalAmount = totalEarnings - totalDeductions;
    const totalAmountFromAPI = parseFloat(salaryRecord.total_amt) || 0;

    return (
        <div className="payslip-container">
            <div className="tabs">
                <button className="download-button1">Payslip</button>
                <button className="download-button" onClick={handleDownload}><FaDownload /></button>
                <select 
                    className="month-select" 
                    value={month}
                    onChange={(e) => setMonth(parseInt(e.target.value))}
                >
                    <option value={7}>Jul 2024</option>
                    <option value={8}>Aug 2024</option>
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
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>{totalAmountFromAPI.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="deductions">
                        <h3>Deductions</h3>
                        <table id="deductionsTable">
                            <thead>
                                <tr>
                                    <th>Deduction Type</th>
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
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>{totalDeductions.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="employee-details">
                    <button className="hide-button" onClick={handleHide}>
                        {isTotalSalaryVisible ? 'Hide' : 'Show'}
                    </button>
                    <h3>Employee details</h3>
                    <div className="details">
                        <p><strong>Name</strong>: {salaryRecord.firstName}</p>
                        <p><strong>Employee No</strong>: {salaryRecord.emp_id}</p>
                        <p><strong>Joining Date</strong>: {new Date(salaryRecord.created_date).toLocaleDateString()}</p>
                        <p><strong>Designation</strong>: {salaryRecord.designation}</p>
                        <p><strong>PF Number</strong>: {emp?.pf || '-'}</p>
                        <p><strong>UAN Number</strong>: {emp?.uan || '-'}</p>
                        <p><strong>PAN Number</strong>: {emp?.pan || '-'}</p>
                        <p><strong>Bank Name</strong>: {emp?.bankName || '-'}</p>
                        <p><strong>Account Number</strong>: {emp?.accountNo || '-'}</p>
                        <p><strong>IFSC Code</strong>: {emp?.ifsc || '-'}</p>
                    </div>
                    <div className='total-salary'>
                        <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalAmountFromAPI.toFixed(2) : '*******'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payslip;
