import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Updatesalary.css';

const SalaryForm = () => {
  const [salaryData, setSalaryData] = useState([
    { item: 'FULL BASIC', previous: 'Rs 31,667.00', revised: 'Rs 32,500.00', revision: '2.63%' },
    { item: 'FULL HRA', previous: 'Rs 12,667.00', revised: 'Rs 13,000.00', revision: '2.63%' },
    { item: 'FULL SPECIAL ALLOWANCE', previous: 'Rs 6,333.00', revised: 'Rs 6,500.00', revision: '2.64%' },
    { item: 'FULL OTHER ALLOWANCE', previous: 'Rs 10,867.00', revised: 'Rs 11,200.00', revision: '3.06%' },
    { item: 'FULL MEAL ALLOWANCE', previous: 'Rs 0.00', revised: 'Rs 0.00', revision: '0.00%' },
    { item: 'FULL CONVEYANCE ALLOWANCE', previous: 'Rs 0.00', revised: 'Rs 0.00', revision: '0.00%' },
    { item: 'FULL LTA', previous: 'Rs 0.00', revised: 'Rs 0.00', revision: '0.00%' },
    { item: 'ANNUAL CTC', previous: 'Rs 7,60,008.00', revised: 'Rs 7,80,000.00', revision: '2.63%' },
    { item: 'MONTHLY CTC', previous: 'Rs 63,334.00', revised: 'Rs 65,000.00', revision: '2.63%' },
    { item: 'FULL EMPLOYER PF', previous: 'Rs 1,800.00', revised: 'Rs 1,800.00', revision: '0.00%' },
    { item: 'EPF EXCESS CONTRIBUTION', previous: 'Rs 0.00', revised: 'Rs 0.00', revision: '0.00%' },
    { item: 'PF BASE LIMIT', previous: 'Rs 15,000.00', revised: 'Rs 15,000.00', revision: '0.00%' },
    { item: 'ELIGIBLE FOR PF', previous: 'Rs 0.00', revised: 'Rs 0.00', revision: '0.00%' },
    { item: 'MASTER PF BASIC', previous: 'Rs 31,667.00', revised: 'Rs 32,500.00', revision: '2.63%' },
  ]);

  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const months = [
    { month: 'Apr 2024', effectiveDate: '01 Apr 2024' },
    { month: 'Feb 2024', effectiveDate: '01 Feb 2024' }
  ];

  const handleChange = (index, field, value) => {
    const newData = [...salaryData];
    newData[index][field] = value;
    setSalaryData(newData);
  };

  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-name">DEMO</div>
          <div className="profile-id">#demo01</div>
        </div>
      </div>
      <div className="info-grid">
        <div>
          <div className="info-title">Join Date</div>
          <div>01 Feb 2024</div>
        </div>
        <div>
          <div className="info-title">Experience</div>
          <div>0.4 Years</div>
        </div>
      </div>
      <div className="warning">
        ⚠️ Warning: You cannot edit this revision since it is locked.
      </div>
      <div className="months-container">
        {months.map((month, index) => (
          <div key={index} className="month-item">
            <div>{month.month}</div>
            <div>Effective: {month.effectiveDate}</div>
          </div>
        ))}
      </div>
      <div className="header">
        <div className="update-info">Last updated on 30 May 2024 by admin</div>
        <button className="btn" onClick={() => setIsEditable(true)}>Add New Revision</button>
        <button className="back-button" onClick={() => navigate('/hr-dashboard/salary')}>Back</button>
      </div>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Salary Item</th>
            <th>Previous Salary</th>
            <th>Revised Salary</th>
            <th>Revision %</th>
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
              <td>
                {row.item === 'MONTHLY CTC' && isEditable ? (
                  <input
                    type="text"
                    value={row.revision}
                    onChange={(e) => handleChange(index, 'revision', e.target.value)}
                  />
                ) : (
                  row.revision
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryForm;
