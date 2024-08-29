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