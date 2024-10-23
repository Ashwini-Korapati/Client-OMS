// import React, { useState } from 'react';
// import '../Payslips/HrPayslipsRelease.css'
// import { MdEdit } from "react-icons/md";
// import { Modal } from 'antd'; // Make sure to install Ant Design if not already installed


// const Payslip = () => {
//   const [activeTab, setActiveTab] = useState('Payslip');
// //   const [selectedEmployees, setSelectedEmployees] = useState([])
// const [selectedEmployee, setSelectedEmployee] = useState(null); // Add selectedEmployee state;
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [remarksData, setRemarksData] = useState({}); 


//   // Static data for employees
//   const employees = [
//     { name: 'Prakash R', empNo: 6148, remarks: '', payslipReleased: 'No' },
//     { name: 'A Sasikumar', empNo: 6145, remarks: '', payslipReleased: 'No' },
//     { name: 'C Vicky', empNo: 6149, remarks: '', payslipReleased: 'No' },
//     { name: 'Archana Ts', empNo: 7901, remarks: '', payslipReleased: 'No' },
//     { name: 'Jaisan P', empNo: 7904, remarks: '', payslipReleased: 'No' },
//     { name: 'Harshitha N', empNo: 7902, remarks: '', payslipReleased: 'No' },
//     { name: 'B Narasimhulu', empNo: 7717, remarks: '', payslipReleased: 'No' },
//     { name: 'Ganesh Thirumalakonda', empNo: 7729, remarks: '', payslipReleased: 'No' },
//     { name: 'Kavya Vaidya', empNo: 7730, remarks: '', payslipReleased: 'No' }
//   ];

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const handleEmployeeSelection = (empNo) => {
//     setSelectedEmployees((prevSelected) =>
//       prevSelected.includes(empNo)
//         ? prevSelected.filter((emp) => emp !== empNo)
//         : [...prevSelected, empNo]
//     );
//   };

//   const handleEditClick = (employee) => {
//     setSelectedEmployee(employee); // Set the clicked employee
//     setIsModalOpen(true); // Open modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close modal
//   };

//   return (
//     <div className="payslip-container">
//       {/* Tabs */}
//       <div className="tabs">
//         <button className={activeTab === 'Payslip' ? 'active' : ''} onClick={() => handleTabClick('Payslip')}>
//           Payslip
//         </button>
//         <button className={activeTab === 'Reimbursement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Reimbursement Payslip')}>
//           Reimbursement Payslip
//         </button>
//         <button className={activeTab === 'Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Settlement Payslip')}>
//           Settlement Payslip
//         </button>
//         <button className={activeTab === 'Re-Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Re-Settlement Payslip')}>
//           Re-Settlement Payslip
//         </button>
//       </div>

//       {/* Content based on selected tab */}
//       {activeTab === 'Payslip' && (
//         <div className="payslip-content">
//           <div className="filters">
//             <div>
//               <input type="radio" name="employeeSelection" value="all" /> All employees
//               <input type="radio" name="employeeSelection" value="selected" defaultChecked /> Selected employees
//               <input type="radio" name="employeeSelection" value="multiple" /> Multiple Payslips
//             </div>
//             <div>
//               <select>
//                 <option>Category: All</option>
//               </select>
//               <select>
//                 <option>Status: All</option>
//               </select>
//               <select>
//                 <option>Employee: All</option>
//               </select>
//               <select>
//                 <option>Employee Filter: All</option>
//               </select>
//             </div>
//           </div>

//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Select</th>
//                 <th>Employee Name</th>
//                 <th>Employee No</th>
//                 <th>Remarks</th>
//                 <th>Payslip Released</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.empNo}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       checked={selectedEmployees.includes(employee.empNo)}
//                       onChange={() => handleEmployeeSelection(employee.empNo)}
//                     />
//                   </td>
//                   <td>{employee.name}</td>
//                   <td>{employee.empNo}</td>
//                   <td>{employee.remarks}</td>
//                   <td>{employee.payslipReleased}</td>
//                   <td>
//                     <button onClick={() => handleEditClick(employee)}><MdEdit /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

          

//           {/* Download options */}
//           <div className="download-options">
//             <input type="radio" name="downloadOption" value="consolidated" defaultChecked /> Consolidated Payslip as PDF
//             <input type="radio" name="downloadOption" value="multiple" /> Multiple Payslips as Zip
//             <button className='buttons'>Send Email</button>
//           </div>
//           <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         employee={selectedEmployee}
//         onSave={handleSaveRemarks}
//       />
//         </div>
        
//       )}
//     </div>
//   );
// };

// export default Payslip;
// import React, { useState } from 'react';
// import '../Payslips/HrPayslipsRelease.css';
// import { MdEdit } from "react-icons/md";
// import { Modal } from 'antd'; // Make sure to install Ant Design if not already installed

// const Payslip = () => {
//   const [activeTab, setActiveTab] = useState('Payslip');
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [remarksData, setRemarksData] = useState({}); 
//   const [selectedEmployee, setSelectedEmployee] = useState(null); // Add selectedEmployee state

//   // Static data for employees
//   const employees = [
//     { name: 'Prakash R', empNo: 6148, remarks: '', payslipReleased: 'No' },
//     { name: 'A Sasikumar', empNo: 6145, remarks: '', payslipReleased: 'No' },
//     { name: 'C Vicky', empNo: 6149, remarks: '', payslipReleased: 'No' },
//     { name: 'Archana Ts', empNo: 7901, remarks: '', payslipReleased: 'No' },
//     { name: 'Jaisan P', empNo: 7904, remarks: '', payslipReleased: 'No' },
//     { name: 'Harshitha N', empNo: 7902, remarks: '', payslipReleased: 'No' },
//     { name: 'B Narasimhulu', empNo: 7717, remarks: '', payslipReleased: 'No' },
//     { name: 'Ganesh Thirumalakonda', empNo: 7729, remarks: '', payslipReleased: 'No' },
//     { name: 'Kavya Vaidya', empNo: 7730, remarks: '', payslipReleased: 'No' }
//   ];

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const handleEmployeeSelection = (empNo) => {
//     setSelectedEmployees((prevSelected) =>
//       prevSelected.includes(empNo)
//         ? prevSelected.filter((emp) => emp !== empNo)
//         : [...prevSelected, empNo]
//     );
//   };

//   const handleEditClick = (employee) => {
//     setSelectedEmployee(employee); // Set the clicked employee
//     setIsModalOpen(true); // Open modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close modal
//   };

//   const handleSaveRemarks = () => {
//     // Handle saving remarks logic here
//     setIsModalOpen(false); // Close modal after saving
//   };

//   return (
//     <div className="payslip-container">
//       {/* Tabs */}
//       <div className="tabs">
//         <button className={activeTab === 'Payslip' ? 'active' : ''} onClick={() => handleTabClick('Payslip')}>
//           Payslip
//         </button>
//         <button className={activeTab === 'Reimbursement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Reimbursement Payslip')}>
//           Reimbursement Payslip
//         </button>
//         <button className={activeTab === 'Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Settlement Payslip')}>
//           Settlement Payslip
//         </button>
//         <button className={activeTab === 'Re-Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Re-Settlement Payslip')}>
//           Re-Settlement Payslip
//         </button>
//       </div>

//       {/* Content based on selected tab */}
//       {activeTab === 'Payslip' && (
//         <div className="payslip-content">
//           <div className="filters">
//             <div>
//               <input type="radio" name="employeeSelection" value="all" /> All employees
//               <input type="radio" name="employeeSelection" value="selected" defaultChecked /> Selected employees
//               <input type="radio" name="employeeSelection" value="multiple" /> Multiple Payslips
//             </div>
//             <div>
//               <select>
//                 <option>Category: All</option>
//               </select>
//               <select>
//                 <option>Status: All</option>
//               </select>
//               <select>
//                 <option>Employee: All</option>
//               </select>
//               <select>
//                 <option>Employee Filter: All</option>
//               </select>
//             </div>
//           </div>

//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Select</th>
//                 <th>Employee Name</th>
//                 <th>Employee No</th>
//                 <th>Remarks</th>
//                 <th>Payslip Released</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.empNo}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       checked={selectedEmployees.includes(employee.empNo)}
//                       onChange={() => handleEmployeeSelection(employee.empNo)}
//                     />
//                   </td>
//                   <td>{employee.name}</td>
//                   <td>{employee.empNo}</td>
//                   <td>{employee.remarks}</td>
//                   <td>{employee.payslipReleased}</td>
//                   <td>
//                     <button onClick={() => handleEditClick(employee)}><MdEdit /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Download options */}
//           <div className="download-options">
//             <input type="radio" name="downloadOption" value="consolidated" defaultChecked /> Consolidated Payslip as PDF
//             <input type="radio" name="downloadOption" value="multiple" /> Multiple Payslips as Zip
//             <button className='buttons'>Send Email</button>
//           </div>
//           <Modal
//             visible={isModalOpen}
//             onCancel={handleCloseModal}
//             onOk={handleSaveRemarks}
//             title="Edit Remarks"
//           >
//             <p>Edit remarks for {selectedEmployee?.name}</p>
//             {/* Add input fields for editing remarks */}
//           </Modal>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payslip;


import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import './HrPayslipsRelease.css';
import Modal from './Modal'; // Import custom Modal component

const Payslip = () => {
  const [activeTab, setActiveTab] = useState('Payslip');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [remarksData, setRemarksData] = useState({}); 
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Store selected employee

  // Static data for employees
  const employees = [
    { name: 'Prakash R', empNo: 6148, remarks: '', payslipReleased: 'No' },
    { name: 'A Sasikumar', empNo: 6145, remarks: '', payslipReleased: 'No' },
    { name: 'C Vicky', empNo: 6149, remarks: '', payslipReleased: 'No' },
    { name: 'Archana Ts', empNo: 7901, remarks: '', payslipReleased: 'No' },
    { name: 'Jaisan P', empNo: 7904, remarks: '', payslipReleased: 'No' },
    { name: 'Harshitha N', empNo: 7902, remarks: '', payslipReleased: 'No' },
    { name: 'B Narasimhulu', empNo: 7717, remarks: '', payslipReleased: 'No' },
    { name: 'Ganesh Thirumalakonda', empNo: 7729, remarks: '', payslipReleased: 'No' },
    { name: 'Kavya Vaidya', empNo: 7730, remarks: '', payslipReleased: 'No' }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEmployeeSelection = (empNo) => {
    setSelectedEmployees((prevSelected) =>
      prevSelected.includes(empNo)
        ? prevSelected.filter((emp) => emp !== empNo)
        : [...prevSelected, empNo]
    );
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee); // Set the clicked employee
    setIsModalOpen(true); // Open modal
  };

  const handleSaveRemarks = (empNo, remarks) => {
    setRemarksData((prevRemarks) => ({
      ...prevRemarks,
      [empNo]: remarks, // Update the remarks for the selected employee
    }));
    setIsModalOpen(false); // Close modal after saving
  };

  return (
    <div className="payslip-container">
      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 'Payslip' ? 'active' : ''} onClick={() => handleTabClick('Payslip')}>
          Payslip
        </button>
        <button className={activeTab === 'Reimbursement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Reimbursement Payslip')}>
          Reimbursement Payslip
        </button>
        <button className={activeTab === 'Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Settlement Payslip')}>
          Settlement Payslip
        </button>
        <button className={activeTab === 'Re-Settlement Payslip' ? 'active' : ''} onClick={() => handleTabClick('Re-Settlement Payslip')}>
          Re-Settlement Payslip
        </button>
      </div>

      {/* Content based on selected tab */}
      {activeTab === 'Payslip' && (
        <div className="payslip-content">
          <div className="filters">
            <div>
              <input type="radio" name="employeeSelection" value="all" /> All employees
              <input type="radio" name="employeeSelection" value="selected" defaultChecked /> Selected employees
              <input type="radio" name="employeeSelection" value="multiple" /> Multiple Payslips
            </div>
            <div>
              <select>
                <option>Category: All</option>
              </select>
              <select>
                <option>Status: All</option>
              </select>
              <select>
                <option>Employee: All</option>
              </select>
              <select>
                <option>Employee Filter: All</option>
              </select>
            </div>
          </div>

          <table className="employee-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Employee Name</th>
                <th>Employee No</th>
                <th>Remarks</th>
                <th>Payslip Released</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.empNo}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedEmployees.includes(employee.empNo)}
                      onChange={() => handleEmployeeSelection(employee.empNo)}
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.empNo}</td>
                  <td>{remarksData[employee.empNo] || employee.remarks}</td>
                  <td>{employee.payslipReleased}</td>
                  <td>
                    <button onClick={() => handleEditClick(employee)}><MdEdit /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Download options */}
          <div className="download-options">
            <input type="radio" name="downloadOption" value="consolidated" defaultChecked /> Consolidated Payslip as PDF
            <input type="radio" name="downloadOption" value="multiple" /> Multiple Payslips as Zip
            <button className='buttons'>Send Email</button>
          </div>

          {/* Custom Modal for editing remarks */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            employee={selectedEmployee}
            onSave={handleSaveRemarks}
          />
        </div>
      )}
    </div>
  );
};

export default Payslip;
