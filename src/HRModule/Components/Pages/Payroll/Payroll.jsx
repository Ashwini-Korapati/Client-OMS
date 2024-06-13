import React from 'react';
import '../Payroll/Payroll.css'

const EmployeeForm = () => {
  return (
    <div className="employee-form">
      <div className="employee-info">
        <div className="employee-photo">
          {/* Placeholder for employee photo */}
        </div>
        <div className="employee-details">
          <h2>Employee Name</h2>
          <p>Job Title</p>
        </div>
      </div>
      <div className="form-section">
        <h3>Payroll</h3>
        <div className="form-row">
          <label>
            Salary
            <input type="text" name="salary" />
          </label>
          <label>
            Bonuses
            <input type="text" name="bonuses" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Deductions
            <input type="text" name="deductions" />
          </label>
        </div>
        <button className="save-button">Save</button>
      </div>
      <div className="form-section">
        <h3>Benefits</h3>
        <div className="form-row">
          <label>
            Health Insurance
            <input type="text" name="healthInsurance" />
          </label>
          <label>
            Retirement Plans
            <input type="text" name="retirementPlans" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Other Benefits
            <input type="text" name="otherBenefits" />
          </label>
        </div>
        <button className="save-button">Save</button>
      </div>
      <div className="form-section">
        <h3>Reports</h3>
        <div className="payroll-buttons">
          <button className="report-button">Payroll Reports</button>
          <button className="report-button">Benefits Reports</button>
          <button className="report-button">Tax Reports</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
