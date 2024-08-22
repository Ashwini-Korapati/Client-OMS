import React from 'react';
import './Finalsettlementmain.css';
import { NavLink } from 'react-router-dom';

const Finalsettlementmain = () => {
  return (
    <div className="final-settlement2">
      <div className="header">
        <h3>Final Settlement</h3>
        <NavLink to='/hr-dashboard/finalsettlementtabs'>
        <button className="settle-employee-btn2">Settle Employee</button>
        </NavLink>
      </div>
      <div className="filters2">
        <label>
          Filter:
          <select>
            <option>June 2024</option>
            <option>July 2024</option>
            <option>August 2024</option>
          </select>
        </label>
        <label>
          Employee:
          <select>
            <option>All</option>
            <option>Particular Employee</option>
          </select>
        </label>
      </div>
      <table className="settlement-table2">
        <thead>
          <tr>
            <th>#</th>
            <th>Payout Month</th>
            <th>Serial No</th>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Leaving Date</th>
            <th>Settlement Date</th>
            <th>Net Pay</th>
            <th>Processed On</th>
            <th>Lock / Unlock</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Finalsettlementmain;
