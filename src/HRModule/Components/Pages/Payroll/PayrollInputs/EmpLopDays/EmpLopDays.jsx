import React, { useState } from 'react';
import '../EmpLopDays/EmpLopDays.css'

const EmpLopdays = () => {
  const [showForm, setShowForm] = useState(false);
  const [lopDaysData, setLopDaysData] = useState([]);
  const [formData, setFormData] = useState({
    employeeNo: '',
    name: '',
    joinDate: '',
    workDays: '',
    lop: '',
    remarks: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLopDaysData((prevData) => [...prevData, formData]);
    setShowForm(false);
    setFormData({
      employeeNo: '',
      name: '',
      joinDate: '',
      workDays: '',
      lop: '',
      remarks: ''
    });
  };

  return (
    <div className="container">
      <h2>The Employee LOP Days Page</h2>
      <button onClick={() => setShowForm(true)}>Add LOP Days</button>
      
      {showForm && (
        <form onSubmit={handleFormSubmit} className="lop-form">
          <div>
            <label>Employee No:</label>
            <input
              type="text"
              name="employeeNo"
              value={formData.employeeNo}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label>Join Date:</label>
            <input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label>Work Days:</label>
            <input
              type="number"
              name="workDays"
              value={formData.workDays}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label>LOP:</label>
            <input
              type="number"
              name="lop"
              value={formData.lop}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <label>Remarks:</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleFormChange}
            ></textarea>
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Employee No</th>
            <th>Name</th>
            <th>Join Date</th>
            <th>Work Days</th>
            <th>LOP</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {lopDaysData.map((data, index) => (
            <tr key={index}>
              <td>{data.employeeNo}</td>
              <td>{data.name}</td>
              <td>{data.joinDate}</td>
              <td>{data.workDays}</td>
              <td>{data.lop}</td>
              <td>{data.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpLopdays;
