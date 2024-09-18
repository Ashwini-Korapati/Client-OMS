import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLopData } from '../../../../../../Redux/Slices/lopSlice';
import './AddLOP.css';

import { CiCirclePlus } from 'react-icons/ci';
import { Form, Select } from 'antd';
 
const AddLOP = ({ onClose }) => {
  const dispatch = useDispatch();
 
  const employees1 = useSelector(state => state.employees.employees.employees);
  console.log(employees1)

  const [emp_id, setEmployee] = useState('');
  const [lop_days, setLopDays] = useState('');
  const [revised_monthly_ctc, setMonthlyCTC] = useState('');
  const [remarks, setRemarks] = useState('');
  const [showSearchCC, setShowSearchCC] = useState(false);
 

  const handleSave = () => {
    if (!emp_id) {
      alert("Please select an employee before saving.");
      return;
    }
 
    dispatch(addLopData({ emp_id, lop_days, revised_monthly_ctc, remarks }))
      .unwrap()
      .then(() => {
        onClose(); 
      })
      .catch((error) => {
        console.error('Failed to save LOP data:', error);
      });
  };
 
 
  const toggleSearchCC = () => {
    setShowSearchCC(!showSearchCC);
  };
 
  return (
    <div className="add-lop-popup">
      <div className="form">
        <div className="cc-row">
          <CiCirclePlus className="plus-icon" onClick={toggleSearchCC} />
          <span>Select Employee</span>
        </div>
        {showSearchCC && (
          <Form.Item
            name="employee"
            rules={[{ required: true, message: "Please select an employee!" }]}
          >
            <Select
  value={emp_id}
  onChange={(value) => setEmployee(value)}
  style={{ width: 300 }}
>
  {employees1.length > 0 ? (
    employees1.map((employee) => (
      <Select.Option key={employee.emp_id} value={employee.emp_id}>
        {employee.firstName} {employee.lastName}
      </Select.Option>
    ))
  ) : (
    <Select.Option disabled>No employees found</Select.Option>
  )}
</Select>
 
          </Form.Item>
        )}
 
        <div className="form-group">
          <label>LOP Days</label>
          <input
            type="number"
            value={lop_days}
            onChange={(e) => setLopDays(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>MONTHLY CTC</label>
          <input
            type="number"
            value={revised_monthly_ctc}
            onChange={(e) => setMonthlyCTC(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Remarks</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default AddLOP;