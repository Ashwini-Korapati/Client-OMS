// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Viewemployee/Viewemployee.css';
// import { FaEdit, FaSave, FaTrash, FaTimes, FaFileUpload, FaFilePdf } from 'react-icons/fa';

// const Table = () => {
//   const [employees, setEmployees] = useState([
//     {
//       id: '0022', name: 'Hannah Baker', contact: '8544788221', email: 'hannahbaker@gmail.com',
//       role: 'Backend Developer', reportsTo: 'Hannah Baker', accountNo: '2345678901234567', ifsc: 'SBIN00023',
//       aadhar: '123456789012', pancard: 'ABCDE1234F', dateOfJoining: '2021-06-15', employmentType: 'Full-Time',
//       profilePhoto: 'hannah.jpg', gender: 'Female', state: 'California', city: 'San Francisco', zipcode: '94105',
//       graduationDoc: null
//     },
//     {
//       id: '0014', name: 'Alice Johnson', contact: '8544788221', email: 'alicejohnson@gmail.com',
//       role: 'Software Engineer', reportsTo: 'Alice Johnson', accountNo: '3456789012345678', ifsc: 'SBIN00023',
//       aadhar: '234567890123', pancard: 'BCDEF2345G', dateOfJoining: '2020-09-10', employmentType: 'Part-Time',
//       profilePhoto: 'alice.jpg', gender: 'Female', state: 'New York', city: 'New York City', zipcode: '10001',
//       graduationDoc: null
//     },
//     {
//       id: '0016', name: 'Bob Smith', contact: '8544788221', email: 'bobsmith@gmail.com',
//       role: 'Project Manager', reportsTo: 'Bob Smith', accountNo: '4567890123456789', ifsc: 'SBIN00023',
//       aadhar: '345678901234', pancard: 'CDEFG3456H', dateOfJoining: '2019-03-25', employmentType: 'Full-Time',
//       profilePhoto: 'bob.jpg', gender: 'Male', state: 'Texas', city: 'Austin', zipcode: '73301',
//       graduationDoc: null
//     },
//     {
//       id: '0017', name: 'Charlie Brown', contact: '8544788221', email: 'charliebrown@gmail.com',
//       role: 'UX/UI Designer', reportsTo: 'Charlie Brown', accountNo: '5678901234567890', ifsc: 'SBIN00023',
//       aadhar: '456789012345', pancard: 'DEFGH4567I', dateOfJoining: '2018-01-12', employmentType: 'Contract',
//       profilePhoto: 'charlie.jpg', gender: 'Male', state: 'Florida', city: 'Miami', zipcode: '33101',
//       graduationDoc: null
//     },
//     {
//       id: '0018', name: 'Diana Prince', contact: '8544788221', email: 'dianaprince@gmail.com',
//       role: 'QA Engineer', reportsTo: 'Diana Prince', accountNo: '6789012345678901', ifsc: 'SBIN00023',
//       aadhar: '567890123456', pancard: 'EFGHI5678J', dateOfJoining: '2017-11-05', employmentType: 'Full-Time',
//       profilePhoto: 'diana.jpg', gender: 'Female', state: 'Washington', city: 'Seattle', zipcode: '98101',
//       graduationDoc: null
//     },
//     {
//       id: '0019', name: 'Ethan Hunt', contact: '8544788221', email: 'ethanhunt@gmail.com',
//       role: 'DevOps Engineer', reportsTo: 'Ethan Hunt', accountNo: '7890123456789012', ifsc: 'SBIN00023',
//       aadhar: '678901234567', pancard: 'FGHIJ6789K', dateOfJoining: '2022-02-20', employmentType: 'Intern',
//       profilePhoto: 'ethan.jpg', gender: 'Male', state: 'Colorado', city: 'Denver', zipcode: '80201',
//       graduationDoc: null
//     }
//   ]);

//   const [editModeId, setEditModeId] = useState(null);
//   const [editedEmployee, setEditedEmployee] = useState({
//     id: '',
//     name: '',
//     contact: '',
//     email: '',
//     role: '',
//     reportsTo: '',
//     accountNo: '',
//     ifsc: '',
//     aadhar: '',
//     pancard: '',
//     dateOfJoining: '',
//     employmentType: '',
//     profilePhoto: '',
//     gender: '',
//     state: '',
//     city: '',
//     zipcode: '',
//     graduationDoc: null
//   });

//   const handleDelete = (id) => {
//     const updatedEmployees = employees.filter(employee => employee.id !== id);
//     setEmployees(updatedEmployees);
//   };

//   const handleEdit = (employee) => {
//     setEditModeId(employee.id);
//     setEditedEmployee({ ...employee });
//   };

//   const handleSave = () => {
//     const updatedEmployees = employees.map(emp =>
//       emp.id === editedEmployee.id ? { ...editedEmployee } : emp
//     );
//     setEmployees(updatedEmployees);
//     setEditModeId(null);
//     setEditedEmployee({
//       id: '',
//       name: '',
//       contact: '',
//       email: '',
//       role: '',
//       reportsTo: '',
//       accountNo: '',
//       ifsc: '',
//       aadhar: '',
//       pancard: '',
//       dateOfJoining: '',
//       employmentType: '',
//       profilePhoto: '',
//       gender: '',
//       state: '',
//       city: '',
//       zipcode: '',
//       graduationDoc: null
//     });
//   };

//   const handleCancel = () => {
//     setEditModeId(null);
//     setEditedEmployee({
//       id: '',
//       name: '',
//       contact: '',
//       email: '',
//       role: '',
//       reportsTo: '',
//       accountNo: '',
//       ifsc: '',
//       aadhar: '',
//       pancard: '',
//       dateOfJoining: '',
//       employmentType: '',
//       profilePhoto: '',
//       gender: '',
//       state: '',
//       city: '',
//       zipcode: '',
//       graduationDoc: null
//     });
//   };

//   const hideLastFourDigits = (accountNo) => {
//     const visibleDigits = accountNo.substring(0, accountNo.length - 4);
//     const hiddenDigits = '****';
//     return `${visibleDigits}${hiddenDigits}`;
//   };

//   const handleChange = (e, field) => {
//     setEditedEmployee({
//       ...editedEmployee,
//       [field]: e.target.value
//     });
//   };

//   const handleFileChange = (e) => {
//     setEditedEmployee({
//       ...editedEmployee,
//       graduationDoc: e.target.files[0]
//     });
//   };

//   const exportToCSV = () => {
//     const csvRows = [];
//     const headers = ['ID', 'Name', 'Contact', 'Email', 'Role', 'Reports To', 'Aadhar', 'Pancard', 'Date of Joining', 'Employment Type', 'Profile Photo', 'Gender', 'State', 'City', 'Zipcode', 'Account No', 'IFSC Code', 'Graduation Document'];
//     csvRows.push(headers.join(','));

//     employees.forEach(employee => {
//       const values = [employee.id, employee.name, employee.contact, employee.email, employee.role, employee.reportsTo, employee.aadhar, employee.pancard, employee.dateOfJoining, employee.employmentType, employee.profilePhoto, employee.gender, employee.state, employee.city, employee.zipcode, employee.accountNo, employee.ifsc, employee.graduationDoc ? employee.graduationDoc.name : ''];
//       csvRows.push(values.join(','));
//     });

//     const csvData = csvRows.join('\n');
//     const blob = new Blob([csvData], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('download', 'employees.csv');
//     a.click();
//   };

//   return (
//     <div className="table-container">
  
//       <button className="export-btn" onClick={exportToCSV}>Export list to CSV</button>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Contact</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Reports To</th>
//             <th>Aadhar</th>
//             <th>Pancard</th>
//             <th>Date of Joining</th>
//             <th>Employment Type</th>
//             <th>Profile Photo</th>
//             <th>Gender</th>
//             <th>State</th>
//             <th>City</th>
//             <th>Zipcode</th>
//             <th>Account No</th>
//             <th>IFSC Code</th>
//             <th>Graduation Document</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee.id}>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.id} onChange={(e) => handleChange(e, 'id')} />
//                 ) : (
//                   employee.id
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.name} onChange={(e) => handleChange(e, 'name')} />
//                 ) : (
//                   employee.name
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.contact} onChange={(e) => handleChange(e, 'contact')} />
//                 ) : (
//                   employee.contact
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="email" value={editedEmployee.email} onChange={(e) => handleChange(e, 'email')} />
//                 ) : (
//                   employee.email
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.role} onChange={(e) => handleChange(e, 'role')} />
//                 ) : (
//                   employee.role
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.reportsTo} onChange={(e) => handleChange(e, 'reportsTo')} />
//                 ) : (
//                   employee.reportsTo
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.aadhar} onChange={(e) => handleChange(e, 'aadhar')} />
//                 ) : (
//                   employee.aadhar
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.pancard} onChange={(e) => handleChange(e, 'pancard')} />
//                 ) : (
//                   employee.pancard
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="date" value={editedEmployee.dateOfJoining} onChange={(e) => handleChange(e, 'dateOfJoining')} />
//                 ) : (
//                   employee.dateOfJoining
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.employmentType} onChange={(e) => handleChange(e, 'employmentType')} />
//                 ) : (
//                   employee.employmentType
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.profilePhoto} onChange={(e) => handleChange(e, 'profilePhoto')} />
//                 ) : (
//                   <img src={employee.profilePhoto} alt={employee.name} width="50" />
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.gender} onChange={(e) => handleChange(e, 'gender')} />
//                 ) : (
//                   employee.gender
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.state} onChange={(e) => handleChange(e, 'state')} />
//                 ) : (
//                   employee.state
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.city} onChange={(e) => handleChange(e, 'city')} />
//                 ) : (
//                   employee.city
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.zipcode} onChange={(e) => handleChange(e, 'zipcode')} />
//                 ) : (
//                   employee.zipcode
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.accountNo} onChange={(e) => handleChange(e, 'accountNo')} />
//                 ) : (
//                   hideLastFourDigits(employee.accountNo)
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.ifsc} onChange={(e) => handleChange(e, 'ifsc')} />
//                 ) : (
//                   employee.ifsc
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <>
//                     <input type="file" onChange={handleFileChange} />
//                     {editedEmployee.graduationDoc && <span>{editedEmployee.graduationDoc.name}</span>}
//                   </>
//                 ) : (
//                   employee.graduationDoc ? (
//                     <a href={URL.createObjectURL(employee.graduationDoc)} target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
//                   ) : (
//                     'No Document'
//                   )
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <div className='emp-table-icons'>
//                     <button onClick={handleSave} className='action-btn-save'><FaSave /></button>
//                     <button onClick={handleCancel} className='action-btn-cacel'><FaTimes /></button>
//                   </div>
//                 ) : (
//                   <div>
//                     <button onClick={() => handleEdit(employee)}  className='action-btn-edit'><FaEdit /></button>
//                     <button onClick={() => handleDelete(employee.id)} className='action-btn-delete'><FaTrash /></button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <NavLink to="/hr-dashboard/hr-home" className="back-btn">Back</NavLink>
//     </div>
//   );
// };

// export default Table;



// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Viewemployee/Viewemployee.css';
// import { FaEdit, FaSave, FaTrash, FaTimes, FaFilePdf } from 'react-icons/fa';
// import profilePlaceholder from '../../../Assets/hrmimage.png';
// import graduationDocPlaceholder from '../../../Assets/ash.pdf';

// const Table = () => {
//   const [employees, setEmployees] = useState([
//     {
//       id: '0022', name: 'Hannah Baker', contact: '8544788221', email: 'hannahbaker@gmail.com',
//       role: 'Backend Developer', reportsTo: 'Hannah Baker', accountNo: '2345678901234567', ifsc: 'SBIN00023',
//       aadhar: '123456789012', pancard: 'ABCDE1234F', dateOfJoining: '2021-06-15', employmentType: 'Full-Time',
//       profilePhoto: profilePlaceholder, gender: 'Female', state: 'California', city: 'San Francisco', zipcode: '94105',
//       graduationDoc: graduationDocPlaceholder
//     },
//         {
//       id: '0014', name: 'Alice Johnson', contact: '8544788221', email: 'alicejohnson@gmail.com',
//       role: 'Software Engineer', reportsTo: 'Alice Johnson', accountNo: '3456789012345678', ifsc: 'SBIN00023',
//       aadhar: '234567890123', pancard: 'BCDEF2345G', dateOfJoining: '2020-09-10', employmentType: 'Part-Time',
//       profilePhoto: profilePlaceholder, gender: 'Female', state: 'New York', city: 'New York City', zipcode: '10001',
//       graduationDoc: graduationDocPlaceholder
//     },
//     {
//       id: '0016', name: 'Bob Smith', contact: '8544788221', email: 'bobsmith@gmail.com',
//       role: 'Project Manager', reportsTo: 'Bob Smith', accountNo: '4567890123456789', ifsc: 'SBIN00023',
//       aadhar: '345678901234', pancard: 'CDEFG3456H', dateOfJoining: '2019-03-25', employmentType: 'Full-Time',
//       profilePhoto: profilePlaceholder, gender: 'Male', state: 'Texas', city: 'Austin', zipcode: '73301',
//       graduationDoc: graduationDocPlaceholder
//     },
//     {
//       id: '0017', name: 'Charlie Brown', contact: '8544788221', email: 'charliebrown@gmail.com',
//       role: 'UX/UI Designer', reportsTo: 'Charlie Brown', accountNo: '5678901234567890', ifsc: 'SBIN00023',
//       aadhar: '456789012345', pancard: 'DEFGH4567I', dateOfJoining: '2018-01-12', employmentType: 'Contract',
//       profilePhoto: profilePlaceholder, gender: 'Male', state: 'Florida', city: 'Miami', zipcode: '33101',
//       graduationDoc: graduationDocPlaceholder
//     },
//     {
//       id: '0018', name: 'Diana Prince', contact: '8544788221', email: 'dianaprince@gmail.com',
//       role: 'QA Engineer', reportsTo: 'Diana Prince', accountNo: '6789012345678901', ifsc: 'SBIN00023',
//       aadhar: '567890123456', pancard: 'EFGHI5678J', dateOfJoining: '2017-11-05', employmentType: 'Full-Time',
//       profilePhoto:profilePlaceholder, gender: 'Female', state: 'Washington', city: 'Seattle', zipcode: '98101',
//       graduationDoc: graduationDocPlaceholder
//     },
//     {
//       id: '0019', name: 'Ethan Hunt', contact: '8544788221', email: 'ethanhunt@gmail.com',
//       role: 'DevOps Engineer', reportsTo: 'Ethan Hunt', accountNo: '7890123456789012', ifsc: 'SBIN00023',
//       aadhar: '678901234567', pancard: 'FGHIJ6789K', dateOfJoining: '2022-02-20', employmentType: 'Intern',
//       profilePhoto: profilePlaceholder, gender: 'Male', state: 'Colorado', city: 'Denver', zipcode: '80201',
//       graduationDoc: graduationDocPlaceholder
//     }
//   ]);

//   const [editModeId, setEditModeId] = useState(null);
//   const [editedEmployee, setEditedEmployee] = useState({
//     id: '',
//     name: '',
//     contact: '',
//     email: '',
//     role: '',
//     reportsTo: '',
//     accountNo: '',
//     ifsc: '',
//     aadhar: '',
//     pancard: '',
//     dateOfJoining: '',
//     employmentType: '',
//     profilePhoto: '',
//     gender: '',
//     state: '',
//     city: '',
//     zipcode: '',
//     graduationDoc: null
//   });

//   const handleDelete = (id) => {
//     const updatedEmployees = employees.filter(employee => employee.id !== id);
//     setEmployees(updatedEmployees);
//   };

//   const handleEdit = (employee) => {
//     setEditModeId(employee.id);
//     setEditedEmployee({ ...employee });
//   };

//   const handleSave = () => {
//     const updatedEmployees = employees.map(emp =>
//       emp.id === editedEmployee.id ? { ...editedEmployee } : emp
//     );
//     setEmployees(updatedEmployees);
//     setEditModeId(null);
//     setEditedEmployee({
//       id: '',
//       name: '',
//       contact: '',
//       email: '',
//       role: '',
//       reportsTo: '',
//       accountNo: '',
//       ifsc: '',
//       aadhar: '',
//       pancard: '',
//       dateOfJoining: '',
//       employmentType: '',
//       profilePhoto: '',
//       gender: '',
//       state: '',
//       city: '',
//       zipcode: '',
//       graduationDoc: null
//     });
//   };

//   const handleCancel = () => {
//     setEditModeId(null);
//     setEditedEmployee({
//       id: '',
//       name: '',
//       contact: '',
//       email: '',
//       role: '',
//       reportsTo: '',
//       accountNo: '',
//       ifsc: '',
//       aadhar: '',
//       pancard: '',
//       dateOfJoining: '',
//       employmentType: '',
//       profilePhoto: '',
//       gender: '',
//       state: '',
//       city: '',
//       zipcode: '',
//       graduationDoc: null
//     });
//   };

//   const hideLastFourDigits = (accountNo) => {
//     const visibleDigits = accountNo.substring(0, accountNo.length - 4);
//     const hiddenDigits = '****';
//     return `${visibleDigits}${hiddenDigits}`;
//   };

//   const handleChange = (e, field) => {
//     setEditedEmployee({
//       ...editedEmployee,
//       [field]: e.target.value
//     });
//   };

//   const handleFileChange = (e) => {
//     setEditedEmployee({
//       ...editedEmployee,
//       graduationDoc: e.target.files[0]
//     });
//   };

//   const exportToCSV = () => {
//     const csvRows = [];
//     const headers = ['ID', 'Name', 'Contact', 'Email', 'Role', 'Reports To', 'Aadhar', 'Pancard', 'Date of Joining', 'Employment Type', 'Profile Photo', 'Gender', 'State', 'City', 'Zipcode', 'Account No', 'IFSC Code', 'Graduation Document'];
//     csvRows.push(headers.join(','));

//     employees.forEach(employee => {
//       const values = [employee.id, employee.name, employee.contact, employee.email, employee.role, employee.reportsTo, employee.aadhar, employee.pancard, employee.dateOfJoining, employee.employmentType, employee.profilePhoto, employee.gender, employee.state, employee.city, employee.zipcode, employee.accountNo, employee.ifsc, employee.graduationDoc ? employee.graduationDoc.name : ''];
//       csvRows.push(values.join(','));
//     });

//     const csvData = csvRows.join('\n');
//     const blob = new Blob([csvData], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('download', 'employees.csv');
//     a.click();
//   };

//   return (
//     <div className="table-container">
//       <NavLink to="/hr-dashboard/hr-home" className="back-btn">Back</NavLink>
//       <button className="export-btn" onClick={exportToCSV}>Export list to CSV</button>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th className='extra-wide-column'>Name</th>
//             <th className='wide-column'>Contact</th>
//             <th className='extra-wide-column'>Email</th>
//             <th className="extra-wide-column">Role</th>
//             <th className="extra-wide-column">Reports To</th>
//             <th className="extra-wide-column">Aadhar</th>
//             <th className="extra-wide-column">Pancard</th>
//             <th className="wide-column">Date of Joining</th>
//             <th className="extra-wide-column">Employment Type</th>
//             <th className="wide-column">Profile Photo</th>
//             <th className="wide-column">Gender</th>
//             <th className="wide-column">State</th>
//             <th className="wide-column">City</th>
//             <th className='wide-column'>Zipcode</th>
//             <th className='wide-column'>Account No</th>
//             <th className='wide-column'>IFSC Code</th>
//             <th className='wide-column'>Graduation Document</th>
//             <th className='wide-column'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee.id}>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.id} onChange={(e) => handleChange(e, 'id')} />
//                 ) : (
//                   employee.id
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.name} onChange={(e) => handleChange(e, 'name')} />
//                 ) : (
//                   employee.name
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.contact} onChange={(e) => handleChange(e, 'contact')} />
//                 ) : (
//                   employee.contact
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.email} onChange={(e) => handleChange(e, 'email')} />
//                 ) : (
//                   employee.email
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.role} onChange={(e) => handleChange(e, 'role')} />
//                 ) : (
//                   employee.role
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.reportsTo} onChange={(e) => handleChange(e, 'reportsTo')} />
//                 ) : (
//                   employee.reportsTo
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.aadhar} onChange={(e) => handleChange(e, 'aadhar')} />
//                 ) : (
//                   employee.aadhar
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.pancard} onChange={(e) => handleChange(e, 'pancard')} />
//                 ) : (
//                   employee.pancard
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="date" value={editedEmployee.dateOfJoining} onChange={(e) => handleChange(e, 'dateOfJoining')} />
//                 ) : (
//                   employee.dateOfJoining
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.employmentType} onChange={(e) => handleChange(e, 'employmentType')} />
//                 ) : (
//                   employee.employmentType
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="file" onChange={handleFileChange} />
//                 ) : (
//                   employee.profilePhoto ? <img src={employee.profilePhoto} alt="Profile" width="50" height="50" /> : ''
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <select value={editedEmployee.gender} onChange={(e) => handleChange(e, 'gender')}>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 ) : (
//                   employee.gender
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.state} onChange={(e) => handleChange(e, 'state')} />
//                 ) : (
//                   employee.state
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.city} onChange={(e) => handleChange(e, 'city')} />
//                 ) : (
//                   employee.city
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.zipcode} onChange={(e) => handleChange(e, 'zipcode')} />
//                 ) : (
//                   employee.zipcode
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.accountNo} onChange={(e) => handleChange(e, 'accountNo')} />
//                 ) : (
//                   hideLastFourDigits(employee.accountNo)
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="text" value={editedEmployee.ifsc} onChange={(e) => handleChange(e, 'ifsc')} />
//                 ) : (
//                   employee.ifsc
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <input type="file" onChange={handleFileChange} />
//                 ) : (
//                   employee.graduationDoc ? <a href={employee.graduationDoc} target="_blank" rel="noopener noreferrer">View</a> : ''
//                 )}
//               </td>
//               <td>
//                 {editModeId === employee.id ? (
//                   <>
//                     <button className="emp-table-icons action-btn-save" onClick={handleSave}><FaSave /> Save</button>
//                     <button className="emp-table-icons action-btn-cancel" onClick={handleCancel}><FaTimes /> Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                     <button className="emp-table-icons action-btn-edit" onClick={() => handleEdit(employee)}><FaEdit /> Edit</button>
//                     <button className="emp-table-icons action-btn-delete" onClick={() => handleDelete(employee.id)}><FaTrash /> Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Viewemployee/Viewemployee.css';
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import profilePlaceholder from '../../../Assets/hrmimage.png';

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [editModeId, setEditModeId] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({
    emp_id: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    role: '',
    reporting_to: '',
    accountNo: '',
    ifsc: '',
    aadhar: '',
    pancard: '',
    dateOfJoining: '',
    employmentType: '',
    profilePhoto: '',
    gender: '',
    state: '',
    city: '',
    zipcode: '',
    graduationDoc: null
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
     
        
        const response = await axios.get('http://localhost:8000/v1/admin/AllEmployee', {
          // headers: {
          //   'Authorization': `Bearer ${token}`
          // }
        });
        setEmployees(response.data); 
      } catch (error) {
        console.error('Error fetching employees:', error);
        console.log(fetchEmployees)
        // Handle error fetching data
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      
      await axios.delete(`http://localhost:8000/api/v1/hr/Employee/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const updatedEmployees = employees.filter(employee => employee.id !== id);
      setEmployees(updatedEmployees);
    } catch (error) {
      console.error('Error deleting employee:', error);
      // Handle error deleting employee
    }
  };

  const handleEdit = (employee) => {
    setEditModeId(employee.id);
    setEditedEmployee({ ...employee });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      await axios.put(`http://localhost:8000/api/v1/admin/Employee/${editedEmployee.id}`, editedEmployee, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const updatedEmployees = employees.map(emp =>
        emp.id === editedEmployee.id ? { ...editedEmployee } : emp
      );
      setEmployees(updatedEmployees);
      setEditModeId(null);
      setEditedEmployee({
        emp_id: '',
        firstName: '',
        phoneNumber: '',
        email: '',
        role: '',
        reporting_to: '',
        accountNo: '',
        ifsc: '',
        aadhar: '',
        pancard: '',
        dateOfJoining: '',
        employmentType: '',
        profilePhoto: '',
        gender: '',
        state: '',
        city: '',
        zipcode: '',
        graduationDoc: null
      });
    } catch (error) {
      console.error('Error saving employee:', error);
      // Handle error saving employee
    }
  };

  const handleCancel = () => {
    setEditModeId(null);
    setEditedEmployee({
      emp_id: '',
      firstName: '',
      phoneNumber: '',
      email: '',
      role: '',
      reporting_to: '',
      accountNo: '',
      ifsc: '',
      aadhar: '',
      pancard: '',
      dateOfJoining: '',
      employmentType: '',
      profilePhoto: '',
      gender: '',
      state: '',
      city: '',
      zipcode: '',
      graduationDoc: null
    });
  };

  const hideLastFourDigits = (accountNo) => {
    const visibleDigits = accountNo.substring(0, accountNo.length - 4);
    const hiddenDigits = '****';
    return `${visibleDigits}${hiddenDigits}`;
  };

  const handleChange = (e, field) => {
    setEditedEmployee({
      ...editedEmployee,
      [field]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setEditedEmployee({
      ...editedEmployee,
      graduationDoc: e.target.files[0]
    });
  };

  const exportToCSV = () => {
    const csvRows = [];
    const headers = ['ID', 'Name', 'Contact', 'Email', 'Role', 'Reports To', 'Aadhar', 'Pancard', 'Date of Joining', 'Employment Type', 'Profile Photo', 'Gender', 'State', 'City', 'Zipcode', 'Account No', 'IFSC Code', 'Graduation Document'];
    csvRows.push(headers.join(','));

    employees.forEach(employee => {
      const values = [employee.id, employee.name, employee.contact, employee.email, employee.role, employee.reportsTo, employee.aadhar, employee.pancard, employee.dateOfJoining, employee.employmentType, employee.profilePhoto, employee.gender, employee.state, employee.city, employee.zipcode, employee.accountNo, employee.ifsc, employee.graduationDoc ? employee.graduationDoc.name : ''];
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

  return (
    <div className="table-container">
      <NavLink to="/hr-dashboard/hr-home" className="back-btn">Back</NavLink>
      <button className="export-btn" onClick={exportToCSV}>Export list to CSV</button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th className='extra-wide-column'>Name</th>
            <th className='wide-column'>Contact</th>
            <th className='extra-wide-column'>Email</th>
            <th className="extra-wide-column">Role</th>
            <th className="extra-wide-column">Reports To</th>
            <th className="extra-wide-column">Aadhar</th>
            <th className="extra-wide-column">Pancard</th>
            <th className="wide-column">Date of Joining</th>
            <th className="extra-wide-column">Employment Type</th>
            <th className="wide-column">Profile Photo</th>
            <th className="wide-column">Gender</th>
            <th className="wide-column">State</th>
            <th className="wide-column">City</th>
            <th className='wide-column'>Zipcode</th>
            <th className='wide-column'>Account No</th>
            <th className='wide-column'>IFSC Code</th>
            <th className='wide-column'>Graduation Document</th>
            <th className='wide-column'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.emp_id}>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.emp_id} onChange={(e) => handleChange(e, 'emp_id')} />
                ) : (
                  employee.emp_id
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.firstName} onChange={(e) => handleChange(e, 'firstName')} />
                ) : (
                  employee.firstName
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')} />
                ) : (
                  employee.phoneNumber
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.email} onChange={(e) => handleChange(e, 'email')} />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.role} onChange={(e) => handleChange(e, 'role')} />
                ) : (
                  employee.role
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.reporting_to} onChange={(e) => handleChange(e, 'reporting_to')} />
                ) : (
                  employee.reporting_to
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.aadhar} onChange={(e) => handleChange(e, 'aadhar')} />
                ) : (
                  employee.aadhar
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.pancard} onChange={(e) => handleChange(e, 'pancard')} />
                ) : (
                  employee.pancard
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="date" value={editedEmployee.dateOfJoining} onChange={(e) => handleChange(e, 'dateOfJoining')} />
                ) : (
                  employee.dateOfJoining
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.employmentType} onChange={(e) => handleChange(e, 'employmentType')} />
                ) : (
                  employee.employmentType
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="file" onChange={handleFileChange} />
                ) : (
                  employee.profilePhoto ? <img src={employee.profilePhoto} alt="Profile" width="50" height="50" /> : ''
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <select value={editedEmployee.gender} onChange={(e) => handleChange(e, 'gender')}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  employee.gender
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.state} onChange={(e) => handleChange(e, 'state')} />
                ) : (
                  employee.state
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.city} onChange={(e) => handleChange(e, 'city')} />
                ) : (
                  employee.city
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.zipcode} onChange={(e) => handleChange(e, 'zipcode')} />
                ) : (
                  employee.zipcode
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.accountNo} onChange={(e) => handleChange(e, 'accountNo')} />
                ) : (
                  hideLastFourDigits(employee.accountNo)
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="text" value={editedEmployee.ifsc} onChange={(e) => handleChange(e, 'ifsc')} />
                ) : (
                  employee.ifsc
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <input type="file" onChange={handleFileChange} />
                ) : (
                  employee.graduationDoc ? <a href={employee.graduationDoc} target="_blank" rel="noopener noreferrer">View</a> : ''
                )}
              </td>
              <td>
                {editModeId === employee.emp_id ? (
                  <>
                    <button className="emp-table-icons action-btn-save" onClick={handleSave}><FaSave /> Save</button>
                    <button className="emp-table-icons action-btn-cancel" onClick={handleCancel}><FaTimes /> Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="emp-table-icons action-btn-edit" onClick={() => handleEdit(employee)}><FaEdit /> Edit</button>
                    <button className="emp-table-icons action-btn-delete" onClick={() => handleDelete(employee.id)}><FaTrash /> Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
