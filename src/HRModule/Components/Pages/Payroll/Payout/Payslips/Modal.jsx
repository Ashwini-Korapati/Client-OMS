

import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, employee, onSave }) => {
  const [remarks, setRemarks] = useState(''); // State for remarks

  const handleSave = () => {
    onSave(employee.empNo, remarks); // Save remarks for the selected employee
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h5>Payslip Remarks For</h5>
        <input
          type="text"
          value={employee?.name}
          readOnly
          className="employee-name"
        />
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter remarks here..."
          className="remarks-field"
        />
        <p>Note: For selected employee(s), existing remarks will get updated.</p>
        <div className="modal-actions">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
