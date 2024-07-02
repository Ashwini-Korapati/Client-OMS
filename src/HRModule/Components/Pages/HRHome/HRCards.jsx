import React from 'react';
import './HRCards.css';
import attendancepic from '../../../Assets/attendancepic.png';
import leaves from '../../../Assets/leavespic.avif';
import totalemp from '../../../Assets/totalemp.png';

const HRCards = () => {
  return (
    <div className="hrc-dashboard">
      <div className="hrc-card">
        <div className="hrc-content">
          <h2>150</h2>
          <h5>Attendance</h5>
        </div>
        <div className="hrc-icon">
          <img src={attendancepic} alt="Attendance" />
        </div>
      </div>
      <div className="hrc-card">
        <div className="hrc-content">
          <h2>17</h2>
          <h5>Leaves To Approve</h5>
        </div>
        <div className="hrc-icon">
          <img src={leaves} alt="Leaves To Approve" />
        </div>
      </div>
      <div className="hrc-card">
        <div className="hrc-content">
          <h2>12</h2>
          <h5>Total Employees</h5>
        </div>
        <div className="hrc-icon">
          <img src={totalemp} alt="Total Employee" />
        </div>
      </div>
    </div>
  );
};

export default HRCards;