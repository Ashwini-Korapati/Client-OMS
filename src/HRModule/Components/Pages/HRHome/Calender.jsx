import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectHolidays } from '../../../Redux/Slices/leaveCalendarSlice';
import './Calender.css';

const HolidayList = () => {
  const holidaysByMonth = useSelector(selectHolidays);
  const loading = useSelector(state => state.leaveCalendar.loading);
  const error = useSelector(state => state.leaveCalendar.error);
  
  const today = new Date();

  const upcomingHolidays = holidaysByMonth
    .filter(monthData => Array.isArray(monthData.holidays))
    .flatMap(monthData => {
      return monthData.holidays.filter(holiday => {
        const holidayDate = new Date(holiday.date);
        return holidayDate >= today;
      });
    })
    .slice(0, 8);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="holiday-list-container">
      <div className="holiday-list-header">
        <h3 className="holiday-list-title">Upcoming Holidays</h3>
        <NavLink to="/hr-dashboard/leave-calender" className="arrow-icon">
          <IoIosArrowForward />
        </NavLink>
      </div>
      {upcomingHolidays.length > 0 ? (
        <div className="holiday-list-table">
          {upcomingHolidays.map((holiday, index) => (
            <div key={index} className="holiday-grid-row">
              {/* This is the first column for date and day */}
              <div className="holiday-date-cell">
                <span className="holiday-day">{holiday.date}</span>
                <span className="holiday-weekday">{holiday.day}</span>
              </div>
              {/* This is the second column for the holiday name */}
              <div className="holiday-name-cell">
                <span className="holiday-name">{holiday.name}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-holidays-message">No upcoming holidays found.</p>
      )}
    </div>
  );
};

export default HolidayList;