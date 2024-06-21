import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Viewemployee/Viewemployee.css'
import { FaEdit, FaSave, FaTrash, FaFileAlt, FaFilePdf, FaTimes } from 'react-icons/fa';

const Table = () => {
  const [employees, setEmployees] = useState([
    { id: '0022', name: 'Hannah Baker', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'Backend Developer', reportsTo: 'Hannah Baker', accountNo: '2345678901234567', ifsc: 'SBIN00023' },
    { id: '0014', name: 'Alice Johnson', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'Software Engineer', reportsTo: 'Alice Johnson', accountNo: '3456789012345678', ifsc: 'SBIN00023' },
    { id: '0016', name: 'Bob Smith', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'Project Manager', reportsTo: 'Bob Smith', accountNo: '4567890123456789', ifsc: 'SBIN00023' },
    { id: '0017', name: 'Charlie Brown', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'UX/UI Designer', reportsTo: 'Charlie Brown', accountNo: '5678901234567890', ifsc: 'SBIN00023' },
    { id: '0018', name: 'Diana Prince', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'QA Engineer', reportsTo: 'Diana Prince', accountNo: '6789012345678901', ifsc: 'SBIN00023' },
    { id: '0019', name: 'Ethan Hunt', contact: '8544788221', email: 'alicejohnso@gmail.com', role: 'DevOps Engineer', reportsTo: 'Ethan Hunt', accountNo: '7890123456789012', ifsc: 'SBIN00023' }
  ]);

  const [editModeId, setEditModeId] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({
    id: '',
    name: '',
    contact: '',
    email: '',
    role: '',
    reportsTo: '',
    accountNo: '',
    ifsc: ''
  });

  const [visibleDoc, setVisibleDoc] = useState(null); // State to track visible document

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (employee) => {
    setEditModeId(employee.id);
    setEditedEmployee({ ...employee });
  };

  const handleSave = () => {
    const updatedEmployees = employees.map(emp =>
      emp.id === editedEmployee.id ? { ...editedEmployee } : emp
    );
    setEmployees(updatedEmployees);
    setEditModeId(null);
    setEditedEmployee({
      id: '',
      name: '',
      contact: '',
      email: '',
      role: '',
      reportsTo: '',
      accountNo: '',
      ifsc: ''
    });
  };

  const handleCancel = () => {
    setEditModeId(null);
    setEditedEmployee({
      id: '',
      name: '',
      contact: '',
      email: '',
      role: '',
      reportsTo: '',
      accountNo: '',
      ifsc: ''
    });
  };

  const hideLastFourDigits = (accountNo) => {
    const visibleDigits = accountNo.substring(0, accountNo.length - 4);
    const hiddenDigits = '****';
    return `${visibleDigits}${hiddenDigits}`;
  };

  const viewDocument = (type, id) => {
    if (visibleDoc && visibleDoc.id === id && visibleDoc.type === type) {
      setVisibleDoc(null); // Hide document if it's already visible
    } else {
      setVisibleDoc({ id, type }); // Show document
    }
  };

  const handleChange = (e, field) => {
    setEditedEmployee({
      ...editedEmployee,
      [field]: e.target.value
    });
  };

  return (
    <div className="table-container">
      <button className="export-btn">Export list to CSV</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Role</th>
            <th>Report's To</th>
            <th>Aadhar</th>
            <th>Graduation Certificate</th>
            <th>Account No</th>
            <th>IFSC Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                {editModeId === employee.id ? (
                  <input type="text" value={editedEmployee.name} onChange={(e) => handleChange(e, 'name')} />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editModeId === employee.id ? (
                  <input type="text" value={editedEmployee.contact} onChange={(e) => handleChange(e, 'contact')} />
                ) : (
                  employee.contact
                )}
              </td>
              <td>{employee.email}</td>
              <td>
                {editModeId === employee.id ? (
                  <input type="text" value={editedEmployee.role} onChange={(e) => handleChange(e, 'role')} />
                ) : (
                  employee.role
                )}
              </td>
              <td>
                {editModeId === employee.id ? (
                  <input type="text" value={editedEmployee.reportsTo} onChange={(e) => handleChange(e, 'reportsTo')} />
                ) : (
                  employee.reportsTo
                )}
              </td>
              <td>
                <button className="action-btn" onClick={() => viewDocument('aadhar', employee.id)}>
                  <FaFileAlt style={{ marginRight: '5px' }} /> View Doc
                </button>
                {visibleDoc && visibleDoc.id === employee.id && visibleDoc.type === 'aadhar' && (
                  <div className="document">
                    <p>Static Aadhar Document Content for {employee.name}</p>
                  </div>
                )}
              </td>
              <td>
                <button className="action-btn" onClick={() => viewDocument('graduation', employee.id)}>
                  <FaFilePdf style={{ marginRight: '5px' }} /> View Doc
                </button>
                {visibleDoc && visibleDoc.id === employee.id && visibleDoc.type === 'graduation' && (
                  <div className="document">
                    <p>Static Graduation Certificate Content for {employee.name}</p>
                  </div>
                )}
              </td>
              <td>{hideLastFourDigits(employee.accountNo)}</td>
              <td>{employee.ifsc}</td>
              <td>
                {editModeId === employee.id ? (
                  <>
                    <button className="action-btn-save" onClick={handleSave}>
                      <FaSave style={{ marginRight: '5px' }} /> Save
                    </button>
                    <button className="action-btn-cancel" onClick={handleCancel}>
                      <FaTimes style={{ marginRight: '5px' }} /> Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="action-btn-edit" onClick={() => handleEdit(employee)}>
                      <FaEdit style={{ marginRight: '5px' }} /> Edit
                    </button>
                    <button className="action-btn-delete" onClick={() => handleDelete(employee.id)}>
                      <FaTrash style={{ marginRight: '5px' }} /> Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink to="/hr-dashboard/hr-home" className="emp-back-btn">Back</NavLink>
    </div>
  );
};

export default Table;
