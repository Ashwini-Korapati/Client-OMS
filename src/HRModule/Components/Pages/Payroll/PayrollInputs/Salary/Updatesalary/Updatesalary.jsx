// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// // import '../Updatesalary/Updatesalary.css';

// // const Updatesalary = () => {
// //   const { emp_id } = useParams(); 
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
  
// //   const salaryDetails = useSelector(state => state.salary.salaryDetails);
// //   // const salaryDetails1 = useSelector(state => state.salary.salaryDetails[1]);
// //   // const employess = useSelector((state)=> state.employess.employess.employess)
// //   const loading = useSelector(state => state.salary.loading);
// //   const error = useSelector(state => state.salary.error);
  
// //   const [salaryData, setSalaryData] = useState([]);
// //   const [isEditable, setIsEditable] = useState(false);

// //   useEffect(() => {
// //     if (salaryDetails && salaryDetails.length > 0) {
// //       const details = salaryDetails[0]; // Access the first element in the array

// //       console.log("Mapping salaryDetails to salaryData", details); // Debugging

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
// //       ]);
// //     } else {
// //       console.log("Salary Details is not available or empty");
// //     }
// //   }, [salaryDetails]);

// //   const handleChange = (index, field, value) => {
// //     const newData = [...salaryData];
// //     newData[index][field] = value;
// //     setSalaryData(newData);
// //   };

// //   const handleSave = () => {
// //     const updatedSalaryData = {
// //       emp_id: salaryDetails[0]?.emp_id,
// //       revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC').revised,
// //       // You can include other fields here if necessary
// //     };

// //     dispatch(saveSalary(updatedSalaryData));
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   // if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container">
// //       <div className="profile-header">
// //         <div className="profile-info">
// //           <div className="profile-name">Name: {salaryDetails[0]?.firstName}</div>
// //         </div>
// //       </div>
// //       <div className="info-grid">
// //         <div>
// //           <div className="info-title">create date: {salaryDetails[0]?.created_date}</div>
// //           <div className="info-title">Designation: {salaryDetails[0]?.designation}</div>
          
// //         </div>
        
// //       </div>
  
// //       <div className="header">
// //         <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
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
// //                     onChange={(e) => handleChange(index, 'revised', e.target.value)}
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

// //   useEffect(() => {
// //     if (salaryDetails && salaryDetails.length > 0) {
// //       const details = salaryDetails[0]; // Access the first element in the array

// //       console.log("Mapping salaryDetails to salaryData", details); // Debugging

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
// //       ]);
// //     } else {
// //       console.log("Salary Details is not available or empty");
// //     }
// //   }, [salaryDetails]);

// //   const handleChange = (index, field, value) => {
// //     const newData = [...salaryData];
// //     newData[index][field] = value;
// //     setSalaryData(newData);
// //   };

// //   const handleSave = () => {
// //     const updatedSalaryData = {
// //       emp_id: salaryDetails[0]?.emp_id,
// //       revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC').revised,
// //       revised_annual_ctc: salaryData.find(item => item.item === 'ANNUAL CTC').revised,
// //       revised_full_basic: salaryData.find(item => item.item === 'FULL BASIC').revised,
// //       revised_full_hra: salaryData.find(item => item.item === 'FULL HRA').revised,
// //       revised_full_special_allowance: salaryData.find(item => item.item === 'FULL SPECIAL ALLOWANCE').revised,
// //       revised_full_other_allowance: salaryData.find(item => item.item === 'FULL OTHER ALLOWANCE').revised,
// //       revised_full_meal_allowance: salaryData.find(item => item.item === 'FULL MEAL ALLOWANCE').revised,
// //       revised_full_conveyance_allowance: salaryData.find(item => item.item === 'FULL CONVEYANCE ALLOWANCE').revised,
// //       revised_full_lta: salaryData.find(item => item.item === 'FULL LTA').revised,
// //       revised_full_employer_pf: salaryData.find(item => item.item === 'FULL EMPLOYER PF').revised,
// //       revised_epf_excess_contribution: salaryData.find(item => item.item === 'EPF EXCESS CONTRIBUTION').revised,
// //       revised_pf_base_limit: salaryData.find(item => item.item === 'PF BASE LIMIT').revised,
// //       revised_eligible_for_pf: salaryData.find(item => item.item === 'ELIGIBLE FOR PF').revised,
// //       revised_master_pf_basic: salaryData.find(item => item.item === 'MASTER PF BASIC').revised,
// //     };

// //     dispatch(saveSalary(updatedSalaryData));
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   // if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container">
// //       <div className="profile-header">
// //         <div className="profile-info">
// //           <div className="profile-name">Name: {salaryDetails[0]?.firstName}</div>
// //         </div>
// //       </div>
// //       <div className="info-grid">
// //         <div>
// //           <div className="info-title">Create Date: {salaryDetails[0]?.created_date}</div>
// //           <div className="info-title">Designation: {salaryDetails[0]?.designation}</div>
// //         </div>
// //       </div>
  
// //       <div className="header">
// //         <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
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
// //                 {isEditable ? (
// //                   <input
// //                     type="text"
// //                     value={row.revised}
// //                     onChange={(e) => handleChange(index, 'revised', e.target.value)}
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


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Updatesalary/Updatesalary.css';

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

//   useEffect(() => {
//     if (salaryDetails && salaryDetails.length > 0) {
//       const details = salaryDetails[0];

//       setSalaryData([
//         { item: 'FULL BASIC', previous: details.previous_full_basic || 'Rs 0.00', revised: details.revised_full_basic || 'Rs 0.00' },
//         { item: 'FULL HRA', previous: details.previous_full_hra || 'Rs 0.00', revised: details.revised_full_hra || 'Rs 0.00' },
//         { item: 'FULL SPECIAL ALLOWANCE', previous: details.previous_full_special_allowance || 'Rs 0.00', revised: details.revised_full_special_allowance || 'Rs 0.00' },
//         { item: 'FULL OTHER ALLOWANCE', previous: details.previous_full_other_allowance || 'Rs 0.00', revised: details.revised_full_other_allowance || 'Rs 0.00' },
//         { item: 'FULL MEAL ALLOWANCE', previous: details.previous_full_meal_allowance || 'Rs 0.00', revised: details.revised_full_meal_allowance || 'Rs 0.00' },
//         { item: 'FULL CONVEYANCE ALLOWANCE', previous: details.previous_full_conveyance_allowance || 'Rs 0.00', revised: details.revised_full_conveyance_allowance || 'Rs 0.00' },
//         { item: 'FULL LTA', previous: details.previous_full_lta || 'Rs 0.00', revised: details.revised_full_lta || 'Rs 0.00' },
//         { item: 'ANNUAL CTC', previous: details.previous_annual_ctc || 'Rs 0.00', revised: details.revised_annual_ctc || 'Rs 0.00' },
//         { item: 'MONTHLY CTC', previous: details.previous_monthly_ctc || 'Rs 0.00', revised: details.revised_monthly_ctc || 'Rs 0.00' },
//         { item: 'FULL EMPLOYER PF', previous: details.previous_full_employer_pf || 'Rs 0.00', revised: details.revised_full_employer_pf || 'Rs 0.00' },
//         { item: 'EPF EXCESS CONTRIBUTION', previous: details.previous_epf_excess_contribution || 'Rs 0.00', revised: details.revised_epf_excess_contribution || 'Rs 0.00' },
//         { item: 'PF BASE LIMIT', previous: details.previous_pf_base_limit || 'Rs 0.00', revised: details.revised_pf_base_limit || 'Rs 0.00' },
//         { item: 'ELIGIBLE FOR PF', previous: details.previous_eligible_for_pf || 'Rs 0.00', revised: details.revised_eligible_for_pf || 'Rs 0.00' },
//         { item: 'MASTER PF BASIC', previous: details.previous_master_pf_basic || 'Rs 0.00', revised: details.revised_master_pf_basic || 'Rs 0.00' },
//       ]);
//     } else {
//       console.log("Salary Details is not available or empty");
//     }
//   }, [salaryDetails]);

//   const handleChange = (index, field, value) => {
//     const newData = [...salaryData];
//     newData[index][field] = value;
//     setSalaryData(newData);
//   };

//   const handleSave = () => {
//     const updatedSalaryData = {
//       emp_id: salaryDetails[0]?.emp_id,
//       revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC').revised,
//       revised_annual_ctc: salaryData.find(item => item.item === 'ANNUAL CTC').revised,
//       revised_full_basic: salaryData.find(item => item.item === 'FULL BASIC').revised,
//       revised_full_hra: salaryData.find(item => item.item === 'FULL HRA').revised,
//       revised_full_special_allowance: salaryData.find(item => item.item === 'FULL SPECIAL ALLOWANCE').revised,
//       revised_full_other_allowance: salaryData.find(item => item.item === 'FULL OTHER ALLOWANCE').revised,
//       revised_full_meal_allowance: salaryData.find(item => item.item === 'FULL MEAL ALLOWANCE').revised,
//       revised_full_conveyance_allowance: salaryData.find(item => item.item === 'FULL CONVEYANCE ALLOWANCE').revised,
//       revised_full_lta: salaryData.find(item => item.item === 'FULL LTA').revised,
//       revised_full_employer_pf: salaryData.find(item => item.item === 'FULL EMPLOYER PF').revised,
//       revised_epf_excess_contribution: salaryData.find(item => item.item === 'EPF EXCESS CONTRIBUTION').revised,
//       revised_pf_base_limit: salaryData.find(item => item.item === 'PF BASE LIMIT').revised,
//       revised_eligible_for_pf: salaryData.find(item => item.item === 'ELIGIBLE FOR PF').revised,
//       revised_master_pf_basic: salaryData.find(item => item.item === 'MASTER PF BASIC').revised,
//     };

//     dispatch(saveSalary(updatedSalaryData))
//       .then(() => {
//         toast.success('Salary updated successfully!');
//         setIsEditable(false);
//         setIsUpdated(true);
//       })
//       .catch((err) => {
//         toast.error('Failed to update salary!');
//         console.error(err);
//       });
//   };

//   if (loading) return <div>Loading...</div>;
//   // if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container">
//       <ToastContainer />
//       <div className="profile-header">
//         <div className="profile-info">
//           <div className="profile-name">Name: {salaryDetails[0]?.firstName}</div>
//         </div>
//       </div>
//       <div className="info-grid">
//         <div>
//           <div className="info-title">Create Date: {salaryDetails[0]?.created_date}</div>
//           <div className="info-title">Designation: {salaryDetails[0]?.designation}</div>
//         </div>
//       </div>
  
//       <div className="header">
//         {!isUpdated && (
//           <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
//         )}
//         <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
//         {isEditable && <button className="save-button" onClick={handleSave}>Save Changes</button>}
//       </div>
//       <table className="salary-table">
//         <thead>
//           <tr>
//             <th>Salary Item</th>
//             <th>Previous Salary</th>
//             <th>Revised Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salaryData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.item}</td>
//               <td>{row.previous}</td>
//               <td>
//                 {row.item === 'MONTHLY CTC' && isEditable ? (
//                   <input
//                     type="text"
//                     value={row.revised}
//                     onChange={(e) => handleChange(index, 'revised', e.target.value)}
//                   />
//                 ) : (
//                   row.revised
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
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

const Updatesalary = () => {
  const { emp_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const salaryDetails = useSelector(state => state.salary.salaryDetails);
  const loading = useSelector(state => state.salary.loading);
  const error = useSelector(state => state.salary.error);

  const [salaryData, setSalaryData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (salaryDetails && salaryDetails.length > 0) {
      const details = salaryDetails[0];

      setSalaryData([
        { item: 'FULL BASIC', previous: details.previous_full_basic || 'Rs 0.00', revised: details.revised_full_basic || 'Rs 0.00' },
        { item: 'FULL HRA', previous: details.previous_full_hra || 'Rs 0.00', revised: details.revised_full_hra || 'Rs 0.00' },
        { item: 'FULL SPECIAL ALLOWANCE', previous: details.previous_full_special_allowance || 'Rs 0.00', revised: details.revised_full_special_allowance || 'Rs 0.00' },
        { item: 'FULL OTHER ALLOWANCE', previous: details.previous_full_other_allowance || 'Rs 0.00', revised: details.revised_full_other_allowance || 'Rs 0.00' },
        { item: 'FULL MEAL ALLOWANCE', previous: details.previous_full_meal_allowance || 'Rs 0.00', revised: details.revised_full_meal_allowance || 'Rs 0.00' },
        { item: 'FULL CONVEYANCE ALLOWANCE', previous: details.previous_full_conveyance_allowance || 'Rs 0.00', revised: details.revised_full_conveyance_allowance || 'Rs 0.00' },
        { item: 'FULL LTA', previous: details.previous_full_lta || 'Rs 0.00', revised: details.revised_full_lta || 'Rs 0.00' },
        { item: 'ANNUAL CTC', previous: details.previous_annual_ctc || 'Rs 0.00', revised: details.revised_annual_ctc || 'Rs 0.00' },
        { item: 'MONTHLY CTC', previous: details.previous_monthly_ctc || 'Rs 0.00', revised: details.revised_monthly_ctc || 'Rs 0.00' },
        { item: 'FULL EMPLOYER PF', previous: details.previous_full_employer_pf || 'Rs 0.00', revised: details.revised_full_employer_pf || 'Rs 0.00' },
        { item: 'EPF EXCESS CONTRIBUTION', previous: details.previous_epf_excess_contribution || 'Rs 0.00', revised: details.revised_epf_excess_contribution || 'Rs 0.00' },
        { item: 'PF BASE LIMIT', previous: details.previous_pf_base_limit || 'Rs 0.00', revised: details.revised_pf_base_limit || 'Rs 0.00' },
        { item: 'ELIGIBLE FOR PF', previous: details.previous_eligible_for_pf || 'Rs 0.00', revised: details.revised_eligible_for_pf || 'Rs 0.00' },
        { item: 'MASTER PF BASIC', previous: details.previous_master_pf_basic || 'Rs 0.00', revised: details.revised_master_pf_basic || 'Rs 0.00' },
      ]);
    } else {
      console.log("Salary Details is not available or empty");
    }
  }, [salaryDetails]);

  const handleChange = (index, field, value) => {
    const newData = [...salaryData];
    newData[index][field] = value;
    setSalaryData(newData);
  };

  const handleSave = () => {
    const updatedSalaryData = {
      emp_id: salaryDetails[0]?.emp_id,
      revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC')?.revised || 'Rs 0.00',
      revised_annual_ctc: salaryData.find(item => item.item === 'ANNUAL CTC')?.revised || 'Rs 0.00',
      revised_full_basic: salaryData.find(item => item.item === 'FULL BASIC')?.revised || 'Rs 0.00',
      revised_full_hra: salaryData.find(item => item.item === 'FULL HRA')?.revised || 'Rs 0.00',
      revised_full_special_allowance: salaryData.find(item => item.item === 'FULL SPECIAL ALLOWANCE')?.revised || 'Rs 0.00',
      revised_full_other_allowance: salaryData.find(item => item.item === 'FULL OTHER ALLOWANCE')?.revised || 'Rs 0.00',
      revised_full_meal_allowance: salaryData.find(item => item.item === 'FULL MEAL ALLOWANCE')?.revised || 'Rs 0.00',
      revised_full_conveyance_allowance: salaryData.find(item => item.item === 'FULL CONVEYANCE ALLOWANCE')?.revised || 'Rs 0.00',
      revised_full_lta: salaryData.find(item => item.item === 'FULL LTA')?.revised || 'Rs 0.00',
      revised_full_employer_pf: salaryData.find(item => item.item === 'FULL EMPLOYER PF')?.revised || 'Rs 0.00',
      revised_epf_excess_contribution: salaryData.find(item => item.item === 'EPF EXCESS CONTRIBUTION')?.revised || 'Rs 0.00',
      revised_pf_base_limit: salaryData.find(item => item.item === 'PF BASE LIMIT')?.revised || 'Rs 0.00',
      revised_eligible_for_pf: salaryData.find(item => item.item === 'ELIGIBLE FOR PF')?.revised || 'Rs 0.00',
      revised_master_pf_basic: salaryData.find(item => item.item === 'MASTER PF BASIC')?.revised || 'Rs 0.00',
    };
  
    dispatch(saveSalary(updatedSalaryData))
      .then(() => {
        toast.success('Salary updated successfully!');
        setIsEditable(false);
        setIsUpdated(true);
      })
      .catch((err) => {
        toast.error('Failed to update salary!');
        console.error(err);
      });
  };
  

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <ToastContainer />
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-name">Name: {salaryDetails[0]?.firstName}</div>
        </div>
      </div>
      <div className="info-grid">
        <div>
          <div className="info-title">Create Date: {salaryDetails[0]?.created_date}</div>
          <div className="info-title">Designation: {salaryDetails[0]?.designation}</div>
        </div>
      </div>
  
      <div className="header">
        {!isUpdated && (
          <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
        )}
        <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
        {isEditable && <button className="save-button" onClick={handleSave}>Save Changes</button>}
      </div>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Salary Item</th>
            <th>Previous Salary</th>
            <th>Revised Salary</th>

          </tr>
        </thead>
        <tbody>
          {salaryData.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.previous}</td>
              <td>
                {row.item === 'MONTHLY CTC' && isEditable ? (
                  <input
                    type="text"
                    value={row.revised}
                    onChange={(e) => handleChange(index, 'revised', e.target.value)}
                  />
                ) : (
                  row.revised
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Updatesalary;

