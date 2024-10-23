

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import '../Updatesalary/Updatesalary.css';

// // const Updatesalary = () => {
// //   const { emp_id } = useParams();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const salaryDetails = useSelector(state => state.salary.salaryDetails);
// //   const loading = useSelector(state => state.salary.loading);
// //   const error = useSelector(state => state.salary.error);

// //   const [salaryData, setSalaryData] = useState([]);
// //   const [isEditable, setIsEditable] = useState(false);
// //   const [isUpdated, setIsUpdated] = useState(false);
// //   const [employeeInfo, setEmployeeInfo] = useState({
// //     firstName: '',
// //     designation: '',
// //     created_date: ''
// //   });

// //   useEffect(() => {
// //     if (salaryDetails && salaryDetails.length > 0) {
// //       const details = salaryDetails[0];
// //       setSalaryData([
// //         { item: 'FULL BASIC', previous: details.previous_full_basic || 'Rs 0.00', revised: details.revised_full_basic || 'Rs 0.00' },
// //         { item: 'FULL HRA', previous: details.previous_full_hra || 'Rs 0.00', revised: details.revised_full_hra || 'Rs 0.00' },
// //         { item: 'FULL SPECIAL ALLOWANCE', previous: details.previous_full_special_allowance || 'Rs 0.00', revised: details.revised_full_special_allowance || 'Rs 0.00' },
// //         { item: 'FULL OTHER ALLOWANCE', previous: details.previous_full_other_allowance || 'Rs 0.00', revised: details.revised_full_other_allowance || 'Rs 0.00' },
// //         { item: 'FULL MEAL ALLOWANCE', previous: details.previous_full_meal_allowance || 'Rs 0.00', revised: details.revised_full_meal_allowance || 'Rs 0.00' },
// //         { item: 'FULL CONVEYANCE ALLOWANCE', previous: details.previous_full_conveyance_allowance || 'Rs 0.00', revised: details.revised_full_conveyance_allowance || 'Rs 0.00' },
// //         { item: 'FULL LTA', previous: details.previous_full_lta || 'Rs 0.00', revised: details.revised_full_lta || 'Rs 0.00' },
// //         { item: 'ANNUAL CTC', previous: details.previous_annual_ctc || 'Rs 0.00', revised: details.revised_annual_ctc || 'Rs 0.00' },
// //         { item: 'MONTHLY CTC', previous: details.previous_monthly_ctc || 'Rs 0.00', revised: details.revised_monthly_ctc || 'Rs 0.00' },
// //         { item: 'FULL EMPLOYER PF', previous: details.previous_full_employer_pf || 'Rs 0.00', revised: details.revised_full_employer_pf || 'Rs 0.00' },
// //         { item: 'EPF EXCESS CONTRIBUTION', previous: details.previous_epf_excess_contribution || 'Rs 0.00', revised: details.revised_epf_excess_contribution || 'Rs 0.00' },
// //         { item: 'PF BASE LIMIT', previous: details.previous_pf_base_limit || 'Rs 0.00', revised: details.revised_pf_base_limit || 'Rs 0.00' },
// //         { item: 'ELIGIBLE FOR PF', previous: details.previous_eligible_for_pf || 'Rs 0.00', revised: details.revised_eligible_for_pf || 'Rs 0.00' },
// //         { item: 'MASTER PF BASIC', previous: details.previous_master_pf_basic || 'Rs 0.00', revised: details.revised_master_pf_basic || 'Rs 0.00' },
// //         { item: 'FULL TRAVEL ALLOWANCE', previous: details.previous_full_travel_allowance || 'Rs 0.00', revised: details.revised_full_travel_allowance || 'Rs 0.00' },
// //         { item: 'LOP', previous: details.lop || 'Rs 0.00', revised: details.revised_lop || 'Rs 0.00' },
// //         { item: 'LOP DAYS', previous: details.lop_days || '0', revised: details.revised_lop_days || '0' },
// //         { item: 'SUB TOTAL', previous: details.sub_total || 'Rs 0.00', revised: details.revised_sub_total || 'Rs 0.00' },
// //         { item: 'TOTAL AMOUNT', previous: details.total_amt || 'Rs 0.00', revised: details.revised_total_amt || 'Rs 0.00' },
// //         { item: 'TOTAL DEDUCTIONS', previous: details.total_deductions || 'Rs 0.00', revised: details.revised_total_deductions || 'Rs 0.00' },
// //       ]);

// //       setEmployeeInfo({
// //         firstName: details.firstName || '',
// //         designation: details.designation || '',
// //         created_date: details.created_date || ''
// //       });
// //     }
// //   }, [salaryDetails]);

// //   const handleChange = (index, value) => {
// //     const newData = [...salaryData];
// //     newData[index].revised = value;
// //     setSalaryData(newData);
// //   };

// //   const handleSave = () => {
// //     const updatedSalaryData = {
// //       emp_id: salaryDetails[0]?.emp_id,
// //       revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC')?.revised || 'Rs 0.00',
// //       revised_annual_ctc: salaryData.find(item => item.item === 'ANNUAL CTC')?.revised || 'Rs 0.00',
// //       revised_full_basic: salaryData.find(item => item.item === 'FULL BASIC')?.revised || 'Rs 0.00',
// //       revised_full_hra: salaryData.find(item => item.item === 'FULL HRA')?.revised || 'Rs 0.00',
// //       revised_full_special_allowance: salaryData.find(item => item.item === 'FULL SPECIAL ALLOWANCE')?.revised || 'Rs 0.00',
// //       revised_full_other_allowance: salaryData.find(item => item.item === 'FULL OTHER ALLOWANCE')?.revised || 'Rs 0.00',
// //       revised_full_meal_allowance: salaryData.find(item => item.item === 'FULL MEAL ALLOWANCE')?.revised || 'Rs 0.00',
// //       revised_full_conveyance_allowance: salaryData.find(item => item.item === 'FULL CONVEYANCE ALLOWANCE')?.revised || 'Rs 0.00',
// //       revised_full_lta: salaryData.find(item => item.item === 'FULL LTA')?.revised || 'Rs 0.00',
// //       revised_full_employer_pf: salaryData.find(item => item.item === 'FULL EMPLOYER PF')?.revised || 'Rs 0.00',
// //       revised_epf_excess_contribution: salaryData.find(item => item.item === 'EPF EXCESS CONTRIBUTION')?.revised || 'Rs 0.00',
// //       revised_pf_base_limit: salaryData.find(item => item.item === 'PF BASE LIMIT')?.revised || 'Rs 0.00',
// //       revised_eligible_for_pf: salaryData.find(item => item.item === 'ELIGIBLE FOR PF')?.revised || 'Rs 0.00',
// //       revised_master_pf_basic: salaryData.find(item => item.item === 'MASTER PF BASIC')?.revised || 'Rs 0.00',
// //       revised_full_travel_allowance: salaryData.find(item => item.item === 'FULL TRAVEL ALLOWANCE')?.revised || 'Rs 0.00',
// //       revised_lop: salaryData.find(item => item.item === 'LOP')?.revised || 'Rs 0.00',
// //       revised_lop_days: salaryData.find(item => item.item === 'LOP DAYS')?.revised || '0',
// //       revised_sub_total: salaryData.find(item => item.item === 'SUB TOTAL')?.revised || 'Rs 0.00',
// //       revised_total_amt: salaryData.find(item => item.item === 'TOTAL AMOUNT')?.revised || 'Rs 0.00',
// //       revised_total_deductions: salaryData.find(item => item.item === 'TOTAL DEDUCTIONS')?.revised || 'Rs 0.00',
// //     };
    
// //     dispatch(saveSalary(updatedSalaryData))
// //       .then(response => {
// //         if (response && response.payload) {
// //           const { success, message, updatedSalary } = response.payload;

// //           if (success) {
// //             const updatedSalaryDetailsfromBackend = updatedSalary;
            
// //             setSalaryData(prevData => prevData.map(item => ({
// //               ...item,
// //               previous: updatedSalaryDetailsfromBackend[`previous_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.previous,
// //               revised: updatedSalaryDetailsfromBackend[`revised_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.revised
// //             })));

// //             setEmployeeInfo({
// //               firstName: updatedSalaryDetailsfromBackend.firstName || employeeInfo.firstName,
// //               designation: updatedSalaryDetailsfromBackend.designation || employeeInfo.designation,
// //               created_date: updatedSalaryDetailsfromBackend.created_date || employeeInfo.created_date
// //             });

// //             toast.success(message || 'Salary details updated successfully!');
// //             setIsEditable(false);
// //             setIsUpdated(true);
// //           } else {
// //             toast.error('Failed to update salary details!');
// //           }
// //         } else {
// //           toast.error('Failed to update salary details: No response payload!');
// //         }
// //       })
// //       .catch(err => {
// //         console.error(err);
// //         toast.error('Failed to update salary details!');
// //       });
// //   };
  
// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container">
// //       <ToastContainer />
// //       <div className="profile-header">
// //         <div className="profile-info">
// //           <div className="profile-name">Name: {employeeInfo.firstName}</div>
// //         </div>
// //       </div>
// //       <div className="info-grid">
// //         <div>
// //           <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
// //           <div className="info-title">Designation: {employeeInfo.designation}</div>
// //         </div>
// //       </div>
  
// //       <div className="header">
// //         {!isUpdated && (
// //           <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
// //         )}
// //         <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
// //         {isEditable && <button className="save-button" onClick={handleSave}>Save Changes</button>}
// //       </div>
// //       <table className="salary-table">
// //         <thead>
// //           <tr>
// //             <th>Salary Item</th>
// //             <th>Previous Salary</th>
// //             <th>Revised Salary</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {salaryData.map((row, index) => (
// //             <tr key={index}>
// //               <td>{row.item}</td>
// //               <td>{row.previous}</td>
// //               <td>
// //                 {row.item === 'MONTHLY CTC' && isEditable ? (
// //                   <input
// //                     type="text"
// //                     value={row.revised}
// //                     onChange={(e) => handleChange(index, e.target.value)}
// //                   />
// //                 ) : (
// //                   row.revised
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Updatesalary;


// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import '../Updatesalary/Updatesalary.css';

// // const Updatesalary = () => {
// //   const { emp_id } = useParams();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const salaryDetails = useSelector(state => state.salary.salaryDetails);
// //   const loading = useSelector(state => state.salary.loading);
// //   const error = useSelector(state => state.salary.error);

// //   const [salaryData, setSalaryData] = useState([]);
// //   const [isEditable, setIsEditable] = useState(false);
// //   const [isUpdated, setIsUpdated] = useState(false);
// //   const [isNewEmployee, setIsNewEmployee] = useState(false);
// //   const [employeeInfo, setEmployeeInfo] = useState({
// //     firstName: '',
// //     designation: '',
// //     created_date: ''
// //   });

// //   const salaryItems = [
// //     'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
// //     'FULL MEAL ALLOWANCE', 'FULL CONVEYANCE ALLOWANCE', 'FULL LTA', 'ANNUAL CTC',
// //     'MONTHLY CTC', 'FULL EMPLOYER PF', 'EPF EXCESS CONTRIBUTION', 'PF BASE LIMIT',
// //     'ELIGIBLE FOR PF', 'MASTER PF BASIC', 'FULL TRAVEL ALLOWANCE', 'LOP',
// //     'LOP DAYS', 'SUB TOTAL', 'TOTAL AMOUNT', 'TOTAL DEDUCTIONS', 'REMARKS'
// //   ];

// //   useEffect(() => {
// //     if (salaryDetails && salaryDetails.length > 0) {
// //       const details = salaryDetails[0];
// //       const newEmployee = !details.previous_full_basic;
// //       setIsNewEmployee(newEmployee);

// //       const newSalaryData = salaryItems.map(item => {
// //         const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
// //         return {
// //           item,
// //           previous: details[`previous_${lowercaseItem}`] || 'Rs 0.00',
// //           current: details[`revised_${lowercaseItem}`] || details[lowercaseItem] || 'Rs 0.00'
// //         };
// //       });

// //       setSalaryData(newSalaryData);

// //       setEmployeeInfo({
// //         firstName: details.firstName || '',
// //         designation: details.designation || '',
// //         created_date: details.created_date || ''
// //       });
// //     }
// //   }, [salaryDetails]);

// //   const handleChange = (index, value) => {
// //     const newData = [...salaryData];
// //     newData[index].current = value;
// //     setSalaryData(newData);
// //   };

// //   const handleSave = () => {
// //     const updatedSalaryData = {
// //       emp_id: salaryDetails[0]?.emp_id,
// //       ...salaryData.reduce((acc, item) => {
// //         const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
// //         acc[`revised_${lowercaseItem}`] = item.current;
// //         return acc;
// //       }, {})
// //     };
    
// //     dispatch(saveSalary(updatedSalaryData))
// //       .then(response => {
// //         if (response && response.payload) {
// //           const { success, message, updatedSalary } = response.payload;

// //           if (success) {
// //             const updatedSalaryDetailsfromBackend = updatedSalary;
            
// //             setSalaryData(prevData => prevData.map(item => {
// //               const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
// //               return {
// //                 ...item,
// //                 previous: isNewEmployee ? item.current : (updatedSalaryDetailsfromBackend[`previous_${lowercaseItem}`] || item.current),
// //                 current: updatedSalaryDetailsfromBackend[`revised_${lowercaseItem}`] || 
// //                          updatedSalaryDetailsfromBackend[lowercaseItem] || 
// //                          item.current
// //               };
// //             }));

// //             setEmployeeInfo({
// //               firstName: updatedSalaryDetailsfromBackend.firstName || employeeInfo.firstName,
// //               designation: updatedSalaryDetailsfromBackend.designation || employeeInfo.designation,
// //               created_date: updatedSalaryDetailsfromBackend.created_date || employeeInfo.created_date
// //             });

// //             toast.success(message || 'Salary details updated successfully!');
// //             setIsEditable(false);
// //             setIsUpdated(true);
// //             setIsNewEmployee(false);
// //           } else {
// //             toast.error('Failed to update salary details!');
// //           }
// //         } else {
// //           toast.error('Failed to update salary details: No response payload!');
// //         }
// //       })
// //       .catch(err => {
// //         console.error(err);
// //         toast.error('Failed to update salary details!');
// //       });
// //   };
  
// //   const getDisplayName = (item) => {
// //     switch (item) {
// //       case 'TOTAL DEDUCTIONS':
// //         return 'Total Deductions';
// //       case 'SUB TOTAL':
// //         return 'Sub Total';
// //       case 'TOTAL AMOUNT':
// //         return 'Total Amt';
// //       case 'REMARKS':
// //         return 'Remarks';
// //       default:
// //         return item;
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container">
// //       <ToastContainer />
// //       <div className="profile-header">
// //         <div className="profile-info">
// //           <div className="profile-name">Name: {employeeInfo.firstName}</div>
// //         </div>
// //       </div>
// //       <div className="info-grid">
// //         <div>
// //           <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
// //           <div className="info-title">Designation: {employeeInfo.designation}</div>
// //         </div>
// //       </div>
  
// //       <div className="header">
// //         {!isUpdated && (
// //           <button className="btn" onClick={() => setIsEditable(true)}>
// //             {isNewEmployee ? 'Add Salary' : 'Add New Revision'}
// //           </button>
// //         )}
// //         <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
// //         {isEditable && <button className="save-button" onClick={handleSave}>Save Changes</button>}
// //       </div>
// //       <table className="salary-table">
// //         <thead>
// //           <tr>
// //             <th>Salary Item</th>
// //             {(!isNewEmployee || isUpdated) && <th>Previous Salary</th>}
// //             <th>{isNewEmployee && !isUpdated ? 'Current Salary' : 'Revised Salary'}</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {salaryData.map((row, index) => (
// //             <tr key={index}>
// //               <td>{getDisplayName(row.item)}</td>
// //               {(!isNewEmployee || isUpdated) && <td>{row.previous}</td>}
// //               <td>
// //                 {row.item === 'MONTHLY CTC' && isEditable ? (
// //                   <input
// //                     type="text"
// //                     value={row.current}
// //                     onChange={(e) => handleChange(index, e.target.value)}
// //                   />
// //                 ) : (
// //                   row.current
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Updatesalary;



// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Updatesalary/Updatesalary.css';

// const SalaryUpdateForm = ({ emp_id, onSave, isEditable }) => {
//   const [formData, setFormData] = useState({
//     effectiveFrom: '',
//     payoutMonth: '',
//     employeeRemarks: '',
//     notes: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData); // Call onSave with formData on submit
//   };

//   return (
//     <form className="salary-update-form" onSubmit={handleSubmit}>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="effectiveFrom">Effective From</label>
//           <input
//             type="date"
//             id="effectiveFrom"
//             name="effectiveFrom"
//             value={formData.effectiveFrom}
//             onChange={handleChange}
//             required
//             disabled={!isEditable}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="payoutMonth">Payout Month</label>
//           <select
//             id="payoutMonth"
//             name="payoutMonth"
//             value={formData.payoutMonth}
//             onChange={handleChange}
//             required
//             disabled={!isEditable}
//           >
//             <option value="">Select month</option>
//             <option value="Jan 2025">Jan 2025</option>
//             <option value="Feb 2025">Feb 2025</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//       </div>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="employeeRemarks">Employee Remarks</label>
//           <textarea
//             id="employeeRemarks"
//             name="employeeRemarks"
//             value={formData.employeeRemarks}
//             onChange={handleChange}
//             placeholder="This will be visible to employee."
//             disabled={!isEditable}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="notes">Notes</label>
//           <textarea
//             id="notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             placeholder="This will not be visible to employee."
//             disabled={!isEditable}
//           ></textarea>
//         </div>
//       </div>
//       {isEditable && <button type="submit" className="save-button">Save Changes</button>}
//     </form>
//   );
// };

// const Updatesalary = () => {
//   const { emp_id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const salaryDetails = useSelector(state => state.salary.salaryDetails);
//   const loading = useSelector(state => state.salary.loading);
//   const error = useSelector(state => state.salary.error);

//   const [salaryData, setSalaryData] = useState([]);
//   const [isEditable, setIsEditable] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [isNewEmployee, setIsNewEmployee] = useState(false);
//   const [employeeInfo, setEmployeeInfo] = useState({
//     firstName: '',
//     designation: '',
//     created_date: ''
//   });

//   const salaryItems = [
//     'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
//     'FULL MEAL ALLOWANCE', 'FULL CONVEYANCE ALLOWANCE', 'FULL LTA', 'ANNUAL CTC',
//     'MONTHLY CTC', 'FULL EMPLOYER PF', 'EPF EXCESS CONTRIBUTION', 'PF BASE LIMIT',
//     'ELIGIBLE FOR PF', 'MASTER PF BASIC', 'FULL TRAVEL ALLOWANCE', 'LOP',
//     'LOP DAYS', 'SUB TOTAL', 'TOTAL AMOUNT', 'TOTAL DEDUCTIONS', 'REMARKS'
//   ];

//   useEffect(() => {
//     if (salaryDetails && salaryDetails.length > 0) {
//       const details = salaryDetails[0];
//       const newEmployee = !details.previous_full_basic;
//       setIsNewEmployee(newEmployee);

//       const newSalaryData = salaryItems.map(item => {
//         const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
//         return {
//           item,
//           previous: details[`previous_${lowercaseItem}`] || 'Rs 0.00',
//           current: details[`revised_${lowercaseItem}`] || details[lowercaseItem] || 'Rs 0.00'
//         };
//       });

//       setSalaryData(newSalaryData);

//       setEmployeeInfo({
//         firstName: details.firstName || '',
//         designation: details.designation || '',
//         created_date: details.created_date || ''
//       });
//     }
//   }, [salaryDetails]);

//   const handleChange = (index, value) => {
//     const newData = [...salaryData];
//     newData[index].current = value;
//     setSalaryData(newData);
//   };

//   const handleSave = (formData) => {
//     const updatedSalaryData = {
//       emp_id: salaryDetails[0]?.emp_id,
//       ...salaryData.reduce((acc, item) => {
//         const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
//         acc[`revised_${lowercaseItem}`] = item.current;
//         return acc;
//       }, {}),
//       ...formData
//     };

//     // Dispatch the saveSalary action
//     dispatch(saveSalary(updatedSalaryData))
//       .then(response => {
//         if (response && response.payload) {
//           const { success, updatedSalary } = response.payload;

//           if (success) {
//             // Update state with new salary data
//             setSalaryData(prevData => prevData.map(item => {
//               const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
//               return {
//                 ...item,
//                 previous: isNewEmployee ? item.current : (updatedSalary[`previous_${lowercaseItem}`] || item.current),
//                 current: updatedSalary[`revised_${lowercaseItem}`] || 
//                          updatedSalary[lowercaseItem] || 
//                          item.current
//               };
//             }));

//             setEmployeeInfo({
//               firstName: updatedSalary.firstName || employeeInfo.firstName,
//               designation: updatedSalary.designation || employeeInfo.designation,
//               created_date: updatedSalary.created_date || employeeInfo.created_date
//             });

//             toast.success('Salary details updated successfully!');
//             setIsEditable(false);
//             setIsUpdated(true);
//             setIsNewEmployee(false);
//           } else {
//             toast.error('Failed to update salary details!');
//           }
//         } else {
//           toast.error('Failed to update salary details: No response payload!');
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         toast.error('Failed to update salary details!');
//       });
//   };

//   const handleBack = () => {
//     navigate(-1); // Navigate back to the previous page
//   };

//   const getDisplayName = (item) => {
//     switch (item) {
//       case 'TOTAL DEDUCTIONS':
//         return 'Total Deductions';
//       case 'SUB TOTAL':
//         return 'Sub Total';
//       case 'TOTAL AMOUNT':
//         return 'Total Amt';
//       case 'REMARKS':
//         return 'Remarks';
//       default:
//         return item;
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container">
//       <ToastContainer />
//       <div className="profile-header">
//         <div className="profile-info">
//           <div className="profile-name">Name: {employeeInfo.firstName}</div>
//         </div>
//       </div>
//       <div className="info-grid">
//         <div>
//           <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
//           <div className="info-title">Designation: {employeeInfo.designation}</div>
//         </div>
//       </div>

//       <div className="header">
//         {!isUpdated && (
//           <button className="btn" onClick={() => setIsEditable(true)}>Edit Salary</button>
//         )}
//         {isUpdated && (
//           <button className="btn back-button" onClick={handleBack}>Back</button>
//         )}
//       </div>
//       <table className="salary-table">
//         <thead>
//           <tr>
//             <th>Salary Item</th>
//             {!isNewEmployee || isUpdated ? <th>Previous Salary</th> : null}
//             <th>Revised Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salaryData.map((salaryItem, index) => (
//             <tr key={salaryItem.item}>
//               <td>{getDisplayName(salaryItem.item)}</td>
//               {!isNewEmployee || isUpdated ? <td>{salaryItem.previous}</td> : null}
//               <td>
//                 {salaryItem.item === 'MONTHLY CTC' ? (
//                   <input
//                     type="number"
//                     value={salaryItem.current}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                     disabled={!isEditable}
//                   />
//                 ) : (
//                   salaryItem.current
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <SalaryUpdateForm emp_id={emp_id} onSave={handleSave} isEditable={isEditable} />
//     </div>
//   );
// };

// export default Updatesalary;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Updatesalary/Updatesalary.css';

// const SalaryUpdateForm = ({ emp_id, onSave, isEditable }) => {
//   const [formData, setFormData] = useState({
//     effectiveFrom: '',
//     payoutMonth: '',
//     employeeRemarks: '',
//     notes: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <form className="salary-update-form" onSubmit={handleSubmit}>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="effectiveFrom">Effective From</label>
//           <input
//             type="date"
//             id="effectiveFrom"
//             name="effectiveFrom"
//             value={formData.effectiveFrom}
//             onChange={handleChange}
//             required
//             disabled={!isEditable}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="payoutMonth">Payout Month</label>
//           <select
//             id="payoutMonth"
//             name="payoutMonth"
//             value={formData.payoutMonth}
//             onChange={handleChange}
//             required
//             disabled={!isEditable}
//           >
//             <option value="">Select month</option>
//             <option value="Jan 2025">Jan 2025</option>
//             <option value="Feb 2025">Feb 2025</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//       </div>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="employeeRemarks">Employee Remarks</label>
//           <textarea
//             id="employeeRemarks"
//             name="employeeRemarks"
//             value={formData.employeeRemarks}
//             onChange={handleChange}
//             placeholder="This will be visible to employee."
//             disabled={!isEditable}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="notes">Notes</label>
//           <textarea
//             id="notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             placeholder="This will not be visible to employee."
//             disabled={!isEditable}
//           ></textarea>
//         </div>
//       </div>
//       {isEditable && <button type="submit" className="save-button">Save Changes</button>}
//     </form>
//   );
// };

// const Updatesalary = () => {
//   const { emp_id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const salaryDetails = useSelector((state) => state.salary.salaryDetails);
//   const loading = useSelector((state) => state.salary.loading);
//   const error = useSelector((state) => state.salary.error);

//   const [salaryData, setSalaryData] = useState([]);
//   const [isEditable, setIsEditable] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [isNewEmployee, setIsNewEmployee] = useState(false);
//   const [employeeInfo, setEmployeeInfo] = useState({
//     firstName: '',
//     designation: '',
//     created_date: ''
//   });

//   const salaryItems = [
//     'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
//     'FULL MEAL ALLOWANCE', 'FULL CONVEYANCE ALLOWANCE', 'FULL LTA', 'ANNUAL CTC',
//     'MONTHLY CTC', 'FULL EMPLOYER PF', 'EPF EXCESS CONTRIBUTION', 'PF BASE LIMIT',
//     'ELIGIBLE FOR PF', 'MASTER PF BASIC', 'FULL TRAVEL ALLOWANCE', 'LOP',
//     'LOP DAYS', 'SUB TOTAL', 'TOTAL AMOUNT', 'TOTAL DEDUCTIONS', 'REMARKS'
//   ];

//   useEffect(() => {
//     if (salaryDetails && salaryDetails.length > 0) {
//       const details = salaryDetails[0];
//       const newEmployee = !details.previous_full_basic;
//       setIsNewEmployee(newEmployee);

//       const newSalaryData = salaryItems.map((item) => {
//         const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
//         return {
//           item,
//           previous: details[`previous_${lowercaseItem}`] || ' 0.00',
//           current: details[`revised_${lowercaseItem}`] || details[lowercaseItem] || ' 0.00'
//         };
//       });

//       setSalaryData(newSalaryData);

//       setEmployeeInfo({
//         firstName: details.firstName || '',
//         designation: details.designation || '',
//         created_date: details.created_date || ''
//       });
//     }
//   }, [salaryDetails]);

//   const handleChange = (index, value) => {
//     if (salaryData[index].item === 'MONTHLY CTC') {
//       const newData = [...salaryData];
//       newData[index].current = value;
//       setSalaryData(newData);
//     }
//   };

//   const handleSave = (formData) => {
//     const updatedSalaryData = {
//       emp_id: salaryDetails[0]?.emp_id,
//       revised_monthly_ctc: salaryData.find((item) => item.item === 'MONTHLY CTC').current,
//       ...formData
//     };

//     dispatch(saveSalary(updatedSalaryData))
//       .then((response) => {
//         if (response && response.payload) {
//           const { success, updatedSalary } = response.payload;

//           if (success) {
//             setSalaryData((prevData) =>
//               prevData.map((item) => {
//                 const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
//                 return {
//                   ...item,
//                   previous: isNewEmployee
//                     ? item.current
//                     : updatedSalary[`previous_${lowercaseItem}`] || item.current,
//                   current:
//                     updatedSalary[`revised_${lowercaseItem}`] ||
//                     updatedSalary[lowercaseItem] ||
//                     item.current
//                 };
//               })
//             );

//             setEmployeeInfo({
//               firstName: updatedSalary.firstName || employeeInfo.firstName,
//               designation: updatedSalary.designation || employeeInfo.designation,
//               created_date: updatedSalary.created_date || employeeInfo.created_date
//             });

//             toast.success('Salary details updated successfully!');
//             setIsEditable(false);
//             setIsUpdated(true);
//             setIsNewEmployee(false);
//           } else {
//             toast.error('Failed to update salary details!');
//           }
//         } else {
//           toast.error('Failed to update salary details: No response payload!');
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error('Failed to update salary details!');
//       });
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const getDisplayName = (item) => {
//     switch (item) {
//       case 'TOTAL DEDUCTIONS':
//         return 'Total Deductions';
//       case 'SUB TOTAL':
//         return 'Sub Total';
//       case 'TOTAL AMOUNT':
//         return 'Total Amt';
//       case 'REMARKS':
//         return 'Remarks';
//       default:
//         return item;
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container">
//       <ToastContainer />
//       <div className="profile-header">
//         <div className="profile-info">
//           <div className="profile-name">Name: {employeeInfo.firstName}</div>
//         </div>
//       </div>
//       <div className="info-grid">
//         <div>
//           <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
//           <div className="info-title">Designation: {employeeInfo.designation}</div>
//         </div>
//       </div>

//       <div className="header">
//         {!isUpdated && (
//           <button className="btn" onClick={() => setIsEditable(true)}>Edit Salary</button>
//         )}
//         {isUpdated && (
//           <button className="btn back-button" onClick={handleBack}>Back</button>
//         )}
//       </div>
//       <table className="salary-table">
//         <thead>
//           <tr>
//             <th>Item</th>
//             {!isNewEmployee && <th>Previous Salary</th>}
//             <th>{isNewEmployee ? 'Current Salary' : 'Revised Salary'}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salaryData.map((row, index) => (
//             <tr key={row.item}>
//               <td>{getDisplayName(row.item)}</td>
//               {!isNewEmployee && <td>{row.previous}</td>}
//               <td>
//                 {row.item === 'MONTHLY CTC' && isEditable ? (
//                   <input
//                     type="text"
//                     value={row.current}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                   />
//                 ) : (
//                   row.current
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <SalaryUpdateForm emp_id={emp_id} onSave={handleSave} isEditable={isEditable} />
//     </div>
//   );
// };

// export default Updatesalary;


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
      {/* <div className="form-row"> */}
        {/* <div className="form-group">
          <label htmlFor="effectiveFrom">Effective From</label>
          <input
            type="date"
            id="effectiveFrom"
            name="effectiveFrom"
            value={formData.effectiveFrom}
            onChange={handleChange}
            required
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="payoutMonth">Payout Month</label>
          <select
            id="payoutMonth"
            name="payoutMonth"
            value={formData.payoutMonth}
            onChange={handleChange}
            required
            disabled={!isEditable}
          >
            <option value="">Select month</option>
            <option value="Jan 2025">Jan 2025</option>
            <option value="Feb 2025">Feb 2025</option>
          </select>
        </div>
      </div> */}
      {/* <div className="form-row">
        <div className="form-group">
          <label htmlFor="employeeRemarks">Employee Remarks</label>
          <textarea
            id="employeeRemarks"
            name="employeeRemarks"
            value={formData.employeeRemarks}
            onChange={handleChange}
            placeholder="This will be visible to employee."
            disabled={!isEditable}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="This will not be visible to employee."
            disabled={!isEditable}
          ></textarea>
        </div>
      </div> */}
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
  const [isNewEmployee, setIsNewEmployee] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    designation: '',
    created_date: ''
  });

  const salaryItems = [
    'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
    'FULL MEAL ALLOWANCE', 'FULL CONVEYANCE ALLOWANCE', 'FULL LTA', 'ANNUAL CTC',
    'MONTHLY CTC', 'FULL EMPLOYER PF', 'EPF EXCESS CONTRIBUTION', 'PF BASE LIMIT',
    'ELIGIBLE FOR PF', 'MASTER PF BASIC', 'FULL TRAVEL ALLOWANCE', 'LOP',
    'LOP DAYS', 'SUB TOTAL', 'TOTAL AMOUNT', 'TOTAL DEDUCTIONS', 'REMARKS'
  ];

  useEffect(() => {
    if (salaryDetails && salaryDetails.length > 0) {
      const details = salaryDetails[0];
      const newEmployee = !details.previous_full_basic;
      setIsNewEmployee(newEmployee);

      const newSalaryData = salaryItems.map((item) => {
        const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
        return {
          item,
          previous: details[`previous_${lowercaseItem}`] || '0.00',
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
    if (salaryData[index].item === 'MONTHLY CTC') {
      const newData = [...salaryData];
      newData[index].current = value;
      setSalaryData(newData);
    }
  };

  const handleSave = (formData) => {
    const updatedSalaryData = {
      emp_id: salaryDetails[0]?.emp_id,
      revised_monthly_ctc: salaryData.find((item) => item.item === 'MONTHLY CTC').current,
      ...formData
    };

    dispatch(saveSalary(updatedSalaryData))
      .then((response) => {
        if (response && response.payload) {
          const { success, updatedSalary } = response.payload;

          if (success) {
            setSalaryData((prevData) =>
              prevData.map((item) => {
                const lowercaseItem = item.item.toLowerCase().replace(/ /g, '_');
                return {
                  ...item,
                  previous: isNewEmployee
                    ? item.current
                    : updatedSalary[`previous_${lowercaseItem}`] || item.current,
                  current:
                    updatedSalary[`revised_${lowercaseItem}`] ||
                    updatedSalary[lowercaseItem] ||
                    item.current
                };
              })
            );

            setEmployeeInfo({
              firstName: updatedSalary.firstName || employeeInfo.firstName,
              designation: updatedSalary.designation || employeeInfo.designation,
              created_date: updatedSalary.created_date || employeeInfo.created_date
            });

            toast.success('Salary details updated successfully!');
            setIsEditable(false);
            setIsUpdated(true);
            setIsNewEmployee(false);
          } else {
            toast.error('Failed to update salary details!');
          }
        } else {
          toast.error('Failed to update salary details: No response payload!');
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to update salary details!');
      });
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
            {!isNewEmployee && <th>Previous Salary</th>}
            <th>{isNewEmployee ? 'Current Salary' : 'Revised Salary'}</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((row, index) => (
            <tr key={row.item}>
              <td>{getDisplayName(row.item)}</td>
              {!isNewEmployee && <td>{row.previous}</td>}
              <td>
                {row.item === 'MONTHLY CTC' && isEditable ? (
                  <input
                    type="text"
                    value={row.current}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                ) : (
                  row.current
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <SalaryUpdateForm emp_id={emp_id} onSave={handleSave} isEditable={isEditable} />
    </div>
  );
};

export default Updatesalary;