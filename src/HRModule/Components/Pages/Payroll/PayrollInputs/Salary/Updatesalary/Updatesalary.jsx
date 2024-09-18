

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
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    designation: '',
    created_date: ''
  });

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
        { item: 'FULL TRAVEL ALLOWANCE', previous: details.previous_full_travel_allowance || 'Rs 0.00', revised: details.revised_full_travel_allowance || 'Rs 0.00' },
        { item: 'LOP', previous: details.lop || 'Rs 0.00', revised: details.revised_lop || 'Rs 0.00' },
        { item: 'LOP DAYS', previous: details.lop_days || '0', revised: details.revised_lop_days || '0' },
        { item: 'SUB TOTAL', previous: details.sub_total || 'Rs 0.00', revised: details.revised_sub_total || 'Rs 0.00' },
        { item: 'TOTAL AMOUNT', previous: details.total_amt || 'Rs 0.00', revised: details.revised_total_amt || 'Rs 0.00' },
        { item: 'TOTAL DEDUCTIONS', previous: details.total_deductions || 'Rs 0.00', revised: details.revised_total_deductions || 'Rs 0.00' },
      ]);

      setEmployeeInfo({
        firstName: details.firstName || '',
        designation: details.designation || '',
        created_date: details.created_date || ''
      });
    }
  }, [salaryDetails]);

  const handleChange = (index, value) => {
    const newData = [...salaryData];
    newData[index].revised = value;
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
      revised_full_travel_allowance: salaryData.find(item => item.item === 'FULL TRAVEL ALLOWANCE')?.revised || 'Rs 0.00',
      revised_lop: salaryData.find(item => item.item === 'LOP')?.revised || 'Rs 0.00',
      revised_lop_days: salaryData.find(item => item.item === 'LOP DAYS')?.revised || '0',
      revised_sub_total: salaryData.find(item => item.item === 'SUB TOTAL')?.revised || 'Rs 0.00',
      revised_total_amt: salaryData.find(item => item.item === 'TOTAL AMOUNT')?.revised || 'Rs 0.00',
      revised_total_deductions: salaryData.find(item => item.item === 'TOTAL DEDUCTIONS')?.revised || 'Rs 0.00',
    };
    
    dispatch(saveSalary(updatedSalaryData))
      .then(response => {
        if (response && response.payload) {
          const { success, message, updatedSalary } = response.payload;

          if (success) {
            const updatedSalaryDetailsfromBackend = updatedSalary;
            
            setSalaryData(prevData => prevData.map(item => ({
              ...item,
              previous: updatedSalaryDetailsfromBackend[`previous_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.previous,
              revised: updatedSalaryDetailsfromBackend[`revised_${item.item.toLowerCase().replace(/ /g, '_')}`] || item.revised
            })));

            setEmployeeInfo({
              firstName: updatedSalaryDetailsfromBackend.firstName || employeeInfo.firstName,
              designation: updatedSalaryDetailsfromBackend.designation || employeeInfo.designation,
              created_date: updatedSalaryDetailsfromBackend.created_date || employeeInfo.created_date
            });

            toast.success(message || 'Salary details updated successfully!');
            setIsEditable(false);
            setIsUpdated(true);
          } else {
            toast.error('Failed to update salary details!');
          }
        } else {
          toast.error('Failed to update salary details: No response payload!');
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to update salary details!');
      });
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
                    onChange={(e) => handleChange(index, e.target.value)}
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