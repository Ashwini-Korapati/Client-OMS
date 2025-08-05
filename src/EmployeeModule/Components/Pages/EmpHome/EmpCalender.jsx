import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectHolidays } from '../../../../HRModule/Redux/Slices/leaveCalendarSlice'
import '../EmpHome/EmpCalender.css'

const HolidayList = () => {
  const holidaysByMonth = useSelector(selectHolidays);
  const loading = useSelector(state => state.leaveCalendar.loading);
  const error = useSelector(state => state.leaveCalendar.error);

  // Geting todays date for comparison 
  const today = new Date();

  // Filtering and flatten upcoming holidays across months, then limit to x i took
  const upcomingHolidays = holidaysByMonth
    .filter(monthData => Array.isArray(monthData.holidays)) // to keep holidays in array 
    .flatMap(monthData => {
      // Filter out past holidays for the current month
      return monthData.holidays.filter(holiday => {
        // Convert holiday date to Date object
        const holidayDate = new Date(holiday.date); 
        // Include only upcoming or today's holidays
        return holidayDate >= today; 
      });
    })
    .slice(0, 4); // Limit to the next 5 holidays

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  

  return (
    <div className="holiday2-list-container">
      <div className="holiday-list-header">
        <h3 className="holiday-list-title">Upcoming Holidays</h3>
        <NavLink to="/emp-dashboard/leave-calender" className="arrow-icon">
          <IoIosArrowForward />
        </NavLink>
      </div>
      {upcomingHolidays.length > 0 ? (
        <div className="holiday-list">
          {upcomingHolidays.map((holiday, index) => (
            <div key={index} className="holiday-card">
              <div className="holiday-date">
                <span className="holiday-day">{holiday.date}</span>
                <span className="holiday-weekday">{holiday.day}</span>
              </div>
              <div className="holiday-details">
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