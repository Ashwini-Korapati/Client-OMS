
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../HRHome/HRCards.css";
// import timesheetIcon from "../../../Assets/add.png";
// import projectsIcon from "../HRHome/Images/leaverep.png";
// import assignmentsIcon from "../HRHome/Images/attendan.png";
// import profileIcon from "../HRHome/Images/myuser.png";
// import approversIcon from "../HRHome/Images/leaveap.png";
// import chartPlaceholder from "../HRHome/Images/timesheet1.png";

// const CardLayout = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="card-layout">
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/time-report")}
//       >
//         <h3>Time Sheet</h3>
//         <img src={chartPlaceholder} alt="Chart" className="hr-home-icon" />
//       </div>
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/view-employee")}
//       >
//         <h3> Employee Management</h3>
//         <img src={timesheetIcon} alt="Timesheet" className="hr-home-icon" />
//       </div>
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/leave-report")}
//       >
//         <h3>Leave Report</h3>
//         <img src={projectsIcon} alt="Projects" className="hr-home-icon" />
//       </div>
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/leave-calender")}
//       >
//         <h3>Holiday Calender</h3>
//         <img src={assignmentsIcon} alt="Assignments" className="hr-home-icon" />
//       </div>
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/profile")}
//       >
//         <h3>My Profile</h3>
//         <img src={profileIcon} alt="Profile" className="hr-home-icon" />
//       </div>
//       <div
//         className="hr-home-card"
//         onClick={() => handleCardClick("/hr-dashboard/apply-leave")}
//       >
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
import chartPlaceholder from "../HRHome/Images/timesheet1.png";

const CardLayout = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='main-card-layout'>
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
        <h3>Employee Management</h3>
        <img src={timesheetIcon} alt="Timesheet" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-report-detail")}
      >
        <h3>Leave Management</h3>
        <img src={projectsIcon} alt="Projects" className="hr-home-icon" />
      </div>
    </div>
    </div>
 
  );
};

export default CardLayout;
