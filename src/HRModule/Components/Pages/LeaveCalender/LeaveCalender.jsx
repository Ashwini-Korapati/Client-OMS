import React, { useState, useEffect } from 'react';
import { Select, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidays, selectHolidays } from '../../../Redux/Slices/leaveCalendarSlice';
import '../LeaveCalender/LeaveCalender.css';

const { Option } = Select;

const LeaveCalendar = () => {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
  const loading = useSelector((state) => state.leaveCalendar.loading);
  const error = useSelector((state) => state.leaveCalendar.error);
  const [year, setYear] = useState(2024);

  const handleYearChange = (value) => {
    setYear(value);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

  const holidaysByMonth = holidaysByYear.reduce((acc, holiday) => {
    const month = new Date(holiday.date).toLocaleString('en-us', { month: 'long' });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(holiday);
    return acc;
  }, {});

  return (
    <div className="calendar-container">
      <div className="calendar-image"></div>
      <h2 className='holiday-h2'>Holiday Calendar</h2>
      <Select
        className="year-select"
        value={year}
        onChange={handleYearChange}
      >
        <Option value={2025}>2025</Option>
        <Option value={2023}>2023</Option>
        <Option value={2024}>2024</Option>
      </Select>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <div className="h-card-grid">
          {Object.keys(holidaysByMonth).length > 0 ? Object.keys(holidaysByMonth).map((month) => (
            <div key={month} className="h-card">
              <h3>{month} {year}</h3>
              {holidaysByMonth[month].map((holiday) => (
                <div key={holiday.date} className="holiday">
                  <div className="holiday-date">{new Date(holiday.date).getDate()}
                    <div className="holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
                  </div>
                  <div className="holiday-details">
                    <div className="holiday-name">{holiday.name}</div>
                  </div>
                </div>
              ))}s
            </div>
          )) : (
            <div className="no-holidays">No Holidays for {year}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeaveCalendar;
