import React from 'react'
import './Previousemployer.css'
 
function Previousemployer() {
  return (
    <div>
         <div className="table-container">
        <table className="tax-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Income After Exception</th>
              <th>Professional Tax</th>
              <th>PF</th>
              <th>Employer NPS</th>
              <th>Total Tax</th>
              <th>Income Tax</th>
              <th>Surcharge</th>
              <th>Cess</th>
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
            </tr>
            </tbody>
          </table>
          </div>
    </div>
  );
};
 
export default Previousemployer