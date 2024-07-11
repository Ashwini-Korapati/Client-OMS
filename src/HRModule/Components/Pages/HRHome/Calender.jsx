// import React, { useState } from 'react';
// import { Calendar, Modal, theme } from 'antd';
// import './Calender.css'


// const holidays = {
//   '2024-06-16': 'Eid al-Fitr',
//   '2024-07-04': 'Independence Day',
  
// };

// const Calender = () => {
//   const { token } = theme.useToken();
//   const [holidayReason, setHolidayReason] = useState('');

//   const onPanelChange = (value, mode) => {
//     console.log(value.format('YYYY-MM-DD'), mode);
//   };

//   const dateCellRender = (value) => {
//     const date = value.format('YYYY-MM-DD');
//     if (holidays[date]) {
//       return <div className="holiday-dot" title={holidays[date]}></div>;
//     }
//     return null;
//   };

//   const handleDateClick = (value) => {
//     const date = value.format('YYYY-MM-DD');
//     if (holidays[date]) {
//       setHolidayReason(holidays[date]);
//       Modal.info({
//         title: 'Holiday Due ',
//         content: (
//           <div>
//             <p>{holidays[date]}</p>
//           </div>
//         ),
//       });
//     }
//   };

//   const wrapperStyle = {
//     width: 500,
//     border: `1px solid black${token.colorBorderSecondary}`,
//     borderRadius: token.borderRadiusLG,
//   };

//   return (
//     <div classNane='main-calender'>
//     <div className="Calender" style={wrapperStyle}>
//       <Calendar
//         className="calendar-c"
//         fullscreen={false}
//         onPanelChange={onPanelChange}
//         dateCellRender={dateCellRender}
//         onSelect={handleDateClick}
//       />
//     </div>
//     </div>
//   );
// };

// export default Calender;



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
        {/* Use NavLink for navigation */}
        <NavLink to="/hr-dashboard/leave-calender" className="arrow-icon" activeClassName="active">
          <IoIosArrowForward />
        </NavLink>
        {/* Alternatively, you can use onClick event */}
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
