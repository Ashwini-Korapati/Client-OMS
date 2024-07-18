
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import '../HRHome/Calender.css'

const holidays = [
  { date: '15 Aug', day: 'Thursday', name: 'Independence Day' },
  { date: '07 Sep', day: 'Saturday', name: 'Ganesh Chaturthi' },
  { date: '02 Oct', day: 'Wednesday', name: 'Gandhi Jayanthi' },
  { date: '11 Oct', day: 'Friday', name: 'Ayudha Puja/Mahanavami', applyLink: '#' }
];

const HolidayList = () => {
  const navigate = useNavigate();

  const navigateToCalendar = () => {
    navigate('/hr-dashboard/leave-calender');
  };

  return (
    <div className="holiday-list-container">
      <div className="holiday-list-header">
        <h3 className="holiday-list-title">Upcoming Holidays</h3>
        <NavLink to="/hr-dashboard/leave-calender" className="arrow-icon" activeClassName="active">
          <IoIosArrowForward />
        </NavLink>
        {/* <IoIosArrowForward className="arrow-icon" onClick={navigateToCalendar} /> */}
      </div>
      <div className="holiday-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <div className="holiday-date">
              <span className="holiday-day">{holiday.date}</span>
              <span className="holiday-weekday">{holiday.day}</span>
            </div>
            <div className="holiday-details">
              <span className="holiday-name">{holiday.name}</span>
              {holiday.applyLink && <a href={holiday.applyLink} className="holiday-apply">Apply</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidayList;
