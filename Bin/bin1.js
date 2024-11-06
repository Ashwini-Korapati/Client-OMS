// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const token = localStorage.getItem('authToken');

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
//   const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,  
//       'Content-Type': 'application/json',
//     },
//       // body: JSON.stringify(response),
//          credentials: 'include'
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch holidays');
//   }
//   const data = await response.json();
//   // console.log(data)
//   return data.holidays;
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays:null,   
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state , action) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message; 
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || []; 

// export default leaveCalendarSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const token = localStorage.getItem('authToken');

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
//   const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
      
//     },
//     credentials: 'include',
    
    
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch holidays');
//   }

//   const data = await response.json();
//   // console.log('API Response:', data); 
//   return data.holidaysByMonth; 
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         // console.log('Fulfilled action payload:', action.payload); // Debugging the payload
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

// export default leaveCalendarSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { environment } from '../../../../environment';

// const token = localStorage.getItem('authToken');
// const MAX_RETRIES = 3;

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async (_, { rejectWithValue }) => {
//   let retries = 0;

//   while (retries < MAX_RETRIES) {
//     try {
//       const { data } = await axios.get(`${environment.APIURL}hr/holidays`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       });
//       return data.holidaysByMonth;
//     } catch (error) {
//       if (error.response && error.response.status === 429) {
//         retries += 1;
//         const retryAfter = error.response.headers['retry-after'] || 1;
//         await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
//       } else {
//         return rejectWithValue(error.response ? error.response.data.message : error.message);
//       }
//     }
//   }

//   return rejectWithValue('Max retries reached');
// });

// const leaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidays: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         state.loading = false;
//         state.holidays = action.payload;
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

// export default leaveCalendarSlice.reducer;




css menulist

.custom-menu .ant-menu-item,
.custom-menu .ant-menu-submenu-title {
  font-size: 20px;
  padding: 60px;
}
 
.custom-menu .ant-menu-item-selected {
  background-color: #1890ff;
  color: #fff;
}
 
.menu-item-text {
  font-size: 15px;
}
 
.menu-item {
  margin-bottom: 10px;
}
 
.checkout-menu-item{
  background-color: white;
  color: wheat;
}



.ashwini-header {
  width: 100%;
  height: 60px;
  color: black;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  border-color: rgba(0, 0, 0, 0.4); 
  background-color: #F7DED0;
  backdrop-filter: blur(10px);
}


.supports-backdrop-filter {
  background-color: #F7DED0;
}

@supports (backdrop-filter: blur(10px)) {
  .sticky-header.supports-backdrop-filter {
    background-color: #F7DED0;
  }
}

.ashwini-header-menu {
  /* margin-left: 0px; */
  display: flex;
  align-items: end;
  height: 100%;
}

.ashwini-menu-item {
  display: inline-flex;
  align-items: end;
  padding: 10px;
  cursor: pointer;
  position: relative; 
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px; 
}

.ashwini-menu-item:hover .submenu {
  display: block; 
}

.ashwini-submenu {
  width: 60vw;
  display: none; /* Hide by default */
  position: absolute;
  top: 100%; /* Align below the parent menu item */
  left: 0;
  /* background: #d5bdaf; */
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it appears above other elements */
}

.ashwini-submenu .ashwini-menu-item {
  padding: 8px;
}

.ashwini-submenu .submenu {
  display: none; /* Hide sub-dropdowns by default */
  position: absolute;
  top: 40px; /* Align with the top of the parent submenu item */
  bottom: 100%; /* Position to the right of the parent submenu */
  /* background: #d5bdaf; */
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ashwini-menu-item:hover .ashwini-submenu {
  display: block; /* Show dropdown on hover */
}

.ashwini-menu-item:hover .ashwini-submenu .ashwini-submenu {
  display: block; /* Show nested dropdowns on hover */
}

.ashwini-menu-item:hover {
  background: white;
}

.ashwini-menu-item .ashwini-icon {
  margin-right: 20px;
  font-size: 20px;
}

.ashwini-menu-item .ashwini-label {
  font-weight: bold;
  margin-left: 5px;
}

.ashwini-arrow {
  margin-left: 10px;
  transition: transform 0.3s;
  width: 60px;
}

.ashwini-arrow.open {
  transform: rotate(90deg);
}

.toggle-btn {
  display: none; /* Hide the toggle button */
}




//payslip

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Modal, Typography, Button, Spin } from 'antd';
// import '../Payslip/Payslip.css'
// import imagelogo from '../../../../../../Assets/nmitlogo.png'

// const { Text } = Typography;

// const Payslip = ({ onClose, employeeId }) => {
//   // Select employee salary data from Redux state
//   const employeeSalaryData = useSelector((state) => state.salary.salaryDetails);

//   // Log the data to verify it's being fetched
//   console.log('Employee Salary Data:', employeeSalaryData);

//   // Check if the data is available
//   if (!employeeSalaryData) {
//     return <Spin size="large" />; // Show a loading spinner
//   }

//   // Find the data for the specific employee ID
//   const payslipData = employeeSalaryData.find(emp => emp.emp_id === employeeId);

//   if (!payslipData) {
//     return <div>No data available for this employee.</div>;
//   }

//   // Destructure the data for easier access
//   const {
//     firstName,
//     designation,
//     total_amt,
//     previous_annual_ctc,
//     revised_annual_ctc,
//     previous_monthly_ctc,
//     revised_monthly_ctc,
//     previous_full_basic,
//     revised_full_basic,
//     previous_full_hra,
//     revised_full_hra,
//     previous_full_special_allowance,
//     revised_full_special_allowance,
//     previous_full_other_allowance,
//     revised_full_other_allowance,
//     previous_full_employer_pf,
//     revised_full_employer_pf,
//     previous_full_travel_allowance,
//     revised_full_travel_allowance,
//   } = payslipData;

//   return (
//     <div className="payslip-modal">
//       <div className="payslip-container1">
//         <img src={imagelogo} alt="Company Logo" className="logo" />
//         <div className='payslip-close'>
//         <button className="payslip-close-button" onClick={onClose}></button>

//         </div>
//         <div className="payslip-header">
//           <h2>NM IT Solutions Pvt Ltd</h2>
//           <p>: 5th, Samhita Villa, aspire building, 1st Cross Rd,  station,  Mahadevapura, <br/>Bengaluru, Karnataka 560016</p>
//         </div>
//         <div className="payslip-body">
//           <div className="payslip-details1">
//             <p><strong>Name:</strong> {firstName}</p>
//             <p><strong>Designation:</strong> {designation}</p>
//             <p><strong>Employee ID:</strong> {payslipData.emp_id}</p>
//           </div>
//           <table className="payslip-table">
//             <thead>
//               <tr>
//                 <th>Earnings</th>
//                 <th>Previous</th>
//                 <th>Revised</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>BASIC</td>
//                 <td>{previous_full_basic}</td>
//                 <td>{revised_full_basic}</td>
//               </tr>
//               <tr>
//                 <td>HRA</td>
//                 <td>{previous_full_hra}</td>
//                 <td>{revised_full_hra}</td>
//               </tr>
//               <tr>
//                 <td>Special Allowance</td>
//                 <td>{previous_full_special_allowance}</td>
//                 <td>{revised_full_special_allowance}</td>
//               </tr>
//               <tr>
//                 <td>Other Allowance</td>
//                 <td>{previous_full_other_allowance}</td>
//                 <td>{revised_full_other_allowance}</td>
//               </tr>
//               <tr>
//                 <td>Travelling Allowance</td>
//                 <td>{previous_full_travel_allowance}</td>
//                 <td>{revised_full_travel_allowance}</td>
//               </tr>
//               <tr>
//                 <td>Employer PF</td>
//                 <td>{previous_full_employer_pf}</td>
//                 <td>{revised_full_employer_pf}</td>
//               </tr>
//               <tr>
//                 <td><strong>Total Earnings</strong></td>
//                 <td><strong>{previous_monthly_ctc}</strong></td>
//                 <td><strong>{revised_monthly_ctc}</strong></td>
//               </tr>
//               <tr>
//                 <td><strong>Annual CTC</strong></td>
//                 <td><strong>{ previous_annual_ctc}</strong></td>
//                 <td><strong>{ revised_annual_ctc}</strong></td>

                
//               </tr>
          
//             </tbody>
//           </table>
//           <p><strong>Net Pay:</strong> {total_amt}</p>
//           <p>This is a computer-generated payslip and does not require a signature.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payslip;


//emppayslip


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
// import { FaDownload } from "react-icons/fa6";
// import '../EmpPayslip/EmpPayslip.css';

// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const Payslip = () => {
//     const dispatch = useDispatch();
//     const { emp } = useSelector(state => state.profile.emp);

//     const { salaryRecords, status, error } = useSelector(state => state.payslip);

//     const emp_id ='' ; 
//     const [month, setMonth] = useState(7); 
//     const [year, setYear] = useState(2024); 

//     useEffect(() => {
//         dispatch(fetchPayslip({ month, year, emp_id }));
//     }, [dispatch, month, year, emp_id]);

//     const handleDownload = () => {
//         const doc = new jsPDF();

//         doc.text('Payslip', 20, 10);

//         doc.autoTable({
//             startY: 20,
//             head: [['Earning Type', 'Amount in (₹)']],
//             body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'striped'
//         });

//         doc.autoTable({
//             startY: doc.lastAutoTable.finalY + 10,
//             head: [['Deduction Type', 'Amount in (₹)']],
//             body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
//             theme: 'striped'
//         });


//     // Add total salary at the end of the PDF
//     const totalSalaryY = doc.lastAutoTable.finalY + 20;
//     doc.text(`Total Salary: ₹${totalAmountFromAPI.toFixed(2)}`, 20, totalSalaryY);
//         doc.save('payslip.pdf');
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

//     const salaryRecord = salaryRecords[0]; // Assuming there's only one record

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

//     // Sum earnings and deductions
//     const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
//     const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);

//     // Calculate total amount from earnings and deductions
//     const totalAmount = totalEarnings - totalDeductions;

//     // Display total amount from API response
//     const totalAmountFromAPI = parseFloat(salaryRecord.total_amt) || 0;

//     return (
//         <div className="payslip-container">

//             <div className="tabs">
//             <button className="download-button1">Payslip</button>
//                 {/* <button className="active-tab">Payslip</button> */}
//                 <button className="download-button" onClick={handleDownload}><FaDownload /></button>
//                 <select 
//                     className="month-select" 
//                     value={month}
//                     onChange={(e) => setMonth(parseInt(e.target.value))}
//                 >
//                     <option value={7}>Jul 2024</option>
//                     <option value={8}>Aug 2024</option>
//                     {/* Add more months as needed */}
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
//                                     <td >Total</td>
//                                     <td>{totalDeductions.toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="employee-details">
//                     <button className="hide-button">Hide</button>
//                     <h3>Employee details</h3>
//                     <div className="details">
//     <p><strong>Name</strong>: {salaryRecord.firstName}</p>
//     <p><strong>Employee No</strong>: {salaryRecord.emp_id}</p>
//     <p><strong>Joining Date</strong>: {new Date(salaryRecord.created_date).toLocaleDateString()}</p>
//     <p><strong>Designation</strong>: {salaryRecord.designation}</p>
//     <p><strong>PF Number</strong>: {emp.pf}</p>
//     <p><strong>UAN Number</strong>: {emp.uan}</p>
//     <p><strong>PAN Number</strong>: {emp.pan}</p>
//     <p><strong>Bank Name</strong>: {emp.bankName}</p>
//     <p><strong>Account Number</strong>: {emp.accountNo}</p>
//     <p><strong>IFSC Code</strong>: {emp.ifsc}</p>
// </div>

//                     <div className='total-salary'>Total Salary: {totalAmountFromAPI.toFixed(2)}</div>

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

//fin



// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
// // import { FaDownload } from "react-icons/fa6";
// // import img from '../../../../HRModule/Assets/nmitlogo.png'
// // import '../EmpPayslip/EmpPayslip.css';

// // import jsPDF from 'jspdf';
// // import 'jspdf-autotable';

// // const Payslip = () => {
// //     const dispatch = useDispatch();
// //     const profile = useSelector(state => state.profile);
// //     const { emp} = useSelector(state => state.profile.emp);

// //     const { salaryRecords, status, error } = useSelector(state => state.payslip);

// //     const emp_id = ''; 
// //     const [month, setMonth] = useState(7); 
// //     const [year, setYear] = useState(2024); 
// //     const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

// //     useEffect(() => {
// //         dispatch(fetchPayslip({ month, year, emp_id }));
// //     }, [dispatch, month, year, emp_id]);

// //     const handleDownload = async () => {
// //         // console.log("Download initiated");
// //         const doc = new jsPDF();
    
// //         try {
// //             // Load and add Company Logo and Header
// //             const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
// //                 const reader = new FileReader();
// //                 reader.onloadend = () => resolve(reader.result);
// //                 reader.readAsDataURL(blob);
// //             }));
    
// //             // Add Company Logo
// //             doc.addImage(logo, 'PNG', 10, 10, 20, 20); // Adjusted logo size
// //             doc.setFontSize(14); // Reduced font size for the company name
// //             doc.text('NM IT Solutions Pvt Ltd', 40, 20);
// //             doc.setFontSize(10); // Reduced font size for the address
// //             doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 40, 25);
// //             doc.line(10, 30, 200, 30); // Line separator
    
// //             // Add Employee Details Section
// //             doc.setFontSize(10); // Reduced font size for employee details
// //             const employeeDetailsY = 35;
// //             doc.text(`Name: ${salaryRecord.firstName}`, 10, employeeDetailsY);
// //             doc.text(`Employee No: ${salaryRecord.emp_id}`, 100, employeeDetailsY);
// //             doc.text(`Joining Date: ${new Date(salaryRecord.created_date).toLocaleDateString()}`, 10, employeeDetailsY + 8);
// //             doc.text(`Designation: ${salaryRecord.designation}`, 100, employeeDetailsY + 8);
// //             doc.text(`Bank Name: ${emp.bankName || '-'}`, 10, employeeDetailsY + 16);
// //             // doc.text(`Bank IFSC: ${emp.ifscCode || '-'}`, 10, employeeDetailsY + 32);
// //             doc.text(`Bank Account No: ${emp.accountNo || '-'}`, 100, employeeDetailsY + 16);
// //             doc.text(`PAN Number: ${emp.panNo || '-'}`, 10, employeeDetailsY + 24);
// //             doc.text(`PF No: ${emp.pfNumber || '-'}`, 100, employeeDetailsY + 24);
// //             doc.text(`PF UAN: ${emp.uanNumber || '-'}`, 10, employeeDetailsY + 32);

    
// //             // Draw the Earnings Table
// //             const earningsStartY = employeeDetailsY + 40;
// //             doc.autoTable({
// //                 startY: earningsStartY,
// //                 head: [['Earnings', 'Amount (₹)']],
// //                 body: earnings.map(record => [record.type, record.amount.toFixed(2)]),
// //                 theme: 'plain', // Changed theme to 'plain' to remove header color
// //                 styles: { 
// //                     cellPadding: 2, 
// //                     fontSize: 9, // Reduced font size for table content
// //                     lineColor: [0, 0, 0], // Black line color for borders
// //                     lineWidth: 0.1 // Thinner lines
// //                 },
// //                 headStyles: {
// //                     fillColor: [255, 255, 255], // Set header background to white
// //                     textColor: [0, 0, 0] // Set header text color to black
// //                 },
// //                 alternateRowStyles: {
// //                     fillColor: [245, 245, 245] // Light gray background for alternate rows
// //                 }
// //             });
    
// //             // Draw the Deductions Table
// //             const deductionsStartY = doc.lastAutoTable.finalY + 10;
// //             doc.autoTable({
// //                 startY: deductionsStartY,
// //                 head: [['Deductions', 'Amount (₹)']],
// //                 body: deductions.map(record => [record.type, record.amount.toFixed(2)]),
// //                 theme: 'plain', // Changed theme to 'plain' to remove header color
// //                 styles: { 
// //                     cellPadding: 2, 
// //                     fontSize: 9, // Reduced font size for table content
// //                     lineColor: [0, 0, 0], // Black line color for borders
// //                     lineWidth: 0.1 // Thinner lines
// //                 },
// //                 headStyles: {
// //                     fillColor: [255, 255, 255], // Set header background to white
// //                     textColor: [0, 0, 0] // Set header text color to black
// //                 },
// //                 alternateRowStyles: {
// //                     fillColor: [245, 245, 245] // Light gray background for alternate rows
// //                 }
// //             });
    
// //             // Add Total Salary and Net Pay
// //             const totalSalaryY = doc.lastAutoTable.finalY + 10;
// //             doc.text(`Total Earnings: ₹${totalEarnings.toFixed(2)}`, 10, totalSalaryY);
// //             doc.text(`Total Deductions: ₹${totalDeductions.toFixed(2)}`, 100, totalSalaryY);
// //             doc.text(`Net Pay: ₹${totalAmount.toFixed(2)}`, 10, totalSalaryY + 8);
    
// //             // Add Disclaimer
// //             doc.text('Note:This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 16);
    
// //             // Save the document
// //             doc.save('payslip.pdf');
// //             console.log("PDF generated successfully");
// //         } catch (error) {
// //             console.error("Error generating PDF:", error);
// //         }
// //     };
    

// //     const handleHide = () => {
// //         setIsTotalSalaryVisible(!isTotalSalaryVisible);
// //     };

// //     if (status === 'loading') {
// //         return <div>Loading...</div>;
// //     }

// //     if (status === 'failed') {
// //         return <div>Error: {error}</div>;
// //     }

 

// //     if (!salaryRecords || salaryRecords.length === 0) {
// //         return <div>No payslip data available.</div>;
// //     }

// //     const salaryRecord = salaryRecords[0];

// //     const earnings = [
// //         { type: "BASIC", amount: parseFloat(salaryRecord.revised_full_basic) || 0 },
// //         { type: "HRA", amount: parseFloat(salaryRecord.revised_full_hra) || 0 },
// //         { type: "SPECIAL ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_special_allowance) || 0 },
// //         { type: "OTHER ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_other_allowance) || 0 },
// //         { type: "TRAVELLING ALLOWANCE", amount: parseFloat(salaryRecord.revised_full_travel_allowance) || 0 },
// //     ];

// //     const deductions = [
// //         { type: "PF", amount: parseFloat(salaryRecord.revised_full_employer_pf) || 0 }
// //     ];

// //     const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
// //     const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);
// //     const totalAmount = totalEarnings - totalDeductions;
// //     const totalAmountFromAPI = parseFloat(salaryRecord.total_amt) || 0;

// //     return (
// //         <div className="payslip-container-c">
// //             <div className="tabs">
// //                 <button className="download-button-c">Payslip</button>
// //                 <button className="download-button" onClick={handleDownload}><FaDownload /></button>
// //                 <select 
// //                     className="month-select" 
// //                     value={month}
// //                     onChange={(e) => setMonth(parseInt(e.target.value))}
// //                 >
// //                     <option value={7}>Jul 2024</option>
// //                     <option value={8}>Aug 2024</option>
// //                 </select>
// //             </div>
            
// //             <div className="main-content">
// //                 <div className="payslip-details1">
// //                     <div className="earnings">
// //                         <h3>Earnings</h3>
// //                         <table id="earningsTable">
// //                             <thead>
// //                                 <tr>
// //                                     <th>Earning Type</th>
// //                                     <th>Amount in (₹)</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {earnings.map((record, index) => (
// //                                     <tr key={index}>
// //                                         <td>{record.type}</td>
// //                                         <td>{record.amount.toFixed(2)}</td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                             <tfoot>
// //                                 <tr>
// //                                     <td>Total</td>
// //                                     <td>{totalAmountFromAPI.toFixed(2)}</td>
// //                                 </tr>
// //                             </tfoot>
// //                         </table>
// //                     </div>
// //                     <div className="deductions">
// //                         <h3>Deductions</h3>
// //                         <table id="deductionsTable">
// //                             <thead>
// //                                 <tr>
// //                                     <th>Deduction Type</th>
// //                                     <th>Amount in (₹)</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {deductions.map((record, index) => (
// //                                     <tr key={index}>
// //                                         <td>{record.type}</td>
// //                                         <td>{record.amount.toFixed(2)}</td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                             <tfoot>
// //                                 <tr>
// //                                     <td>Total</td>
// //                                     <td>{totalDeductions.toFixed(2)}</td>
// //                                 </tr>
// //                             </tfoot>
// //                         </table>
// //                     </div>
// //                 </div>
// //                 <div className="employee-details1">
// //                     <button className="hide-button" onClick={handleHide}>
// //                         {isTotalSalaryVisible ? 'Hide' : 'Show'}
// //                     </button>
// //                     <h3>Employee details</h3>
// //                     <div className="employee-details">
// //                         <p><strong>Name</strong>: {salaryRecord.firstName}</p>
// //                         <p><strong>Employee No</strong>: {salaryRecord.emp_id}</p>
// //                         <p><strong>Joining Date</strong>: {new Date(salaryRecord.created_date).toLocaleDateString()}</p>
// //                         <p><strong>Designation</strong>: {salaryRecord.designation}</p>
// //                         <p><strong>PF Number</strong>: {emp.pfNumber || '-'}</p>
// //                         <p><strong>UAN Number</strong>: {emp.uanNumber || '-'}</p>
// //                         <p><strong>PAN Number</strong>: {emp.panNo || '-'}</p>
// //                         <p><strong>Bank Name</strong>: {emp.bankName || '-'}</p>
// //                         <p><strong>Account Number</strong>: {emp.accountNo || '-'}</p>
// //                         <p><strong>IFSC Code</strong>: {emp.ifscCode || '-'}</p>
// //                     </div>
// //                     <div className='total-salary'>
// //                         <strong>Total Salary:</strong> {isTotalSalaryVisible ? totalAmountFromAPI.toFixed(2) : '*******'}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Payslip;


  
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
    import { fetchPayslip } from '../../../../HRModule/Redux/Slices/emppayslip';
    import { FaDownload } from "react-icons/fa";
    import img from '../../../../HRModule/Assets/nmitlogo.png'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../EmpPayslip/EmpPayslip.css'

const Payslip = () => {
    const dispatch = useDispatch();
    const { employeeDetails, payslipDetails, status, error } = useSelector(state => state.payslip);
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [isTotalSalaryVisible, setIsTotalSalaryVisible] = useState(true);

    useEffect(() => {
        dispatch(fetchPayslip({ month, year, emp_id: '' }));
    }, [dispatch, month, year]);

    // Get the previous 3 months and current month
    const getMonthsOptions = () => {
        const months = [];
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        for (let i = 3; i >= 0; i--) {
            const month = (currentMonth - i + 12) % 12;
            const year = currentYear - Math.floor((currentMonth - i) / 12);

            const monthName = new Date(year, month).toLocaleString('default', { month: 'short' });
            months.push({ value: month + 1, label: `${monthName} ${year}` });
        }

        return months;
    };

    const monthsOptions = getMonthsOptions();

    const handleDownload = async () => {
        const doc = new jsPDF();
        try {
            const logo = await fetch(img).then(res => res.blob()).then(blob => new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            }));

            doc.addImage(logo, 'PNG', 10, 10, 20, 20);
            doc.setFontSize(14);
            doc.text('NM IT Solutions Pvt Ltd', 40, 20);
            doc.setFontSize(10);
            doc.text('5th, Samhita Villa, aspire building, 1st Cross Rd, station, Mahadevapura, Bengaluru, Karnataka 560016', 40, 25);
            doc.line(10, 30, 200, 30);

            // Add Employee Details Section
            doc.setFontSize(10);
            const employeeDetailsY = 35;
            doc.text(`Name:  ${employeeDetails.firstName}`, 10, employeeDetailsY);
            doc.text(`Employee No: ${employeeDetails.emp_id}`, 100, employeeDetailsY);
            doc.text(`Joining Date: ${new Date(employeeDetails.DOJ).toLocaleDateString()}`, 10, employeeDetailsY + 8);
            doc.text(`Designation: ${employeeDetails.designation}`, 100, employeeDetailsY + 8);
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
                body: [
                    ["BASIC", payslipDetails.revised_full_basic || 0],
                    ["HRA", payslipDetails.revised_full_hra || 0],
                    ["SPECIAL ALLOWANCE", payslipDetails.revised_full_special_allowance || 0],
                    ["OTHER ALLOWANCE", payslipDetails.revised_full_other_allowance || 0],
                    ["TRAVELLING ALLOWANCE", payslipDetails.revised_full_travel_allowance || 0]
                ],
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
                body: [
                    ["PF", payslipDetails.revised_full_employer_pf || 0]
                ],
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

            // Add Total Salary and Net Pay
            const totalSalaryY = doc.lastAutoTable.finalY + 10;
            doc.text(`Total Earnings: ₹${payslipDetails.total_amt || 0}`, 10, totalSalaryY);
            doc.text(`Total Deductions: ₹${payslipDetails.total_deductions || 0}`, 100, totalSalaryY);
            doc.text(`Net Pay: ₹${payslipDetails.total_amt || 0}`, 10, totalSalaryY + 8);

            // Add Disclaimer
            doc.text('Note: This is a computer-generated payslip and does not require a signature.', 10, totalSalaryY + 16);

            // Save the document
            doc.save('payslip.pdf');
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

    return (
        <div className="payslip-container">
            <div className="tabs">
                <button className="download-button1">Payslip</button>
                <button className="download-button" onClick={handleDownload}><FaDownload /> Download</button>
            </div>
            <div className="payslip-content">
                <h2>Payslip for {payslipDetails.month}</h2>
                <button onClick={handleHide}>{isTotalSalaryVisible ? 'Hide' : 'Show'} Total Salary</button>
                {isTotalSalaryVisible && (
                    <div>
                        <h3>Employee Details</h3>
                        <p>Name: {employeeDetails.firstName}</p>
                        <p>Employee No: {employeeDetails.emp_id}</p>
                        <p>Joining Date: {new Date(employeeDetails.DOJ).toLocaleDateString()}</p>
                        <p>Designation: {employeeDetails.designation}</p>
                        <p>Bank Name: {employeeDetails.bankName || '-'}</p>
                        <p>Bank Account No: {employeeDetails.accountNo || '-'}</p>
                        <p>PAN Number: {employeeDetails.panNo || '-'}</p>
                        <p>PF No: {employeeDetails.pfNumber || '-'}</p>
                        <p>PF UAN: {employeeDetails.uanNumber || '-'}</p>

                        <h3>Earnings</h3>
                        <ul>
                            <li>BASIC: ₹{payslipDetails.revised_full_basic || 0}</li>
                            <li>HRA: ₹{payslipDetails.revised_full_hra || 0}</li>
                            <li>SPECIAL ALLOWANCE: ₹{payslipDetails.revised_full_special_allowance || 0}</li>
                            <li>OTHER ALLOWANCE: ₹{payslipDetails.revised_full_other_allowance || 0}</li>
                            <li>TRAVELLING ALLOWANCE: ₹{payslipDetails.revised_full_travel_allowance || 0}</li>
                        </ul>

                        <h3>Deductions</h3>
                        <ul>
                            <li>PF: ₹{payslipDetails.revised_full_employer_pf || 0}</li>
                        </ul>

                        <h3>Total Salary</h3>
                        <p>Total Earnings: ₹{payslipDetails.total_amt || 0}</p>
                        <p>Total Deductions: ₹{payslipDetails.total_deductions || 0}</p>
                        <p>Net Pay: ₹{payslipDetails.total_amt || 0}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payslip;


salary jsx


// import React, { useEffect, useState } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import { Layout, Input, Button, Card, Row, Col, Typography, Space, Collapse, Dropdown, Menu, Modal } from 'antd';

// import { DownOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import './Salary.css';
// import { fetchEmployees1, getSalary } from '../../../../../Redux/Slices/SalarySlice';
// import Payslip from '../Salary/Payslip/Payslip';
// import components from '../Salary/componentsData'

// const { Header, Content } = Layout;
// const { Text } = Typography;
// const { Panel } = Collapse;

// const Salary = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // State mappings
//   const employees = useSelector((state) => state.employees.employees.employees);
//   const employeesStatus = useSelector((state) => state.employees.employees.status);
//   const salary = useSelector((state) => state.salary.salaryDetails);

//   // Local state
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [expandedKeys, setExpandedKeys] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [salaryData, setSalaryData] = useState(null);
//   const [addSalaryDisabled, setAddSalaryDisabled] = useState(true);
//   const [updateSalaryDisabled, setUpdateSalaryDisabled] = useState(true);
//   const [isPayslipModalVisible, setIsPayslipModalVisible] = useState(false);


//   // Fetch employees on initial load
//   useEffect(() => {
//     if (employeesStatus === 'idle') {
//       dispatch(fetchEmployees1());
//     }
//   }, [employeesStatus, dispatch]);

//   const mapSalaryToComponents = (salary) => {
//     const updatedComponents = JSON.parse(JSON.stringify(components));

//     const updateComponentAmount = (name, amount) => {
//       for (const component of updatedComponents) {
//         for (const child of component.children) {
//           const target = child.children?.find((subchild) => subchild.name.toUpperCase() === name.toUpperCase());
//           if (target) {
//             target.amount = amount;
//             break;
//           }
//         }
//       }
//     };

//     updateComponentAmount('BASIC', salary.revised_full_basic || '0.00');
//     updateComponentAmount('HRA', salary.revised_full_hra || '0.00');
//     updateComponentAmount('SPECIAL ALLOWANCE', salary.revised_full_special_allowance || '0.00');
//     updateComponentAmount('OTHER ALLOWANCE', salary.revised_full_other_allowance || '0.00');
//     updateComponentAmount('PF', salary.revised_full_employer_pf || '0.00');
//     updateComponentAmount('TRAVELLING ALLOWANCE', salary.revised_full_travel_allowance || '0.00');

//     // console.log('Mapped Salary Components:', updatedComponents);
//     return updatedComponents;
//   };

//   const filterComponents = (components) => {
//     return components.reduce((acc, component) => {
//       const children = component.children ? filterComponents(component.children) : [];
//       const isMatch = component.name.toLowerCase().includes(searchTerm.toLowerCase());

//       if (isMatch || children.length > 0) {
//         acc.push({
//           ...component,
//           children,
//         });
//       }

//       return acc;
//     }, []);
//   };

//   const filteredComponents = filterComponents(salaryData || components);

//   const handleEmployeeSelect = async ({ key }) => {
//     // console.log('Employee Select Event Key:', key);

//     const employee = employees.find((emp) => String(emp.emp_id) === key);
//     setSelectedEmployee(employee);

//     // console.log('Selected Employee Data:', employee);

//     if (employee) {
//       try {
//         await dispatch(getSalary(employee.emp_id));
//       } catch (error) {
//         // console.error('Failed to fetch salary:', error);
//       }
//     }
//   };

//   // useEffect(() => {
//   //   if (salary && salary.length > 0) {
//   //     const salaryData = salary[0];
//   //     console.log('Fetched Salary Data:', salaryData);

//   //     const totalSalaryAmount = parseFloat(salaryData.total_amt) || 0;
//   //     console.log('Total Salary Amount:', totalSalaryAmount);

//   //     setSalaryData(mapSalaryToComponents(salaryData));
//   //     setAddSalaryDisabled(totalSalaryAmount > 0); 
//   //     setUpdateSalaryDisabled(totalSalaryAmount <= 0); 
//   //   }
//   // }, [salary]);

//   useEffect(() => {
//     if (salary && salary.length > 0) {
//       const salaryData = salary[0];
//       console.log('Fetched Salary Data:', salaryData);
  
//       const totalSalaryAmount = parseFloat(salaryData.total_amt) || 0;
//       console.log('Total Salary Amount:', totalSalaryAmount);
  
//       setSalaryData(mapSalaryToComponents(salaryData));
//       setAddSalaryDisabled(totalSalaryAmount > 0); 
//       setUpdateSalaryDisabled(totalSalaryAmount <= 0); 
//     } else if (salary && salary.length === 0) {
//       // Enable the Add Salary button when there are no salary records
//       setAddSalaryDisabled(false);
//       setUpdateSalaryDisabled(true); // Keep update disabled if no salary exists
//     }
//   }, [salary]);
  

//   const handleAddSalary = () => {
//     if (selectedEmployee) {
//       console.log('Add Salary button clicked');
//       navigate('/hr-dashboard/updatesalary', { state: { emp_id: selectedEmployee.emp_id } });
//     }
//   };

//   const handleUpdateSalary = () => {
//     if (selectedEmployee) {
//       console.log('Update Salary button clicked');
//       navigate('/hr-dashboard/updatesalary', { state: { emp_id: selectedEmployee.emp_id } });
//     }
//   };

//   const handleDeselectEmployee = () => {
//     console.log('Employee deselected');
//     setSelectedEmployee(null);
//   };

//   const employeeMenu = (
//     <Menu onClick={handleEmployeeSelect}>
//       {employees.map((emp) => (
//         <Menu.Item key={emp.emp_id}>
//           {emp.firstName} {emp.lastName} - EMP_ID({emp.emp_id})
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   const showPayslipModal = () => {
//     if (selectedEmployee) {
//       setSelectedEmployeeId(selectedEmployee.emp_id);
//       setIsPayslipModalVisible(true);
//     } else {
//       console.log('No employee selected');
//     }
//   };
  
//   const handleCancel = () => {
//     setIsPayslipModalVisible(false);
//   };
  


//   return (
//     <Layout className='salary-dashboard'>
//       <Header className="salary-header">
//         <Space align="center">
//           <Dropdown
//             overlay={employeeMenu}
//             trigger={['click']}
//             className='employee-workdays-container'
//           >
//             <Button>
//               {selectedEmployee ? (
//                 <>
//                   {selectedEmployee.firstName} {selectedEmployee.lastName} - {selectedEmployee.emp_id}
//                   <FaTimes className='deselect-icon' onClick={handleDeselectEmployee} />
//                 </>
//               ) : (
//                 <>
//                   Select Employee <DownOutlined />
//                 </>
//               )}
//             </Button>
//           </Dropdown>
//         </Space>
//       </Header>

//       <Content style={{ padding: '20px' }}>
//         <Card>
//           <Row gutter={[16, 16]}>
//             <Col span={12} className='button-row'>
//               <Button
//                 type="primary"
//                 className='primary-button'
//                 onClick={handleAddSalary}
//                 disabled={addSalaryDisabled}
//               >
//                 Add Salary
//               </Button>
//               <Button
//                 type="primary"
//                 className='primary-button'
//                 onClick={handleUpdateSalary}
//                 disabled={updateSalaryDisabled}
//               >
//                 Update Salary
//               </Button>
//             </Col>
//             <Col span={12}>
//               <Button
//   onClick={showPayslipModal}
//   className='primary-button'
//                 type="primary"
//               >
//                 Preview Payslip
//               </Button>
//             </Col>
//             <Input
//               className='searchbar'
//               prefix={<FaSearch />}
//               placeholder="Search components"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Col span={24}>
//               <Collapse
//                 accordion
//                 activeKey={expandedKeys}
//                 onChange={(keys) => setExpandedKeys(keys)}
//               >
//                 {filteredComponents.map((component, index) => (
//                   <Panel header={component.name} key={index}>
//                     {component.children.map((child, idx) => (
//                       <Collapse key={idx}>
//                         <Panel header={child.name} key={`${index}-${idx}`}>
//                           {child.children.map((subchild, subIdx) => (
//                             <Row key={subIdx}>
//                               <Col span={18}>
//                                 <Text>{subchild.name}</Text>
//                               </Col>
//                               <Col span={6}>
//                                 <Text>{subchild.amount}</Text>
//                               </Col>
//                             </Row>
//                           ))}
//                         </Panel>
//                       </Collapse>
//                     ))}
//                   </Panel>
//                 ))}
//               </Collapse>
//             </Col>
//           </Row>
//         </Card>
//       </Content>

//       <Modal
//   title="Payslip"
//   visible={isPayslipModalVisible}
//   onCancel={handleCancel}
//   footer={null} // If you don't need any footer buttons
// >
//   <Payslip employeeId={selectedEmployeeId} onClose={handleCancel} />
// </Modal>

//     </Layout>
//   );
// };

// export default Salary;


import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import '../../EmpSalary/Empitstatement/Empitstatement.css';
import { FaDownload } from "react-icons/fa";

const TaxCalculationForm = () => {
  const [expandedSections, setExpandedSections] = useState({
    'A. Income': true,
    'B. Deductions': false,
    'C. Perquisites': false,
    'D. Income Excluded From Tax': false,
    'F. Exemption Under Section 10': false,
    'G. Income From Previous Employer': false,
    'I. Less Deduction under Section 16': false,
    'K. Income From Other Sources (Including House Properties)': false,
    'Other Incomes': false,
    'Incomes/Loss from house properties': false,
    'M. Deduction Under Chapter VI A': false,
    'O. Annual Tax': false,
    'P. Tax Paid Till Date': false,
    'Q. Balance Payable': false,
    'R. TDS Recovered in Current Month': false,
    'Monthly tax': false,
  });

  const [allExpanded, setAllExpanded] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleExpandCollapseAll = () => {
    const newState = !allExpanded;
    const updatedSections = {};
    Object.keys(expandedSections).forEach(section => {
      updatedSections[section] = newState;
    });

    setExpandedSections(updatedSections);
    setAllExpanded(newState);
  };

  const renderMonthlyIncomeTable = () => (
    <table className="data-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Total</th>
          {['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024'].map(month => (
            <th key={month}>{month}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="7" className="sub-header">
            <span className="toggle-icon">▼</span> Monthly Income
          </td>
        </tr>
        {[
          ['Basic', '1,20,000.00', '10,000.00'],
          ['HRA', '48,000.00', '4,000.00'],
          ['Special Allowance', '24,000.00', '2,000.00'],
          ['Other Allowance', '33,600.00', '2,800.00'],
        ].map(([item, total, monthly]) => (
          <tr key={item}>
            <td>{item}</td>
            <td>{total}</td>
            {[...Array(5)].map((_, i) => (
              <td key={i}>{monthly}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderSection = (title, content, value) => (
    <div className="form-section">
      <div className="section-header" onClick={() => toggleSection(title)}>
        <span>
          <span className="toggle-icon">{expandedSections[title] ? '−' : '+'}</span>
          {title}
        </span>
        <span className="section-value">₹{value}</span>
      </div>
      {expandedSections[title] && (
        <div className="section-content">
          {content}
        </div>
      )}
    </div>
  );

  const renderKSection = () => (
    <>
      <div className="sub-section" onClick={() => toggleSection('Other Incomes')}>
        <span>
          <span className="toggle-icon">{expandedSections['Other Incomes'] ? '▼' : '▶'}</span>
          Other Incomes
        </span>
        <span className="section-value">₹0.00</span>
      </div>
      {expandedSections['Other Incomes'] && (
        <div className="no-data">No data to display !!!</div>
      )}
      <div className="sub-section" onClick={() => toggleSection('Incomes/Loss from house properties')}>
        <span>
          <span className="toggle-icon">{expandedSections['Incomes/Loss from house properties'] ? '▼' : '▶'}</span>
          Incomes/Loss from house properties
        </span>
        <span className="section-value">₹0.00</span>
      </div>
      {expandedSections['Incomes/Loss from house properties'] && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Declared</th>
              <th>Eligible</th>
              <th>Considered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interest on housing loan (self-occupied)</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );

  const renderTaxTable = (rows = []) => (
    <table className="data-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Raw Tax</th>
          <th>Surcharge</th>
          <th>Health & Edu.Cess</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? rows.map((row, index) => (
          <tr key={index}>
            <td>{row}</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        )) : (
          <tr>
            <td>-</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div className="tax-calculation-form">
      <div className="form-header">
        <div className="tax-regime"><span className="new-regime"></span></div>
        <div className="header-right">
          <button className="download-btn"><FaDownload /></button>
          <select className="month-select">
            <option>Aug 2024</option>
          </select>
        </div>
      </div>

      <div className="summary-boxes">
        <div className="summary-box">
          <div className="tax-regime">TAX CALCULATED AS PER</div>
          <span className="new-regime">NEW TAX REGIME</span>
        </div>

        <div className="summary-box">
          <div className="summary-label">NET TAX IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">TOTAL TAX DUE IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">TAX DEDUCTIBLE PER MONTH IN ₹</div>
          <div className="summary-value">0.00</div>
        </div>
        <div className="summary-box">
          <div className="summary-label">REMAINING MONTHS (SEP 2024 ONWARDS)</div>
          <div className="summary-value">7</div>
        </div>
      </div>

      <div className="collapse-all" onClick={handleExpandCollapseAll}>
        <div>
          <span className="toggle-icon">{allExpanded ? '▼Collapse all' : '▼Expand all'}</span>
        </div>
        <span className="value-label">Value in ₹</span>
      </div>

      <div className="form-sections">
        {renderSection('A. Income', renderMonthlyIncomeTable(), '2,25,600.00')}
        {renderSection('B. Deductions', 
          <table className="data-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Total</th>
                {['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024'].map(month => (
                  <th key={month}>{month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="sub-header">
                  <span className="toggle-icon">▼</span> Deductions
                </td>
              </tr>
              <tr>
                <td>PF</td>
                <td>24,000.00</td>
                <td>2,000.00</td>
                <td>2,000.00</td>
                <td>2,000.00</td>
                <td>2,000.00</td>
                <td>2,000.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>12,000.00</td>
                <td>1,000.00</td>
                <td>1,000.00</td>
                <td>1,000.00</td>
                <td>1,000.00</td>
                <td>1,000.00</td>
              </tr>
            </tbody>
          </table>
        , '36,000.00')}
        {renderSection('C. Perquisites', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('D. Income Excluded From Tax', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('F. Exemption Under Section 10', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('G. Income From Previous Employer', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('I. Less Deduction under Section 16', <div className="no-data">No data to display !!!</div>, '0.00')}
        {renderSection('K. Income From Other Sources (Including House Properties)', renderKSection(), '0.00')}
        {renderSection('M. Deduction Under Chapter VI A', renderTaxTable(), '0.00')}
        {renderSection('O. Annual Tax', renderTaxTable(['Normal Tax', 'Tax relief u/s 89']), '0.00')}
        {renderSection('P. Tax Paid Till Date', renderTaxTable(['TDS', 'TCS']), '0.00')}
        {renderSection('Q. Balance Payable', renderTaxTable(), '0.00')}
        {renderSection('R. TDS Recovered in Current Month', renderTaxTable(), '0.00')}
        {renderSection('Monthly tax', renderTaxTable(), '0.00')}
      </div>
    </div>
  );
};

export default TaxCalculationForm;



import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Updatesalary/Updatesalary.css';

const SalaryUpdateForm = ({ emp_id, onSave, isEditable }) => {
  const [formData, setFormData] = useState({
    effectiveFrom: '',
    payoutMonth: '',
    employeeRemarks: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="salary-update-form" onSubmit={handleSubmit}>
      {isEditable && <button type="submit" className="save-button">Save Changes</button>}
    </form>
  );
};

const Updatesalary = () => {
  const { emp_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const salaryDetails = useSelector((state) => state.salary.salaryDetails);
  const loading = useSelector((state) => state.salary.loading);
  const error = useSelector((state) => state.salary.error);

  const [salaryData, setSalaryData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    designation: '',
    created_date: ''
  });

  const [lopPopupOpen, setLopPopupOpen] = useState(false);
  const [travelPopupOpen, setTravelPopupOpen] = useState(false);
  const [lopData, setLopData] = useState({ days: '', amountPerDay: '', totalAmount: 0 });
  const [travelData, setTravelData] = useState({ days: '', amountPerDay: '', totalAmount: 0 });

  const salaryItems = [
    'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
    'ANNUAL CTC', 'MONTHLY CTC', 'FULL EMPLOYER PF',
    'FULL TRAVEL ALLOWANCE', 'LOP', 'SUB TOTAL', 'TOTAL AMOUNT', 'TOTAL DEDUCTIONS'
  ];

  useEffect(() => {
    if (salaryDetails && salaryDetails.length > 0) {
      const details = salaryDetails[0];
      const newSalaryData = salaryItems.map((item) => {
        const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
        return {
          item,
          current: details[`revised_${lowercaseItem}`] || details[lowercaseItem] || '0.00'
        };
      });
      setSalaryData(newSalaryData);
      setEmployeeInfo({
        firstName: details.firstName || '',
        designation: details.designation || '',
        created_date: details.created_date || ''
      });
    }
  }, [salaryDetails]);

  const handleChange = (index, value) => {
    const newData = [...salaryData];
    newData[index].current = value;
    setSalaryData(newData);
  };

  const handleSave = (formData) => {
    // Logic to save salary data
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getDisplayName = (item) => {
    switch (item) {
      case 'TOTAL DEDUCTIONS':
        return 'Total Deductions';
      case 'SUB TOTAL':
        return 'Sub Total';
      case 'TOTAL AMOUNT':
        return 'Total Amt';
      case 'REMARKS':
        return 'Remarks';
      default:
        return item;
    }
  };

  const calculateTotalAmount = (data) => {
    return data.days && data.amountPerDay
      ? parseFloat(data.days) * parseFloat(data.amountPerDay)
      : 0;
  };

  const handleLopChange = (e) => {
    const { name, value } = e.target;
    setLopData((prevData) => ({
      ...prevData,
      [name]: value,
      totalAmount: calculateTotalAmount({ ...prevData, [name]: value })
    }));
  };

  const handleTravelChange = (e) => {
    const { name, value } = e.target;
    setTravelData((prevData) => ({
      ...prevData,
      [name]: value,
      totalAmount: calculateTotalAmount({ ...prevData, [name]: value })
    }));
  };

  const handleLopSave = () => {
    const newData = [...salaryData];
    const lopIndex = newData.findIndex((item) => item.item === 'LOP');
    if (lopIndex !== -1) {
      newData[lopIndex].current = lopData.totalAmount.toFixed(2);
      setSalaryData(newData);
    }
    setLopPopupOpen(false);
  };

  const handleTravelSave = () => {
    const newData = [...salaryData];
    const travelIndex = newData.findIndex((item) => item.item === 'FULL TRAVEL ALLOWANCE');
    if (travelIndex !== -1) {
      newData[travelIndex].current = travelData.totalAmount.toFixed(2);
      setSalaryData(newData);
    }
    setTravelPopupOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <ToastContainer />
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-name">Name: {employeeInfo.firstName}</div>
        </div>
      </div>
      <div className="info-grid">
        <div>
          <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
          <div className="info-title">Designation: {employeeInfo.designation}</div>
        </div>
      </div>

      <div className="header">
        {!isUpdated && (
          <button className="btn" onClick={() => setIsEditable(true)}>Edit Salary</button>
        )}
        {isUpdated && (
          <button className="btn back-button" onClick={handleBack}>Back</button>
        )}
      </div>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Current Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
    

<tbody>
  {salaryData.map((row, index) => (
    <tr key={row.item}>
      <td>{getDisplayName(row.item)}</td>
      <td>
        {isEditable && row.item !== 'SUB TOTAL' && row.item !== 'TOTAL AMOUNT' ? (
          <input
            type="text"
            value={row.current}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ) : (
          row.current
        )}
      </td>
      <td>
        {isEditable && (row.item === 'LOP' || row.item === 'FULL TRAVEL ALLOWANCE') ? (
          <span className='pencil-icon' onClick={() => row.item === 'LOP' ? setLopPopupOpen(true) : setTravelPopupOpen(true)}>
            ✏️
          </span>
        ) : null}
      </td>
    </tr>
  ))}
</tbody>

      </table>

      {lopPopupOpen && (
        <div className="popup">
          <h3>LOP Details</h3>
          <table>
            <tbody>
              <tr>
                <td>Days:</td>
                <td>
                  <input
                    type="number"
                    name="days"
                    value={lopData.days}
                    onChange={handleLopChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Amount per Day:</td>
                <td>
                  <input
                    type="number"
                    name="amountPerDay"
                    value={lopData.amountPerDay}
                    onChange={handleLopChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total Deduction:</td>
                <td>{lopData.totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn back-button"  onClick={handleLopSave}>Save</button>
          <button className="btn back-button"  onClick={() => setLopPopupOpen(false)}>Close</button>
        </div>
      )}

      {travelPopupOpen && (
        <div className="popup">
          <h3>Travel Allowance Details</h3>
          <table>
            <tbody>
              <tr>
                <td>Days:</td>
                <td>
                  <input
                    type="number"
                    name="days"
                    value={travelData.days}
                    onChange={handleTravelChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Amount per Day:</td>
                <td>
                  <input
                    type="number"
                    name="amountPerDay"
                    value={travelData.amountPerDay}
                    onChange={handleTravelChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Total Allowance:</td>
                <td>{travelData.totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn back-button"  onClick={handleTravelSave}>Save</button>
          <button className="btn back-button"  onClick={() => setTravelPopupOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Updatesalary;