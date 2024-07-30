import React from "react";
import { NavLink } from "react-router-dom";
import "./Income.css"
 
const Income = () => {
  return (
    <div className="income-tax-form">
      <div className="page-header">
        <h1>INCOME TAX - Jun 2024</h1>
      </div>
      <div className="user-info">
        <div className="user-details">
          <p className="user-name">DEMO</p>
          <p className="user-id">#demo01</p>
        </div>
     
      <div className="user-meta">
        <p>JOIN DATE: 01 Feb 2024</p>
        <p>DATE OF BIRTH: 25 Feb 1991</p>
        <p>GENDER: Female</p>
        <p>LOCATION: Bangalore</p>
        <p>INCOME TAX PROCESSED ON: Today at 5:54 PM</p>
        <p>TAX REGIME: NEW TAX REGIME</p>
      </div>
      </div>
 
 
      <div className="table-container">
        <table className="tax-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Total</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BASIC</td>
              <td>3,90,000.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
              <td>32,500.00</td>
            </tr>
 
            <tr>
              <td>HRA</td>
              <td>1,56,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
              <td>13,000.00</td>
            </tr>
 
            <tr>
              <td>SPECIAL ALLOWANCE</td>
              <td>78,000.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
              <td>6,500.00</td>
            </tr>
 
            <tr>
              <td>OTHER ALLOWANCE</td>
              <td>1,34,400.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
              <td>11,200.00</td>
            </tr>
 
            <tr>
              <td>PF</td>
              <td>21,600.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
              <td>1,800.00</td>
            </tr>
 
            <tr>
              <td>PROF TAX</td>
              <td>2,400.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
              <td>200.00</td>
            </tr>
 
            <tr>
              <td>INCOME TAX</td>
              <td>4,478.00</td>
              <td>2,239.00</td>
              <td>2,239.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
            </tr>
 
            <tr>
              <td>RAW TAX MONTHLY</td>
              <td>4,306.00</td>
              <td>2,153.00</td>
              <td>2,153.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
            </tr>
 
            <tr>
              <td>CESS MONTHLY</td>
              <td>172.00</td>
              <td>86.00</td>
              <td>86.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
              <td>00.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="summary">
        <span>Total Annual Salary: Rs 7,58,400.00</span>
        <span>Total Ad-hoc Salary: Rs 0.00</span>
        <span>Total Salary: Rs 7,58,400.00</span>
      </div>
      <div className="actions">
        <NavLink to="/hr-dashboard/salary">
        <button className="preview">Back To Salary</button>
        </NavLink>
        <button className="preview">Preview</button>
        <button className="preview">Download</button>
        <button className="preview">Recalculate</button>
      </div>
    </div>
  );
};
 
export default Income;
 
