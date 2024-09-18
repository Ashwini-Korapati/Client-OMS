import React, { useState } from 'react';
import './LeaveHome.css';
import EmpApplyLeave from '../EmpApplyLeave'
import LeavePending from '../LeavePending/LeavePending';
import LeaveHistory from '../LeaveHistory/LeaveHistory';

const LeaveHome = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="leavehome-container">
      <h1 className="leavehome-heading">LEAVE</h1>
      <div className="leavehome-tabs">
        <div 
          className={`leavehome-tab ${activeTab === "1" ? "active" : ""}`} 
          onClick={() => setActiveTab("1")}
        >
          Apply
        </div>
        <div 
          className={`leavehome-tab ${activeTab === "2" ? "active" : ""}`} 
          onClick={() => setActiveTab("2")}
        >
          Pending
        </div>
        <div 
          className={`leavehome-tab ${activeTab === "3" ? "active" : ""}`} 
          onClick={() => setActiveTab("3")}
        >
          History
        </div>
      </div>

      <div className="leavehome-tab-content">
        {activeTab === "1" && (
          <div className="leavehome-details">
            <EmpApplyLeave/>
          </div>
        )}
        {activeTab === "2" && (
          <div className="leavehome-details">
            <LeavePending />
          </div>
        )}
        {activeTab === "3" && (
          <div className="leavehome-details">
            <LeaveHistory />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveHome;
