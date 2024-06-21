import React, { useState } from "react";
import "./LeaveMetrics.css";
import { Button } from "react-bootstrap";

const LeaveMetrics = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    designation: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    const { employeeId, employeeName, designation, leaveType, startDate, endDate, reason } = formData;
    if (!employeeId || !employeeName || !designation || !leaveType || !startDate || !endDate || !reason) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data to send
    const dataToSend = { ...formData };

    // Send data to backend
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="containerStyle1">
      <div className="cont1">
        <form onSubmit={handleSubmit}>
          <div className="form-header1">
            <h1>Leave Form</h1>
          </div>

          <div className="row">
            <div className="col-half">
              <div className="input-box">
                <label>Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label>Leave Type</label>
                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="earned">Earned Leave</option>
                  <option value="sick">Sick Leave</option>
                  <option value="withoutPay">Leave without Pay</option>
                  <option value="maternity">Maternity Leave</option>
                  <option value="paternity">Paternity Leave</option>
                  <option value="compOff">Compensatory Off</option>
                  <option value="halfDay">Half Day</option>
                  <option value="paidHoliday">Paid Holiday</option>
                  <option value="workFromHome">Work From Home</option>
                </select>
              </div>

              <div className="input-box">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-half">
              <div className="input-box">
                <label>Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-box">
            <label>Reason for Leave</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <Button type="submit" className="hr-add-button1">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LeaveMetrics;
