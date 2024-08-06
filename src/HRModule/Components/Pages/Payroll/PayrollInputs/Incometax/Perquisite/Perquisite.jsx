import React from 'react';
import './Perquisite.css'
 
const Perquisite = () => {
  return (
    <div className="container">
      <div className="table-container">
        <table className="perquisite-table">
          <thead>
            <tr>
              <th className="component-header">Component</th>
              <th className="total-header">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VEHICLE PERQUISITE</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>HOUSE PERQUISITE</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>ASSETS IN RESIDENCE</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>LOAN PERQUISITE</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>EMPLOYER PF PERQUISITE</td>
              <td>Rs 0.00</td>
            </tr>
          </tbody>
        </table>
        <div className="total-perquisite">Total Perquisite : Rs 0.00</div>
      </div>
    </div>
  );
};
 
export default Perquisite;