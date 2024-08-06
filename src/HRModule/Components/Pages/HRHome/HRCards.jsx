// import React from 'react';
// import { useSelector } from 'react-redux';
// import '../HRHome/HRCards.css';
// import emp from '../../../Assets/cardsperfamnace.jpg';
// import clients from '../../../Assets/clientshr.png';
// import project from '../../../Assets/projects.png';
// import { selectTotalEmployees, } from '../../../Redux/Reducers/hrCardsSlice'

// const Perfcards = () => {
//   const totalEmployees = useSelector(selectTotalEmployees);

//   return (
//     <div className="card-perfamnce-dashboard">
//       <div className="p-card">
//         <div className="p-content">
//           <h2>{totalEmployees}</h2>
//           <p>Total Employees</p>
//         </div>
//         <div className="p-icon">
//           <img src={emp} alt="Total Employees" />
//         </div>
//       </div>

//       <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{totalProjects}</h2> */}
//           <h2>40</h2>
//           <p>Today Attendance</p>
//         </div>
//         <div className="p-icon">
//           <img src={project} alt="Total Projects" />
//         </div>
//       </div>
//       {/* <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{totalClients}</h2> */}
//           {/* <h2>100</h2>
//           <p>Total Clients</p>
//         </div>
//         <div className="p-icon">
//           <img src={clients} alt="Total Clients" />
//         </div>
//       </div>

//       <div className="p-card">
//         <div className="p-content">
//           {/* <h2>{activeProjects}</h2> */}
//           {/* <h2>50</h2>
//           <p>Active Projects</p>
//         </div>
//         <div className="p-icon">
//           <img src={project} alt="Active Projects" />
//         </div>
//       </div>  */}
//     </div>
//   );
// };

// export default Perfcards;

// import React from 'react';
// import '../HRHome/HRCards.css';
// import timesheetIcon from '../../../Assets/add.png'
// import projectsIcon from '../HRHome/Images/leaverep.png'
// import assignmentsIcon from '../HRHome/Images/attendan.png'
// import profileIcon from '../HRHome/Images/myuser.png'
// import approversIcon from '../HRHome/Images/leaveap.png'

// import chartPlaceholder from '../HRHome/Images/timesheet1.png'

// const CardLayout = () => {
//   return (
//     <div className="card-layout">
//       <div className="hr-home-card">
//         <h3>Timesheet </h3>
//         <img src={chartPlaceholder} alt="Chart" className="hr-home-icon" />
//       </div>
//       <div className="hr-home-card">
//         <h3>Employee management</h3>
//         <img src={timesheetIcon} alt="Timesheet" className="hr-home-icon" />
//       </div>
//       <div className="hr-home-card">
//         <h3>Leave Report</h3>
//         <img src={projectsIcon} alt="Projects" className="hr-home-icon" />
//       </div>
//       <div className="hr-home-card">
//         <h3>Attendance</h3>
//         <img src={assignmentsIcon} alt="Assignments" className="hr-home-icon" />
//       </div>
//       <div className="hr-home-card">
//         <h3>My Profile</h3>
//         <img src={profileIcon} alt="Profile" className="hr-home-icon" />
//       </div>
//       <div className="hr-home-card">
//         <h3>Apply Leave</h3>
//         <img src={approversIcon} alt="Approvers" className="hr-home-icon" />
//       </div>

//     </div>
//   );
// };

// export default CardLayout;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../HRHome/HRCards.css";
import timesheetIcon from "../../../Assets/add.png";
import projectsIcon from "../HRHome/Images/leaverep.png";
import assignmentsIcon from "../HRHome/Images/attendan.png";
import profileIcon from "../HRHome/Images/myuser.png";
import approversIcon from "../HRHome/Images/leaveap.png";
import chartPlaceholder from "../HRHome/Images/timesheet1.png";

const CardLayout = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card-layout">
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/time-report")}
      >
        <h3>Time Sheet</h3>
        <img src={chartPlaceholder} alt="Chart" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/view-employee")}
      >
        <h3>View Employee Management</h3>
        <img src={timesheetIcon} alt="Timesheet" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-report")}
      >
        <h3>Leave Report</h3>
        <img src={projectsIcon} alt="Projects" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-calender")}
      >
        <h3>Holiday Calender</h3>
        <img src={assignmentsIcon} alt="Assignments" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/profile")}
      >
        <h3>My Profile</h3>
        <img src={profileIcon} alt="Profile" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/apply-leave")}
      >
        <h3>Apply Leave</h3>
        <img src={approversIcon} alt="Approvers" className="hr-home-icon" />
      </div>
    </div>
  );
};

export default CardLayout;
