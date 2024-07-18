import React, { useState } from "react";
import "../Payroll/Payroll.css";
import avatar from '../../../Assets/avatar.png';


const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    salary: "",
    bonuses: "",
    deductions: "",
    healthInsurance: "",
    retirementPlans: "",
    otherBenefits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("YOUR_BACKEND_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="employee-form">
      <div className="employee-info">
        <div className="employee-photo">
        <img className='profile-logo' src={avatar} alt="Profile" />
        </div>
        <div className="employee-details">
          <h2>Employee Name</h2>
          <p>Job Title</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Payroll</h3>
          <div className="form-row">
            <label>
              Salary
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </label>
            <label>
              Bonuses
              <input
                type="text"
                name="bonuses"
                value={formData.bonuses}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Deductions
              <input
                type="text"
                name="deductions"
                value={formData.deductions}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
        <div className="form-section">
          <h3>Benefits</h3>
          <div className="form-row">
            <label>
              Health Insurance
              <input
                type="text"
                name="healthInsurance"
                value={formData.healthInsurance}
                onChange={handleChange}
              />
            </label>
            <label>
              Retirement Plans
              <input
                type="text"
                name="retirementPlans"
                value={formData.retirementPlans}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Other Benefits
              <input
                type="text"
                name="otherBenefits"
                value={formData.otherBenefits}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
      <div className="form-section">
        <h3>Reports</h3>
        <div className="payroll-save-buttons">
          <button className="report-save-button">Payroll Reports</button>
          <button className="report-save-button">Benefits Reports</button>
          <button className="report-save-button">Tax Reports</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
