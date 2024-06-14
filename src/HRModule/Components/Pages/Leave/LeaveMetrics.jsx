import React from "react";
import "./LeaveMetrics.css";
import { Button } from "react-bootstrap";

const LeaveMetrics = () => {

  return (
    <div className="containerStyle1">
      <div className="cont1">
        <form>
          <div className="form-header1">
            <h1>Leave Form</h1>
          </div>

          <div className="row">
            <div className="col-half">
              <div className="input-box">
                <label>Employee ID</label>
                <input type="text" required />
              </div>

              <div className="input-box">
                <label>Leave Type</label>
                <select required>
                  <option value="">Select Leave Type</option>
                  <option value="sick">Earned leave </option>
                  <option value="casual">Sick leave</option>
                  <option value="annual">Leave without Pay</option>
                  <option value="maternity">Maternity Leave</option>
                  <option value="paternity">Paternity Leave</option>
                  <option value="paternity">Compensatory Off</option>
                  <option value="paternity">Half Day</option>
                  <option value="paternity">Paid Holiday</option>
                  <option value="paternity">Work From Home</option>
                </select>
              </div>

              <div className="input-box">
                <label>Start Date</label>
                <input type="date" required />
              </div>
            </div>

            <div className="col-half">
              <div className="input-box">
                <label>Employee Name</label>
                <input type="text" required />
              </div>

              <div className="input-box">
                <label>Designation</label>
                <input type="text" required />
              </div>

              <div className="input-box">
                <label>End Date</label>
                <input type="date" required />
              </div>
            </div>
          </div>

          <div className="input-box">
            <label>Reason for Leave</label>
            <textarea rows="4" required></textarea>
          </div>

          <Button className="hr-add-button1">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LeaveMetrics;