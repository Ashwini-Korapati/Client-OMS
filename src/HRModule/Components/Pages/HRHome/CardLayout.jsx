import React from "react";
import { useNavigate } from "react-router-dom";
import "../HRHome/HRCards.css";
import assignmentsIcon from "../HRHome/Images/attendan.png";
import projectsIcon from "../HRHome/Images/leaverep.png";
import approversIcon from "../HRHome/Images/leaveap.png";

const LeaveReportDetail = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card-layout">
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-calender")}
      >
        <h3>Holiday Calendar</h3>
        <img src={assignmentsIcon} alt="Assignments" className="hr-home-icon" />
      </div>
      <div
        className="hr-home-card"
        onClick={() => handleCardClick("/hr-dashboard/leave-report")}
      >
        <h3>Leave Report</h3>
        <img src={projectsIcon} alt="Profile" className="hr-home-icon" />
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

export default LeaveReportDetail;
