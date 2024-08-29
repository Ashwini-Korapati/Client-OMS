// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { IoIosArrowForward } from "react-icons/io";
// import { useSelector } from 'react-redux';
// import { selectHolidays } from '../../../Redux/Slices/leaveCalendarSlice';
// import '../HRHome/Calender.css';

// const HolidayList = () => {
//   const holidaysByMonth = useSelector(selectHolidays);
//   const loading = useSelector(state => state.leaveCalendar.loading);
//   const error = useSelector(state => state.leaveCalendar.error);
// console.log(holidaysByMonth)
//   // Get the current month
//   const currentMonthIndex = new Date().getMonth(); // JS months are 0-based

//   // Extract and flatten holidays for the current month
//   const upcomingHolidays = holidaysByMonth
//     .filter(monthData => monthData.holidays && Array.isArray(monthData.holidays)) // Filter out "No holidays"
//     .flatMap(monthData => monthData.holidays) // Flatten the holidays array
//     .slice(0, 5); // Limit to the next 5 holidays

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (upcomingHolidays.length === 0) return <div>No holidays found.</div>;

//   return (
//     <div className="holiday1-list-container">
//       <div className="holiday-list-header">
//         <h3 className="holiday-list-title">Upcoming Holidays</h3>
//         <NavLink to="/hr-dashboard/leave-calender" className="arrow-icon">
//           <IoIosArrowForward />
//         </NavLink>
//       </div>
//       <div className="holiday-list">
//         {upcomingHolidays.map((holiday, index) => (
//           <div key={index} className="holiday-card">
//             <div className="holiday-date">
//               <span className="holiday-day">{holiday.date}</span>
//               <span className="holiday-weekday">{holiday.day}</span>
//             </div>
//             <div className="holiday-details">
//               <span className="holiday-name">{holiday.name}</span>
//               {holiday.applyLink && <a href={holiday.applyLink} className="holiday-apply">Apply</a>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HolidayList;


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

  // Filtering  and flatten upcoming holidays across months, then limit to x i took
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
  if (upcomingHolidays.length === 0) return <div>No upcoming holidays found.</div>;

  return (
    <div className="holiday2-list-container">
      <div className="holiday-list-header">
        <h3 className="holiday-list-title">Upcoming Holidays</h3>
        <NavLink to="/emp-dashboard/leave-calender" className="arrow-icon">
          <IoIosArrowForward />
        </NavLink>
      </div>
      <div className="holiday-list">
        {upcomingHolidays.map((holiday, index) => (
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
