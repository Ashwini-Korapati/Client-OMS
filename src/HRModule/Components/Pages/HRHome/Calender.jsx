import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidays1, selectHolidays } from '../../../Redux/Slices/homeholidayleaveSlice'
import '../HRHome/Calender.css';

const HolidayList = () => {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays);
  const loading = useSelector(state => state.leaveCalendar.loading);
  const error = useSelector(state => state.leaveCalendar.error);

  useEffect(() => {
    dispatch(fetchHolidays1());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="holiday-list-container">
      <div className="holiday-list-header">
        <h3 className="holiday-list-title">Upcoming Holidays</h3>
        <NavLink to="/hr-dashboard/leave-calender" className="arrow-icon" activeClassName="active">
          <IoIosArrowForward />
        </NavLink>
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
