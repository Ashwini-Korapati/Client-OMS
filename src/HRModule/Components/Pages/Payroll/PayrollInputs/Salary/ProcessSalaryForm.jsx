
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveSalary, processSalary } from '../../../../../Redux/Slices/SalarySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Salary/ProcessSalaryForm.css';
import { Progress } from 'antd'; // Import Ant Design Progress component

const ProcessSalaryForm = () => {
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
  
  const [processing, setProcessing] = useState(false); // New state for processing
  const [progress, setProgress] = useState(0); // New state for progress

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

  const handleProcessSalary = () => {
    const emp_id = salaryDetails[0]?.emp_id;
    if (!emp_id) {
      toast.error("Employee ID is missing");
      return;
    }

    setProcessing(true); // Start processing
    setProgress(0); // Reset progress

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + (100 / 90); // Increment progress
        clearInterval(interval);
        return 100; // Ensure it reaches 100
      });
    }, 1000); // Update every second

    setTimeout(() => {
      // Simulate API call
      dispatch(processSalary({ emp_id, month: new Date().getMonth(), year: new Date().getFullYear() }))
        .then((response) => {
          if (response.payload && response.payload.success) {
            toast.success("Salary processed successfully");
          } else {
            toast.error(response.payload.message || "Failed to process salary");
          }
        })
        .catch((error) => {
          console.error("Error processing salary:", error);
          toast.error("Error processing salary");
        })
        .finally(() => {
          setProcessing(false); // Stop processing
          clearInterval(interval); // Clear the interval
        });
    }, 10000); // Simulate processing time of 20 seconds
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getDisplayName = (item) => {
    switch (item) {
      case 'TOTAL DEDUCTIONS': return 'Total Deductions';
      case 'SUB TOTAL': return 'Sub Total';
      case 'TOTAL AMOUNT': return 'Total Amt';
      default: return item;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-salary-process">
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
          <button className="btn back-button" onClick={handleBack}>Back</button>
        )}
        <button className="btn process-button" onClick={handleProcessSalary} disabled={processing}>Process Salary</button>
      </div>

      {processing && (
        <div className="progress-container">
          <Progress percent={progress} status="active" />
        </div>
      )}

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
        <button className="btn save-button" onClick={handleSave}>Save Salary</button>
      )}
    </div>
  );
};

export default ProcessSalaryForm;
