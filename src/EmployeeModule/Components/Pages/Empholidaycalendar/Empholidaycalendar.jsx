



import React, { useState, useEffect } from 'react';
import { Select, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchHolidays } from '../../../../EmployeeModule/Redux/EmpholidaycalenderSlice'
import '../../../Components/Pages/Empholidaycalendar/Empholidaycalendar.css'

const { Option } = Select;

const LeaveCalendar = () => {
  const dispatch = useDispatch();
  const holidaysByMonth = useSelector((state) => state.leaveCalendar.holidays);
  const loading = useSelector((state) => state.leaveCalendar.loading);
  const error = useSelector((state) => state.leaveCalendar.error);
  const [year, setYear] = useState(2024);

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  const handleYearChange = (value) => {
    setYear(value);
  };

  return (
    <div className="emp-calendar-container">
      <div className="emp-holiday-calendar-image"></div>
      <h2 className="holiday-h2">Holiday Calendar</h2>
      {/* <NavLink to={'/hr-dashboard/hr-home'}>
      <button>Back</button>
      </NavLink> */}
      <div className="emp-holiday-year">
        <Select
          className="emp-holiday-year-select"
          value={year}
          onChange={handleYearChange}
        >
          <Option value={2025}>2025</Option>
          <Option value={2024}>2024</Option>
          <Option value={2023}>2023</Option>
        </Select>
      </div>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <div className="emp-card-grid">
          {holidaysByMonth.map((monthData) => (
            <div key={monthData.month} className="emp-card">
              <h3>{monthData.month} {year}</h3>
              {Array.isArray(monthData.holidays) && monthData.holidays.length > 0 ? (
                monthData.holidays.map((holiday) => (
                  <div key={holiday.id} className="emp-holiday">
                    <div className="emp-holiday-date">
                      {new Date(holiday.date).getDate()}
                    </div>
                    <div className="emp-holiday-day">
                      {holiday.day}
                    </div>
                    <div className="emp-holiday-name">
                      {holiday.name} ({holiday.status})
                    </div>
                  </div>
                ))
              ) : (
                <div className="emp-no-holidays">No Holidays for {monthData.month}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveCalendar;

