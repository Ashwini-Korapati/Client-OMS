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
    <div className='card-layout'>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/time-report")}
      >
        <h3>Time Sheet</h3>
        <img src={chartPlaceholder} alt="Time Sheet Icon" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/view-employee")}
      >
        <h3>Employee Management</h3>
        <img src={timesheetIcon} alt="Employee Management Icon" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-report-detail")}
      >
        <h3>Leave Management</h3>
        <img src={projectsIcon} alt="Leave Management Icon" className="hr-home-icon" />
      </div>
    </div>
  );
};

export default CardLayout;