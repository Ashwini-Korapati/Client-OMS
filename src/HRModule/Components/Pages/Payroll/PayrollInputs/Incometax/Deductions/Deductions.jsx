import React from "react";
import "./Deductions.css";
import { MdDelete } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
 
 
 
function Deductions() {
  return (
    <div className="deductions-container">
      <div className="dropdown-container">
        <label>Select Deduction Type:</label>
        <select className="dropdown-option">
          <option value="section80c">Section 80C</option>
          <option value="section81d">section 81D</option>
          <option value="section82e">section 82E</option>
        </select>
      </div>
      <div className="table-container2">
        <table className="tax-table2">
          <thead>
            <tr>
              <th>Narration</th>
              <th>Section</th>
              <th>Max Limit</th>
              <th>Gross</th>
              <th>Qualifying</th>
              <th>Deductible</th>
              <th>Proof</th>
              <th>Remarks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PF</td>
              <td>80C</td>
              <td>Rs.1,50,000.00</td>
              <td>Rs.21,600.00</td>
              <td>Rs.0.00</td>
              <td>Rs.0.00</td>
              <td>Rs.0.00</td>
              <td>Rs.0.00</td>
              <td className="icon-cell">
                <MdDelete className="icon" />
                <IoMdRefresh className="icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Deductions;