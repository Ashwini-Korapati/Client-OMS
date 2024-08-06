import React from 'react';
import './Result.css';
 
const Result = () => {
  return (
    <div className="tax-details-container">
      <div className="total-income">
        Total Income: Rs 7,08,400.00
      </div>
      <div className="tax-to-be-paid">
        <h2>Total Tax to be Paid</h2>
        <div className="tax-inputs">
          <div className="tax-input">
            <label>Income Tax</label>
            <input type="text" value="8400" readOnly />
          </div>
          <div className="tax-input">
            <label>Surcharge</label>
            <input type="text" value="0" readOnly />
          </div>
          <div className="tax-input">
            <label>Education Cess</label>
            <input type="text" value="336" readOnly />
          </div>
          <div className="tax-input">
            <label>Total</label>
            <input type="text" value="8736" readOnly />
          </div>
        </div>
        <table className="tax-table">
          <thead>
            <tr>
              <th>Paid Till Date</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr>
            <th></th>
              <th>Income Tax</th>
              <th>Surcharge</th>
              <th>Edu. Cess</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deduction Through Payroll</td>
              <td>Rs 1,400.00</td>
              <td>Rs 0.00</td>
              <td>Rs 56.00</td>
              <td>Rs 1,456.00</td>
            </tr>
            <tr>
              <td>Direct TDS</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>Previous Employment</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
              <td>Rs 0.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rs 1,400.00</td>
              <td>Rs 0.00</td>
              <td>Rs 56.00</td>
              <td>Rs 1,456.00</td>
            </tr>
            <tr>
              <td>Annual Tax Balance</td>
              <td>Rs 7,000.00</td>
              <td>Rs 0.00</td>
              <td>Rs 280.00</td>
              <td>Rs 7,280.00</td>
            </tr>
            <tr>
              <td>Monthly Tax to be Paid</td>
              <td>Rs 700.00</td>
              <td>Rs 0.00</td>
              <td>Rs 28.00</td>
              <td>Rs 728.00</td>
            </tr>
          </tbody>
        </table>
        <div className="remaining-months">
          Remaining Months: 9
        </div>
      </div>
      <button className="verify-button">Verify</button>
    </div>
  );
};
 
export default Result;