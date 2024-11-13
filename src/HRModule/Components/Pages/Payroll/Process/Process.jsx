
 
// // // import React, { useState, useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { Settings, RotateCcw } from 'lucide-react';
// // // import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
// // // import './Process.css';
 
// // // const PayrollInterface = () => {
// // //   const [completedTasks, setCompletedTasks] = useState([]);
// // //   const [progress, setProgress] = useState(0); // State for progress
// // //   const dispatch = useDispatch();
 
// // //   const { salaryProcessed, salaryProcessing, error } = useSelector((state) => state.payroll);
 
// // //   // Mock data for process logs
// // //   const processLogs = [
// // //     { month: 'September', description: 'Processed payroll for September', processInfo: 'All employees paid', status: 'Completed' },
// // //     { month: 'August', description: 'Processed payroll for August', processInfo: 'Issues with data', status: 'Failed' },
// // //     // Add more logs as needed
// // //   ];
 
// // //   const checklistItems = [
// // //     'Lock Previous Payroll',
// // //     'Employee Additions',
// // //     'Employee Separations',
// // //     'Employee Confirmations',
// // //     'Employee Data Updates',
// // //   ];
 
// // //   const handleProcessPayroll = () => {
// // //     const previousMonth = new Date().getMonth(); // Previous month
// // //     const currentYear = new Date().getFullYear();
   
// // //     // Simulate progress
// // //     setProgress(0);
// // //     const interval = setInterval(() => {
// // //       setProgress((prev) => {
// // //         if (prev >= 100) {
// // //           clearInterval(interval);
// // //           return 100;
// // //         }
// // //         return prev + 10; // Increment progress
// // //       });
// // //     }, 300); // Update every 300ms
 
// // //     dispatch(processSalaryForAllEmployees({ month: previousMonth, year: currentYear }));
// // //   };
 
// // //   useEffect(() => {
// // //     if (salaryProcessed) {
// // //       toast.success('Payroll processed successfully!');
// // //       setProgress(100); // Set progress to 100% on success
// // //     }
// // //     if (error) {
// // //       toast.error(`Error: ${error}`);
// // //       setProgress(0); // Reset progress on error
// // //     }
// // //   }, [salaryProcessed, error]); // Add dependency array to handle effect on change
 
// // //   return (
// // //     <div className="payroll-container1">
// // //       <ToastContainer /> {/* Add the ToastContainer here */}
// // //       <div className="payroll-container">
// // //         {/* Header */}
// // //         <div className="payroll-header">
// // //           <h1 className="payroll-title">Payroll Process</h1>
// // //         </div>
 
// // //         {/* Main Content */}
// // //         <div className="process-buttons">
// // //           <button className="process-button" onClick={handleProcessPayroll} disabled={salaryProcessing}>
// // //             <Settings className="icon" />
// // //             {salaryProcessing ? 'Processing...' : 'Process Payroll'}
// // //           </button>
// // //         </div>
 
// // //         {/* Progress Bar */}
// // //         {salaryProcessing && (
// // //           <div className="progress-bar">
// // //             <div
// // //               className="progress"
// // //               style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
// // //             />
// // //           </div>
// // //         )}
 
// // //         {/* Process Log */}
// // //         <div className="process-log">
// // //           <h2 className="log-title">Last 20 process log</h2>
// // //           <div className="log-table">
// // //             <table>
// // //               <thead className="log-header">
// // //                 <tr>
// // //                   <th>Payroll</th>
// // //                   <th>Description</th>
// // //                   <th>Status</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {processLogs.map((log, index) => (
// // //                   <tr key={index}>
// // //                     <td>{log.month}</td>
// // //                     <td>
// // //                       <div>{log.description}</div>
// // //                       <div className="process-info">{log.processInfo}</div>
// // //                     </td>
// // //                     <td>
// // //                       <span className="completed-status">
// // //                         <RotateCcw className="icon" />
// // //                         {log.status}
// // //                       </span>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>
 
// // //         {/* Checklist Section */}
// // //         <div className="checklist-section">
// // //           <div className="checklist">
// // //             <h2 className="checklist-title">Checklist</h2>
// // //             <div className="checklist-items">
// // //               {checklistItems.map((item, index) => (
// // //                 <label key={index} className="checklist-item">
// // //                   <input
// // //                     type="checkbox"
// // //                     className="form-checkbox"
// // //                     onChange={(e) => {
// // //                       if (e.target.checked) {
// // //                         setCompletedTasks([...completedTasks, item]);
// // //                       } else {
// // //                         setCompletedTasks(completedTasks.filter((task) => task !== item));
// // //                       }
// // //                     }}
// // //                   />
// // //                   <span>{item}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="completed-tasks">
// // //             <div className="completed-header">
// // //               <h2 className="completed-title">Completed Tasks</h2>
// // //               <button className="reset-button" onClick={() => setCompletedTasks([])}>Reset</button>
// // //             </div>
// // //             {completedTasks.length === 0 ? (
// // //               <p className="empty-message">Feeling empty. Tick off some items & make my day...</p>
// // //             ) : (
// // //               <ul className="completed-list">
// // //                 {completedTasks.map((task, index) => (
// // //                   <li key={index} className="completed-item">
// // //                     <span className="completed-check">✓</span> {task}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
 
// // // export default PayrollInterface;




// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice'
// // import * as XLSX from 'xlsx';
// // import './Process.css';

// // const BulkPFDownload = () => {
// //   const dispatch = useDispatch();
// //   const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
// //   const [displayData, setDisplayData] = useState([]);

// //   const handleBulkPFDownload = async () => {
// //     // Fetch the salary data
// //     const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

// //     if (resultAction.payload && resultAction.payload.salaryDetails) {
// //       const salaryData = resultAction.payload.salaryDetails;

// //       // Map data to desired columns with custom headings
// //       const formattedData = salaryData.map((employee) => ({
// //         'UAN': employee.uan || '',
// //         'MEMBER NAME': employee.firstName,
// //         'GROSS WAGES': employee.gross || '0.00',
// //         'EPF WAGES': employee.revised_full_employer_pf || '0.00',
// //         'EPS WAGES': employee.emp_eps || '0.00', // assuming same as EPF Wages
// //         'EDLI WAGES': employee.revised_full_employer_pf || '0.00', // assuming same as EPF Wages
// //         'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
// //         'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
// //         'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00', // assuming 0 for EPF EPS difference
// //         'NCP DAYS': '0', // assuming 0 for Non-contributory days
// //         'REFUND OF ADVANCES': '0.00' // assuming 0 for refunds
// //       }));

// //       // Update state to display data on webpage
// //       setDisplayData(formattedData);

// //       // Create worksheet and workbook for download
// //       const worksheet = XLSX.utils.json_to_sheet(formattedData);
// //       const workbook = XLSX.utils.book_new();
// //       XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');

// //       // Set custom styles (header bold, font sizes)
// //       const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
// //       for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
// //         const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
// //         if (headerCell) {
// //           headerCell.s = {
// //             font: { bold: true, sz: 12, color: { rgb: "000000" } },
// //             alignment: { vertical: "center", horizontal: "center" },
// //           };
// //         }
// //       }

// //       // Auto-size columns
// //       const colWidths = formattedData[0] && Object.values(formattedData[0]).map(val => ({ wch: val.length + 5 }));
// //       worksheet['!cols'] = colWidths;

// //       // Trigger Excel file download
// //       XLSX.writeFile(workbook, 'BulkPFData.xlsx');
// //     } else {
// //       console.error('No data available for download');
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleBulkPFDownload}  className="process-button" disabled={salaryProcessing}>
// //         {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
// //       </button>
// //       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
// //       {/* Display fetched data in a table */}
// //       {displayData.length > 0 && (
// //         <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
// //           <thead>
// //             <tr>
// //               {Object.keys(displayData[0]).map((key) => (
// //                 <th key={key} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
// //                   {key}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {displayData.map((row, index) => (
// //               <tr key={index}>
// //                 {Object.values(row).map((value, idx) => (
// //                   <td key={idx} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
// //                     {value}
// //                   </td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default BulkPFDownload;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
// import * as XLSX from 'xlsx';
// import './Process.css';

// const BulkPFDownload = () => {
//   const dispatch = useDispatch();
//   const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
//   const [displayData, setDisplayData] = useState([]);

//   const handleBulkPFDownload = async () => {
//     // Fetch the salary data
//     const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

//     if (resultAction.payload && resultAction.payload.salaryDetails) {
//       const salaryData = resultAction.payload.salaryDetails;

//       // Map data to desired columns with custom headings
//       const formattedData = salaryData.map((employee) => ({
//         'UAN': employee.uan || '',
//         'MEMBER NAME': employee.firstName,
//         'GROSS WAGES': employee.gross || '0.00',
//         'EPF WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPS WAGES': employee.emp_eps || '0.00',
//         'EDLI WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
//         'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
//         'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00',
//         'NCP DAYS': '0',
//         'REFUND OF ADVANCES': '0.00'
//       }));

//       // Update state to display data on webpage
//       setDisplayData(formattedData);

//       // Create worksheet and workbook for download
//       const worksheet = XLSX.utils.json_to_sheet(formattedData);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');

//       // Set custom styles (header bold, font sizes, blue color)
//       const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
//       for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
//         const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
//         if (headerCell) {
//           headerCell.s = {
//             font: { bold: true, sz: 12, color: { rgb: "0000FF" } },
//             alignment: { vertical: "center", horizontal: "center" },
//           };
//         }
//       }

//       // Auto-size columns
//       const colWidths = formattedData[0] && Object.values(formattedData[0]).map(val => ({ wch: Math.max(val.toString().length + 5, 10) }));
//       worksheet['!cols'] = colWidths;

//       // Trigger Excel file download
//       XLSX.writeFile(workbook, 'BulkPFData.xlsx');
//     } else {
//       console.error('No data available for download');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBulkPFDownload} className="process-button" disabled={salaryProcessing}>
//         {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
//       </button>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       {/* Display fetched data in a table */}
//       {displayData.length > 0 && (
//         <table className="pf-table">
//           <thead>
//             <tr>
//               {Object.keys(displayData[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, idx) => (
//                   <td key={idx}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BulkPFDownload;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
// import * as XLSX from 'xlsx';
// import './Process.css';

// const BulkPFDownload = () => {
//   const dispatch = useDispatch();
//   const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
//   const [displayData, setDisplayData] = useState([]);

//   const handleBulkPFDownload = async () => {
//     // Fetch the salary data
//     const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

//     if (resultAction.payload && resultAction.payload.salaryDetails) {
//       const salaryData = resultAction.payload.salaryDetails;

//       // Map data to desired columns with custom headings
//       const formattedData = salaryData.map((employee) => ({
//         'UAN': employee.uan || '',
//         'MEMBER NAME': employee.firstName,
//         'GROSS WAGES': employee.gross || '0.00',
//         'EPF WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPS WAGES': employee.emp_eps || '0.00',
//         'EDLI WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
//         'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
//         'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00',
//         'NCP DAYS': '0',
//         'REFUND OF ADVANCES': '0.00'
//       }));

//       // Update state to display data on webpage
//       setDisplayData(formattedData);

//       // Create worksheet and workbook for download
//       const worksheet = XLSX.utils.json_to_sheet(formattedData);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');

//       // Apply custom styles to the header row in Excel
//       const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
//       for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
//         const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
//         if (headerCell) {
//           headerCell.s = {
//             font: { bold: true, sz: 12, color: { rgb: "0000FF" } }, // Blue color for font
//             alignment: { vertical: "center", horizontal: "center" },
//           };
//         }
//       }

//       // Auto-size columns for Excel
//       const colWidths = formattedData[0] && Object.values(formattedData[0]).map(val => ({ wch: val.toString().length + 5 }));
//       worksheet['!cols'] = colWidths;

//       // Trigger Excel file download
//       XLSX.writeFile(workbook, 'BulkPFData.xlsx');
//     } else {
//       console.error('No data available for download');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBulkPFDownload} className="process-button" disabled={salaryProcessing}>
//         {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
//       </button>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
//       {/* Display fetched data in a table */}
//       {displayData.length > 0 && (
//         <table className="data-table">
//           <thead>
//             <tr>
//               {Object.keys(displayData[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, idx) => (
//                   <td key={idx}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BulkPFDownload;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
// import * as XLSX from 'xlsx';
// import './Process.css';

// const BulkPFDownload = () => {
//   const dispatch = useDispatch();
//   const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
//   const [displayData, setDisplayData] = useState([]);

//   const handleBulkPFDownload = async () => {
//     // Fetch the salary data
//     const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

//     if (resultAction.payload && resultAction.payload.salaryDetails) {
//       const salaryData = resultAction.payload.salaryDetails;

//       // Map data to desired columns with custom headings
//       const formattedData = salaryData.map((employee) => ({
//         'UAN': employee.uan || '',
//         'MEMBER NAME': employee.firstName,
//         'GROSS WAGES': employee.gross || '0.00',
//         'EPF WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPS WAGES': employee.emp_eps || '0.00',
//         'EDLI WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
//         'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
//         'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00',
//         'NCP DAYS': '0',
//         'REFUND OF ADVANCES': '0.00'
//       }));

//       // Update state to display data on webpage
//       setDisplayData(formattedData);

//       // Create worksheet and workbook for download
//       const worksheet = XLSX.utils.json_to_sheet(formattedData);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');

//       // Apply custom styles to the header row in Excel
//       const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
//       for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
//         const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
//         if (headerCell) {
//           headerCell.s = {
//             font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, // White color for font
//             fill: { fgColor: { rgb: "4F81BD" } }, // Light blue background for the header
//             alignment: { vertical: "center", horizontal: "center" },
//             border: { // Adding border around header cells
//               top: { style: 'thin', color: { rgb: "000000" } },
//               bottom: { style: 'thin', color: { rgb: "000000" } },
//               left: { style: 'thin', color: { rgb: "000000" } },
//               right: { style: 'thin', color: { rgb: "000000" } }
//             }
//           };
//         }
//       }

//       // Apply styling for the body cells
//       const bodyRange = worksheet['!ref'];
//       for (let row = 1; row <= headerRange.e.r; row++) {
//         for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
//           const cell = worksheet[XLSX.utils.encode_cell({ r: row, c: col })];
//           if (cell) {
//             cell.s = {
//               font: { sz: 10 },
//               alignment: { vertical: "center", horizontal: "left" },
//               border: { // Adding border around data cells
//                 top: { style: 'thin', color: { rgb: "000000" } },
//                 bottom: { style: 'thin', color: { rgb: "000000" } },
//                 left: { style: 'thin', color: { rgb: "000000" } },
//                 right: { style: 'thin', color: { rgb: "000000" } }
//               }
//             };
//           }
//         }
//       }
      

//       // Auto-size columns for Excel
//       const colWidths = formattedData[0] && Object.values(formattedData[0]).map(val => ({ wch: val.toString().length + 5 }));
//       worksheet['!cols'] = colWidths;

//       // Trigger Excel file download
//       XLSX.writeFile(workbook, 'BulkPFData.xlsx');
//     } else {
//       console.error('No data available for download');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBulkPFDownload} className="process-button" disabled={salaryProcessing}>
//         {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
//       </button>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
//       {/* Display fetched data in a table */}
//       {displayData.length > 0 && (
//         <table className="data-table">
//           <thead>
//             <tr>
//               {Object.keys(displayData[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, idx) => (
//                   <td key={idx}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BulkPFDownload;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
// import * as XLSX from 'xlsx';
// import './Process.css';

// const BulkPFDownload = () => {
//   const dispatch = useDispatch();
//   const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
//   const [displayData, setDisplayData] = useState([]);

//   const handleBulkPFDownload = async () => {
//     // Fetch the salary data
//     const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

//     if (resultAction.payload && resultAction.payload.salaryDetails) {
//       const salaryData = resultAction.payload.salaryDetails;

//       // Map data to desired columns with custom headings
//       const formattedData = salaryData.map((employee) => ({
//         'UAN': employee.uan || '',
//         'MEMBER NAME': employee.firstName,
//         'GROSS WAGES': employee.gross || '0.00',
//         'EPF WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPS WAGES': employee.emp_eps || '0.00',
//         'EDLI WAGES': employee.revised_full_employer_pf || '0.00',
//         'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
//         'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
//         'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00',
//         'NCP DAYS': '0',
//         'REFUND OF ADVANCES': '0.00'
//       }));

//       // Update state to display data on webpage
//       setDisplayData(formattedData);

//       // Create worksheet and workbook for download
//       const worksheet = XLSX.utils.json_to_sheet(formattedData);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');

//       // Apply custom styles to the header row in Excel
//       const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
//       for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
//         const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: C })];
//         if (headerCell) {
//           headerCell.s = {
//             font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, // White color for font
//             fill: { fgColor: { rgb: "A9C6E1" } }, // Gradient-like light blue background
//             alignment: { vertical: "center", horizontal: "center" },
//             border: { // Adding border around header cells
//               top: { style: 'thin', color: { rgb: "000000" } },
//               bottom: { style: 'thin', color: { rgb: "000000" } },
//               left: { style: 'thin', color: { rgb: "000000" } },
//               right: { style: 'thin', color: { rgb: "000000" } }
//             },
//             // Adding padding to header cells
//             padding: { top: 5, bottom: 5, left: 10, right: 10 }
//           };
//         }
//       }

//       // Apply styling for the body cells
//       const bodyRange = worksheet['!ref'];
//       for (let row = 1; row <= headerRange.e.r; row++) {
//         for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
//           const cell = worksheet[XLSX.utils.encode_cell({ r: row, c: col })];
//           if (cell) {
//             cell.s = {
//               font: { sz: 10 },
//               alignment: { vertical: "center", horizontal: "left" },
//               border: { // Adding border around data cells
//                 top: { style: 'thin', color: { rgb: "000000" } },
//                 bottom: { style: 'thin', color: { rgb: "000000" } },
//                 left: { style: 'thin', color: { rgb: "000000" } },
//                 right: { style: 'thin', color: { rgb: "000000" } }
//               },
//               // Adding padding to data cells
//               padding: { top: 3, bottom: 3, left: 7, right: 7 }
//             };
//           }
//         }
//       }

//       // Auto-size columns for Excel
//       const colWidths = formattedData[0] && Object.values(formattedData[0]).map(val => ({ wch: val.toString().length + 5 }));
//       worksheet['!cols'] = colWidths;

//       // Trigger Excel file download
//       XLSX.writeFile(workbook, 'BulkPFData.xlsx');
//     } else {
//       console.error('No data available for download');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBulkPFDownload} className="process-button" disabled={salaryProcessing}>
//         {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
//       </button>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
//       {/* Display fetched data in a table */}
//       {displayData.length > 0 && (
//         <table className="data-table">
//           <thead>
//             <tr>
//               {Object.keys(displayData[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, idx) => (
//                   <td key={idx}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BulkPFDownload;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processSalaryForAllEmployees } from '../../../../Redux/Slices/BulkpayrollSlice';
import * as XLSX from 'xlsx';
import './Process.css';

const BulkPFDownload = () => {
  const dispatch = useDispatch();
  const { salaryProcessed, error, salaryProcessing } = useSelector((state) => state.payroll);
  const [displayData, setDisplayData] = useState([]);

  const handleBulkPFDownload = async () => {
    try {
      const resultAction = await dispatch(processSalaryForAllEmployees({ month: '11', year: '2024' }));

      if (resultAction.payload && resultAction.payload.salaryDetails) {
        const salaryData = resultAction.payload.salaryDetails;

        const formattedData = salaryData.map((employee) => ({
          'UAN': employee.uan || '',
          'MEMBER NAME': employee.firstName,
          'GROSS WAGES': employee.gross || '0.00',
          'EPF WAGES': employee.revised_full_employer_pf || '0.00',
          'EPS WAGES': employee.emp_eps || '0.00',
          'EDLI WAGES': employee.revised_full_employer_pf <15000 ? employee.revised_full_employer_pf : 15000 || "0.00",
          'EPF CONTRI REMITTED': employee.epfContribution || '0.00',
          'EPS CONTRI REMITTED': employee.epsContribution || '0.00',
          'EPF EPS DIFF REMITTED': employee.epf_eps_diff || '0.00',
          'NCP DAYS': '0',
          'REFUND OF ADVANCES': '0.00'
        }));

        setDisplayData(formattedData);

        // Create worksheet
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();

        // Define styles
        const headerStyle = {
          font: { 
            bold: true, 
            sz: 12, 
            color: { rgb: "blue" }
          },
          fill: { 
            fgColor: { rgb: "4A90E2" }  // Professional blue color
          },
          alignment: { 
            vertical: "center", 
            horizontal: "center", 
            wrapText: true 
          },
          border: {
            top: { style: 'medium', color: { rgb: "000000" } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            left: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
          }
        };

        const bodyStyle = {
          font: { 
            sz: 11,
            color: { rgb: "000000" }
          },
          alignment: { 
            vertical: "center", 
            horizontal: "left",
            wrapText: true
          },
          border: {
            top: { style: 'thin', color: { rgb: "D3D3D3" } },
            bottom: { style: 'thin', color: { rgb: "D3D3D3" } },
            left: { style: 'thin', color: { rgb: "D3D3D3" } },
            right: { style: 'thin', color: { rgb: "D3D3D3" } }
          }
        };

        // Apply header styles
        const range = XLSX.utils.decode_range(worksheet['!ref']);
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const headerAddress = XLSX.utils.encode_cell({ r: 0, c: C });
          if (!worksheet[headerAddress]) continue;
          
          worksheet[headerAddress].s = headerStyle;
        }

        // Apply body styles and set column widths
        const columnWidths = [];
        for (let C = range.s.c; C <= range.e.c; ++C) {
          let maxLength = 0;
          
          // Check header length
          const headerAddress = XLSX.utils.encode_cell({ r: 0, c: C });
          const headerCell = worksheet[headerAddress];
          if (headerCell) {
            maxLength = Math.max(maxLength, headerCell.v.toString().length);
          }

          // Check data lengths
          for (let R = range.s.r + 1; R <= range.e.r; ++R) {
            const address = XLSX.utils.encode_cell({ r: R, c: C });
            const cell = worksheet[address];
            if (cell) {
              worksheet[address].s = bodyStyle;
              maxLength = Math.max(maxLength, cell.v.toString().length);
            }
          }

          // Set column width (character width + padding)
          columnWidths.push({ wch: maxLength + 4 });
        }

        worksheet['!cols'] = columnWidths;
        worksheet['!rows'] = Array(range.e.r + 1).fill({ hpt: 18 }); // Set row height

        XLSX.utils.book_append_sheet(workbook, worksheet, 'PF Data');
        XLSX.writeFile(workbook, 'BulkPFData.xlsx');
      }
    } catch (err) {
      console.error('Error processing download:', err);
    }
  };

  return (
    <div className="bulk-pf-container">
      <button 
        onClick={handleBulkPFDownload} 
        className="download-button" 
        disabled={salaryProcessing}
      >
        {salaryProcessing ? 'Processing...' : 'Bulk PF Download'}
      </button>
      
      {error && <p className="error-message">Error: {error}</p>}
      
      {displayData.length > 0 && (
        <div className="table-container">
          <table className="pf-data-table">
            <thead>
              <tr>
                {Object.keys(displayData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BulkPFDownload;