
// export default SuccessPopup;
import React from 'react';
import '../Updatesalary/SalaryDetailsPopup.css';

const PT = "PT[Professional Tax] = it will depends on Gross if Gross > 25k PT will apply";
const PF = "12% on Basic salary";
const EPF = "3.67% of Basic(15000)";
const EPS = "8.33% of Basic(15000)";
const ESI_EE = "3.25% of Gross";
const ESI_ER = "0.75% of Gross";
const LOP = "No. of LOP Days * salary per Day";
const TRAVEL_ALLOWANCE = "No. of Working Days * Fixed Travel Amount per day as per company standards";

const SuccessPopup = ({ message, onClose }) => (
  <div className="popup">
    <h3>{message}</h3>
    <table className="table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PT</td>
          <td>{PT}</td>
        </tr>
        <tr>
          <td>PF</td>
          <td>{PF}</td>
        </tr>
        <tr>
          <td>EPF</td>
          <td>{EPF}</td>
        </tr>
        <tr>
          <td>EPS</td>
          <td>{EPS}</td>
        </tr>
        <tr>
          <td>ESI (EE)</td>
          <td>{ESI_EE}</td>
        </tr>
        <tr>
          <td>ESI (ER)</td>
          <td>{ESI_ER}</td>
        </tr>
        <tr>
          <td>LOP</td>
          <td>{LOP}</td>
        </tr>
        <tr>
          <td>Travel Allowance</td>
          <td>{TRAVEL_ALLOWANCE}</td>
        </tr>
      </tbody>
    </table>
    <button onClick={onClose}>Close</button>
  </div>
);

export default SuccessPopup;
