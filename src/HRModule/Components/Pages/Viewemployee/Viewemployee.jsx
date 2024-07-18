
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaSave, FaTrash, FaTimes, FaSearch } from 'react-icons/fa';
import { fetchEmployees, setEditModeId, setEditedEmployee, resetEditedEmployee, deleteEmployee, saveEmployee } from '../../../Redux/Slices/ViewempSlice';
import profilePlaceholder from '../../../Assets/hrmimage.png';
import '../Viewemployee/Viewemployee.css';

const Table = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employees.employees);
  const editModeId = useSelector(state => state.employees.editModeId);
  const editedEmployee = useSelector(state => state.employees.editedEmployee);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id)).then(() => {
      toast.success('Employee deleted successfully');
      dispatch(fetchEmployees());
    }).catch(() => {
      toast.error('Failed to delete employee');
    });
  };

  const handleEdit = (employee) => {
    dispatch(setEditModeId(employee.emp_id));
    dispatch(setEditedEmployee(employee));
  };

  const handleSave = () => {
    dispatch(saveEmployee(editedEmployee)).then(() => {
      dispatch(setEditModeId(null));
      toast.success('Employee details updated successfully');
      dispatch(fetchEmployees());
    }).catch(() => {
      toast.error('Failed to update employee details');
    });
  };

  const handleCancel = () => {
    dispatch(setEditModeId(null));
    dispatch(resetEditedEmployee());
  };

  const handleChange = (e, field) => {
    dispatch(setEditedEmployee({
      ...editedEmployee,
      [field]: e.target.value
    }));
  };

  const exportToCSV = () => {
    const csvRows = [];
    const headers = ["emp_id", 'firstName', 'lastName', 'phoneNumber', 'Email', 'Role', 'reporting_to ', 'Date of Joining', 'employeeType', 'Gender', 'State', 'City', 'zipCode'];
    csvRows.push(headers.join(','));

    employees.forEach(employee => {
      const values = [employee.emp_id, employee.firstName, employee.lastName, employee.phoneNumber, employee.email, employee.role, employee.reporting_to, employee.dateOfJoining, employee.employeeType, employee.gender, employee.state, employee.city, employee.zipCode];
      csvRows.push(values.join(','));
    });

    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'employees.csv');
    a.click();
  };

  const filteredEmployees = employees?.filter(employee =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="table-container">
      <div className='heading-design'>
        <NavLink to="/hr-dashboard/hr-home" className="back-btn">Back</NavLink>

        <button className="export-btn" onClick={exportToCSV}>Export list to CSV</button>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className='search-filter'
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th className='extra-wide-column'>First Name</th>
            <th className='extra-wide-column'>Last Name</th>
            <th className='wide-column'>Contact</th>
            <th className='extra-wide-column'>Email</th>
            <th className="extra-wide-column">Role</th>
            <th className="extra-wide-column">Reports To</th>
            <th className="wide-column">Date of Joining</th>
            <th className="extra-wide-column">Employment Type</th>
            <th className="wide-column">Gender</th>
            <th className="wide-column">State</th>
            <th className="wide-column">City</th>
            <th className='wide-column'>Zipcode</th>
            <th className='actions-column'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees && filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.emp_id}>
                <td>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.emp_id}
                    onChange={(e) => handleChange(e, 'emp_id')}
                  />
                ) : employee.emp_id}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.firstName}
                    onChange={(e) => handleChange(e, 'firstName')}
                  />
                ) : employee.firstName}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                  />
                ) : employee.lastName}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.phoneNumber}
                    onChange={(e) => handleChange(e, 'phoneNumber')}
                  />
                ) : employee.phoneNumber}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.email}
                    onChange={(e) => handleChange(e, 'email')}
                  />
                ) : employee.email}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.role}
                    onChange={(e) => handleChange(e, 'role')}
                  />
                ) : employee.role}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.reporting_to}
                    onChange={(e) => handleChange(e, 'reporting_to')}
                  />
                ) : employee.reporting_to}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.dateOfJoining}
                    onChange={(e) => handleChange(e, 'dateOfJoining')}
                  />
                ) : employee.dateOfJoining}</td>
                <td className='extra-wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.employeeType}
                    onChange={(e) => handleChange(e, 'employeeType')}
                  />
                ) : employee.employeeType}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.gender}
                    onChange={(e) => handleChange(e, 'gender')}
                  />
                ) : employee.gender}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.state}
                    onChange={(e) => handleChange(e, 'state')}
                  />
                ) : employee.state}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.city}
                    onChange={(e) => handleChange(e, 'city')}
                  />
                ) : employee.city}</td>
                <td className='wide-column'>{editModeId === employee.emp_id ? (
                  <input
                    type="text"
                    value={editedEmployee.zipCode}
                    onChange={(e) => handleChange(e, 'zipCode')}
                  />
                ) : employee.zipCode}</td>
                <td className="actions-cell">
                  {editModeId === employee.emp_id ? (
                    <>
                      <button className="save-btn" onClick={handleSave}><FaSave />Save</button>
                      <button className="cancel-btn" onClick={handleCancel}><FaTimes />Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => handleEdit(employee)}><FaEdit />Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(employee.emp_id)}><FaTrash />Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
};

export default Table;
