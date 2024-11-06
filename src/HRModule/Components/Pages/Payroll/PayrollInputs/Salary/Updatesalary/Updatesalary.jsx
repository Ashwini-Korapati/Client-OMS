

// // // // import React, { useEffect, useState } from 'react';
// // // // import { useNavigate, useParams } from 'react-router-dom';
// // // // import { useSelector, useDispatch } from 'react-redux';
// // // // import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
// // // // import { ToastContainer, toast } from 'react-toastify';
// // // // import 'react-toastify/dist/ReactToastify.css';
// // // // import '../Updatesalary/Updatesalary.css';

// // // // const Updatesalary = () => {
// // // //   const { emp_id } = useParams();
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();
// // // //   const salaryDetails = useSelector(state => state.salary.salaryDetails);
// // // //   const loading = useSelector(state => state.salary.loading);
// // // //   const error = useSelector(state => state.salary.error);

// // // //   const [salaryData, setSalaryData] = useState([]);
// // // //   const [isEditable, setIsEditable] = useState(false);
// // // //   const [isUpdated, setIsUpdated] = useState(false);
// // // //   const [employeeInfo, setEmployeeInfo] = useState({
// // // //     firstName: '',
// // // //     designation: '',
// // // //     created_date: ''
// // // //   });

// // // //   useEffect(() => {
// // // //     if (salaryDetails && salaryDetails.length > 0) {
// // // //       const details = salaryDetails[0];
// // // //       setSalaryData([
// // // //         { item: 'FULL BASIC', previous: details.previous_full_basic || 'Rs 0.00', revised: details.revised_full_basic || 'Rs 0.00' },
// // // //         { item: 'FULL HRA', previous: details.previous_full_hra || 'Rs 0.00', revised: details.revised_full_hra || 'Rs 0.00' },
// // // //         { item: 'FULL SPECIAL ALLOWANCE', previous: details.previous_full_special_allowance || 'Rs 0.00', revised: details.revised_full_special_allowance || 'Rs 0.00' },
// // // //         { item: 'FULL OTHER ALLOWANCE', previous: details.previous_full_other_allowance || 'Rs 0.00', revised: details.revised_full_other_allowance || 'Rs 0.00' },
// // // //         { item: 'FULL MEAL ALLOWANCE', previous: details.previous_full_meal_allowance || 'Rs 0.00', revised: details.revised_full_meal_allowance || 'Rs 0.00' },
// // // //         { item: 'FULL CONVEYANCE ALLOWANCE', previous: details.previous_full_conveyance_allowance || 'Rs 0.00', revised: details.revised_full_conveyance_allowance || 'Rs 0.00' },
// // // //         { item: 'FULL LTA', previous: details.previous_full_lta || 'Rs 0.00', revised: details.revised_full_lta || 'Rs 0.00' },
// // // //         { item: 'ANNUAL CTC', previous: details.previous_annual_ctc || 'Rs 0.00', revised: details.revised_annual_ctc || 'Rs 0.00' },
// // // //         { item: 'MONTHLY CTC', previous: details.previous_monthly_ctc || 'Rs 0.00', revised: details.revised_monthly_ctc || 'Rs 0.00' },
// // // //         { item: 'FULL EMPLOYER PF', previous: details.previous_full_employer_pf || 'Rs 0.00', revised: details.revised_full_employer_pf || 'Rs 0.00' },
// // // //         { item: 'EPF EXCESS CONTRIBUTION', previous: details.previous_epf_excess_contribution || 'Rs 0.00', revised: details.revised_epf_excess_contribution || 'Rs 0.00' },
// // // //         { item: 'PF BASE LIMIT', previous: details.previous_pf_base_limit || 'Rs 0.00', revised: details.revised_pf_base_limit || 'Rs 0.00' },
// // // //         { item: 'ELIGIBLE FOR PF', previous: details.previous_eligible_for_pf || 'Rs 0.00', revised: details.revised_eligible_for_pf || 'Rs 0.00' },
// // // //         { item: 'MASTER PF BASIC', previous: details.previous_master_pf_basic || 'Rs 0.00', revised: details.revised_master_pf_basic || 'Rs 0.00' },
// // // //         { item: 'FULL TRAVEL ALLOWANCE', previous: details.previous_full_travel_allowance || 'Rs 0.00', revised: details.revised_full_travel_allowance || 'Rs 0.00' },
// // // //         { item: 'LOP', previous: details.lop || 'Rs 0.00', revised: details.revised_lop || 'Rs 0.00' },
// // // //         { item: 'LOP DAYS', previous: details.lop_days || '0', revised: details.revised_lop_days || '0' },
// // // //         { item: 'SUB TOTAL', previous: details.sub_total || 'Rs 0.00', revised: details.revised_sub_total || 'Rs 0.00' },
// // // //         { item: 'TOTAL AMOUNT', previous: details.total_amt || 'Rs 0.00', revised: details.revised_total_amt || 'Rs 0.00' },
// // // //         { item: 'TOTAL DEDUCTIONS', previous: details.total_deductions || 'Rs 0.00', revised: details.revised_total_deductions || 'Rs 0.00' },
// // // //       ]);

// // // //       setEmployeeInfo({
// // // //         firstName: details.firstName || '',
// // // //         designation: details.designation || '',
// // // //         created_date: details.created_date || ''
// // // //       });
// // // //     }
// // // //   }, [salaryDetails]);

// // // //   const handleChange = (index, value) => {
// // // //     const newData = [...salaryData];
// // // //     newData[index].revised = value;
// // // //     setSalaryData(newData);
// // // //   };

// // // //   const handleSave = () => {
// // // //     const updatedSalaryData = {
// // // //       emp_id: salaryDetails[0]?.emp_id,
// // // //       revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC')?.revised || 'Rs 0.00',
// // // //       revised_annual_ctc: salaryData.find(item => item.item === 'ANNUAL CTC')?.revised || 'Rs 0.00',
// // // //       revised_full_basic: salaryData.find(item => item.item === 'FULL BASIC')?.revised || 'Rs 0.00',
// // // //       revised_full_hra: salaryData.find(item => item.item === 'FULL HRA')?.revised || 'Rs 0.00',
// // // //       revised_full_special_allowance: salaryData.find(item => item.item === 'FULL SPECIAL ALLOWANCE')?.revised || 'Rs 0.00',
// // // //       revised_full_other_allowance: salaryData.find(item => item.item === 'FULL OTHER ALLOWANCE')?.revised || 'Rs 0.00',
// // // //       revised_full_meal_allowance: salaryData.find(item => item.item === 'FULL MEAL ALLOWANCE')?.revised || 'Rs 0.00',
// // // //       revised_full_conveyance_allowance: salaryData.find(item => item.item === 'FULL CONVEYANCE ALLOWANCE')?.revised || 'Rs 0.00',
// // // //       revised_full_lta: salaryData.find(item => item.item === 'FULL LTA')?.revised || 'Rs 0.00',
// // // //       revised_full_employer_pf: salaryData.find(item => item.item === 'FULL EMPLOYER PF')?.revised || 'Rs 0.00',
// // // //       revised_epf_excess_contribution: salaryData.find(item => item.item === 'EPF EXCESS CONTRIBUTION')?.revised || 'Rs 0.00',
// // // //       revised_pf_base_limit: salaryData.find(item => item.item === 'PF BASE LIMIT')?.revised || 'Rs 0.00',
// // // //       revised_eligible_for_pf: salaryData.find(item => item.item === 'ELIGIBLE FOR PF')?.revised || 'Rs 0.00',
// // // //       revised_master_pf_basic: salaryData.find(item => item.item === 'MASTER PF BASIC')?.revised || 'Rs 0.00',
// // // //       revised_full_travel_allowance: salaryData.find(item => item.item === 'FULL TRAVEL ALLOWANCE')?.revised || 'Rs 0.00',
// // // //       revised_lop: salaryData.find(item => item.item === 'LOP')?.revised || 'Rs 0.00',
// // // //       revised_lop_days: salaryData.find(item => item.item === 'LOP DAYS')?.revised || '0',
// // // //       revised_sub_total: salaryData.find(item => item.item === 'SUB TOTAL')?.revised || 'Rs 0.00',
// // // //       revised_total_amt: salaryData.find(item => item.item === 'TOTAL AMOUNT')?.revised || 'Rs 0.00',
// // // //       revised_total_deductions: salaryData.find(item => item.item === 'TOTAL DEDUCTIONS')?.revised || 'Rs 0.00',
// // // //     };
    
// // // //     dispatch(saveSalary(updatedSalaryData))
// // // //       .then(response => {
// // // //         if (response && response.payload) {
// // // //           const { success, message, updatedSalary } = response.payload;

// // // //           if (success) {
// // // //             const updatedSalaryDetailsfromBackend = updatedSalary;
            
// // // //             setSalaryData(prevData => prevData.map(item => ({
// // // //               ...item,
// // // //               previous: updatedSalaryDetailsfromBackend[`previous_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.previous,
// // // //               revised: updatedSalaryDetailsfromBackend[`revised_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.revised
// // // //             })));

// // // //             setEmployeeInfo({
// // // //               firstName: updatedSalaryDetailsfromBackend.firstName || employeeInfo.firstName,
// // // //               designation: updatedSalaryDetailsfromBackend.designation || employeeInfo.designation,
// // // //               created_date: updatedSalaryDetailsfromBackend.created_date || employeeInfo.created_date
// // // //             });

// // // //             toast.success(message || 'Salary details updated successfully!');
// // // //             setIsEditable(false);
// // // //             setIsUpdated(true);
// // // //           } else {
// // // //             toast.error('Failed to update salary details!');
// // // //           }
// // // //         } else {
// // // //           toast.error('Failed to update salary details: No response payload!');
// // // //         }
// // // //       })
// // // //       .catch(err => {
// // // //         console.error(err);
// // // //         toast.error('Failed to update salary details!');
// // // //       });
// // // //   };
  
// // // //   if (loading) return <div>Loading...</div>;
// // // //   if (error) return <div>Error: {error}</div>;

// // // //   return (
// // // //     <div className="container">
// // // //       <ToastContainer />
// // // //       <div className="profile-header">
// // // //         <div className="profile-info">
// // // //           <div className="profile-name">Name: {employeeInfo.firstName}</div>
// // // //         </div>
// // // //       </div>
// // // //       <div className="info-grid">
// // // //         <div>
// // // //           <div className="info-title">Create Date: {new Date(employeeInfo.created_date).toLocaleDateString()}</div>
// // // //           <div className="info-title">Designation: {employeeInfo.designation}</div>
// // // //         </div>
// // // //       </div>
  
// // // //       <div className="header">
// // // //         {!isUpdated && (
// // // //           <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
// // // //         )}
// // // //         <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
// // // //         {isEditable && <button className="save-button" onClick={handleSave}>Save Changes</button>}
// // // //       </div>
// // // //       <table className="salary-table">
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Salary Item</th>
// // // //             <th>Previous Salary</th>
// // // //             <th>Revised Salary</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {salaryData.map((row, index) => (
// // // //             <tr key={index}>
// // // //               <td>{row.item}</td>
// // // //               <td>{row.previous}</td>
// // // //               <td>
// // // //                 {row.item === 'MONTHLY CTC' && isEditable ? (
// // // //                   <input
// // // //                     type="text"
// // // //                     value={row.revised}
// // // //                     onChange={(e) => handleChange(index, e.target.value)}
// // // //                   />
// // // //                 ) : (
// // // //                   row.revised
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Updatesalary;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveSalary } from '../../../../../../Redux/Slices/SalarySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Updatesalary/Updatesalary.css';
import SalaryDetailsPopup from './SalaryDetailsPopup';

// Popup component for LOP and Travel Allowance
const Popup = ({ title, data, onChange, onSave, onClose }) => (
  <div className="popup">
    <h3>{title}</h3>
    <table>
      <tbody>
        <tr>
          <td>Days:</td>
          <td><input name="days" type="text" value={data.days} onChange={onChange} /></td>
        </tr>
        <tr>
          <td>Amount Per Day:</td>
          <td><input name="amountPerDay" type="text" value={data.amountPerDay} onChange={onChange} /></td>
        </tr>
        <tr>
          <td>Total Amount:</td>
          <td>{data.totalAmount.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <button onClick={onSave}>Save</button>
    <button onClick={onClose}>Close</button>
  </div>
);

// Main Updatesalary component
const Updatesalary = () => {
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

  const [isReferralPopupOpen, setIsReferralPopupOpen] = useState(false);
  const [lopPopupOpen, setLopPopupOpen] = useState(false);
  const [travelPopupOpen, setTravelPopupOpen] = useState(false);

  const [lopData, setLopData] = useState({ days: '', amountPerDay: '', totalAmount: 0 });
  const [travelData, setTravelData] = useState({ days: '', amountPerDay: '', totalAmount: 0 });

  const [updatedDetails, setUpdatedDetails] = useState({});
  const salaryItems = [
    'FULL BASIC', 'FULL HRA', 'FULL SPECIAL ALLOWANCE', 'FULL OTHER ALLOWANCE',
    'ANNUAL CTC', 'MONTHLY CTC', 'FULL EMPLOYER PF',
    'FULL TRAVEL ALLOWANCE', 'LOP', 'SUB TOTAL', 'TOTAL Amt', 'TOTAL DEDUCTIONS'
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

  const handleSave = () => {
    const emp_id = salaryDetails[0]?.emp_id;

    if (!emp_id) {
      toast.error("Employee ID is missing");
      return;
    }

    const updatedData = {
      emp_id,
      revised_monthly_ctc: salaryData.find(item => item.item === 'MONTHLY CTC')?.current || '0.00',
      lop: salaryData.find(item => item.item === 'LOP')?.current || '0.00',
      full_travel_allowance: salaryData.find(item => item.item === 'FULL TRAVEL ALLOWANCE')?.current || '0.00',
    };

    dispatch(saveSalary(updatedData))
      .then((response) => {
        if (response.payload && response.payload.success) {
          toast.success("Salary updated successfully");
          setIsUpdated(true);
          setIsEditable(false);

          const { updatedSalary } = response.payload;
          setUpdatedDetails(updatedSalary);

          setSalaryData(salaryItems.map((item) => {
            const lowercaseItem = item.toLowerCase().replace(/ /g, '_');
            return {
              item,
              current: updatedSalary[`revised_${lowercaseItem}`] || updatedSalary[lowercaseItem] || '0.00'
            };
          }));
          setEmployeeInfo({
            firstName: updatedSalary.firstName || '',
            designation: updatedSalary.designation || '',
            created_date: updatedSalary.created_date || ''
          });
        } else {
          toast.error(response.payload.message || "Failed to update salary");
        }
      })
      .catch((error) => {
        console.error("Error updating salary:", error);
        toast.error("Error updating salary");
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const calculateTotalAmount = (data) => (
    data.days && data.amountPerDay ? parseFloat(data.days) * parseFloat(data.amountPerDay) : 0
  );

  const handlePopupChange = (setPopupData) => (e) => {
    const { name, value } = e.target;
    setPopupData((prevData) => ({
      ...prevData,
      [name]: value,
      totalAmount: calculateTotalAmount({ ...prevData, [name]: value })
    }));
  };

  const handlePopupSave = (popupData, setPopupOpen, fieldName) => {
    const newData = [...salaryData];
    const index = newData.findIndex((item) => item.item === fieldName);
    if (index !== -1) {
      newData[index].current = popupData.totalAmount.toFixed(2);
      setSalaryData(newData);
    }
    setPopupOpen(false);
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

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
        {!isUpdated ? (
          <button className="btn" onClick={() => setIsEditable(true)}>Edit Salary</button>
        ) : (
          <div>
            <button className="btn back-button" onClick={handleBack}>Back</button>
            <button 
              className="btn referral-button"
              onClick={() => setIsReferralPopupOpen(true)}
            >
              Referral calculations
            </button>
          </div>
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
              <td>{row.item}</td>
              <td>
                {(isEditable && (row.item === 'MONTHLY CTC' || row.item === 'LOP' || row.item === 'FULL TRAVEL ALLOWANCE')) ? (
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
                {(row.item === 'LOP' || row.item === 'FULL TRAVEL ALLOWANCE') && (
                  <span
                    className="pencil-icon"
                    onClick={() => row.item === 'LOP' ? setLopPopupOpen(true) : setTravelPopupOpen(true)}
                  >
                    ✏️
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {isEditable && (
        <button className="btn save-button" onClick={handleSave}>Save Changes</button>
      )}

      {/* Referral Calculations Popup */}
      {isReferralPopupOpen && (
        <SalaryDetailsPopup
          onClose={() => setIsReferralPopupOpen(false)}
          data={salaryData}
        message={'calculations for referal'}
        />
      )}

      {/* LOP Popup */}
      {lopPopupOpen && (
        <Popup
          title="LOP Calculation"
          data={lopData}
          onChange={handlePopupChange(setLopData)}
          onSave={() => handlePopupSave(lopData, setLopPopupOpen, 'LOP')}
          onClose={() => setLopPopupOpen(false)}
        />
      )}

      {/* Travel Allowance Popup */}
      {travelPopupOpen && (
        <Popup
          title="Travel Allowance Calculation"
          data={travelData}
          onChange={handlePopupChange(setTravelData)}
          onSave={() => handlePopupSave(travelData, setTravelPopupOpen, 'FULL TRAVEL ALLOWANCE')}
          onClose={() => setTravelPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default Updatesalary;
