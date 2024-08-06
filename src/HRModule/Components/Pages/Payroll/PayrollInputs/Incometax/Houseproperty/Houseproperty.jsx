import React, { useState } from 'react';
import './Houseproperty.css';
 
const Houseproperty = () => {
  const [selfOccupiedProperties, setSelfOccupiedProperties] = useState([
    { lenderName: '', lenderPAN: '', eligibleAmount: '', amount: '' }
  ]);
 
  const addLetOutProperty = () => {
   
  };
 
  const handleInputChange = (index, field, value) => {
    const newProperties = [...selfOccupiedProperties];
    newProperties[index][field] = value;
    setSelfOccupiedProperties(newProperties);
  };
 
  return (
    <div className="house-property-income">
      <h2>House Property Income</h2>
     
      <div className="total-income-section">
        <button className="toggle-button">+</button>
        <span>Total Income From House Property</span>
        <input type="number" className='input1' />
      </div>
 
      <div className="property-section">
        <div className='Self-Occupied'>
          <button className="toggle-button">+</button>
          <span>Income from Self-Occupied Property</span>
        </div>
        <table className="property-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Particulars</th>
              <th>Lender's Name</th>
              <th>Lender's PAN</th>
              <th>Eligible Amount</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {selfOccupiedProperties.map((property, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Interest on Housing Loan (Self Occupied)</td>
                <td>
                  <input
                    type="text"
                    value={property.lenderName}
                    placeholder="Name"
                    onChange={(e) => handleInputChange(index, 'lenderName', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={property.lenderPAN}
                    placeholder="PAN"
                    onChange={(e) => handleInputChange(index, 'lenderPAN', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={property.eligibleAmount}
                    placeholder="Eligible Amount"
                    onChange={(e) => handleInputChange(index, 'eligibleAmount', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={property.amount}
                    placeholder="Amount"
                    onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      <div className="property-section">
        <div className='Let-out'>
          <button className="toggle-button">+</button>
          <span>Income from Let-out Property</span>
          <button className="delete-button">Delete</button>
        </div>
      </div>
 
      <div className="add-let-out-property">
        <button className="add-button" onClick={addLetOutProperty}>Add Let-out Property</button>
      </div>
 
      <div className="action-buttons">
        <button className="action-button">Back To Salary</button>
        <button className="action-button">Save</button>
        <button className="action-button">Preview</button>
        <button className="action-button">Download</button>
        <button className="action-button">Recalculate</button>
      </div>
    </div>
  );
};
 
export default Houseproperty;