import React from 'react';
import './MyApprovers.css';

const MyApprovers = () => {
  return (
    <div className="my-approvers-container">
        <h2 className='approvers-mainheading'>My Approvers</h2>
      <div className="my-approvers-section">
        <h2>Listed below are the current Timesheet approvers</h2>
        <table className="my-approvers-table">
          <thead>
            <tr>
              <th>Approver Type</th>
              <th>Project ID</th>
              <th>Project Description</th>
              <th>Approver ID</th>
              <th>Approver Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timesheet</td>
              <td>1000420159</td>
              <td>YYYYYY</td>
              <td>193595</td>
              <td>XXXXXXXXXX</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="my-approvers-section">
        <h2>Listed below is current Leave approver</h2>
        <table className="my-approvers-table">
          <thead>
            <tr>
              <th>Approver Type</th>
              <th>Approver ID</th>
              <th>Approver Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leave/Vacation</td>
              <td>535386</td>
              <td>XXXXXXXXX</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-approvers-section">
        <h2>Listed below are the approvers for previous assignments</h2>
        <table className="my-approvers-table">
          <thead>
            <tr>
              <th>Approver Type</th>
              <th>Project ID</th>
              <th>Project Description</th>
              <th>Approver ID</th>
              <th>Approver Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timesheet</td>
              <td>1000024498</td>
              <td>YYYYYYYY</td>
              <td>560923</td>
              <td>XXXXXXXX</td>
            </tr>
            <tr>
              <td>Timesheet</td>
              <td>1000022895</td>
              <td>YYYYYYYYYYY</td>
              <td>155240</td>
              <td>XXXXXXXXXXXXXX</td>
            </tr>
            <tr>
              <td>Timesheet</td>
              <td>1000022895</td>
              <td>YYYYYYY</td>
              <td>359770</td>
              <td>XXXXXXXX</td>
            </tr>
            <tr>
              <td>Timesheet</td>
              <td>1000022902</td>
              <td>YYYYYYYYY</td>
              <td>280024</td>
              <td>XXXXXXX</td>
            </tr>
            <tr>
              <td>Timesheet</td>
              <td>1000028305</td>
              <td>YYYYYYYY</td>
              <td>280024</td>
              <td>XXXXXX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApprovers;
