// import React, { useState } from 'react';
// import './TimeSheet.css';
// import { useNavigate } from 'react-router-dom';

// const TimeSheet = () => {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   const weeks = [
//     { dateRange: '22-JUN-2024 To 28-JUN-2024', status: 'Submitted for Approval', billable: 27, nonBillable: 0, timeOff: 18, truTime: 0 },
//     { dateRange: '15-JUN-2024 To 21-JUN-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
//     { dateRange: '08-JUN-2024 To 14-JUN-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
//     { dateRange: '01-JUN-2024 To 07-JUN-2024', status: 'Approved', billable: 36, nonBillable: 0, timeOff: 9, truTime: 0 },
//     { dateRange: '25-MAY-2024 To 31-MAY-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
//     { dateRange: '18-MAY-2024 To 24-MAY-2024', status: 'Approved', billable: 9, nonBillable: 0, timeOff: 72, truTime: 0 },
//   ];

//   const handleWeekClick = (week) => {
//     navigate(`/time-report/${week.dateRange}`);
//   };

//   const filteredWeeks = weeks.filter(week =>
//     week.dateRange.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="timesheet-container">
//       <div className="timesheet-header">Timesheet Summary</div>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search by date range"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button className="search-button">Search</button>
//       </div>
//       {filteredWeeks.map((week, index) => (
//         <div
//           key={index}
//           className={`timesheet-week ${week.status === 'Submitted for Approval' ? 'submitted' : 'approved'}`}
//           onClick={() => handleWeekClick(week)}
//         >
//           <div className="week-info">
//             <div className="week-dates">{week.dateRange}</div>
//             <div className="week-status">{week.status}</div>
//           </div>
//           <div className="week-hours">
//             <div className="hours-item">
//               <span className="hours-label">Billable Project Hrs</span>
//               <span className="hours-value">{week.billable}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Non-Billable Project Hrs</span>
//               <span className="hours-value">{week.nonBillable}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Time off/Holiday Hrs</span>
//               <span className="hours-value">{week.timeOff}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Tru Time Hrs</span>
//               <span className="hours-value">{week.truTime}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TimeSheet;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeSheet.css';

const TimeSheet = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const weeks = [
    { dateRange: '22-JUN-2024 To 28-JUN-2024', status: 'Submitted for Approval', billable: 27, nonBillable: 0, timeOff: 18, truTime: 0 },
    { dateRange: '15-JUN-2024 To 21-JUN-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
    { dateRange: '08-JUN-2024 To 14-JUN-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
    { dateRange: '01-JUN-2024 To 07-JUN-2024', status: 'Approved', billable: 36, nonBillable: 0, timeOff: 9, truTime: 0 },
    { dateRange: '25-MAY-2024 To 31-MAY-2024', status: 'Approved', billable: 45, nonBillable: 0, timeOff: 0, truTime: 0 },
    { dateRange: '18-MAY-2024 To 24-MAY-2024', status: 'Approved', billable: 9, nonBillable: 0, timeOff: 72, truTime: 0 },
  ];

  const handleWeekClick = (week) => {
    navigate(`/hr-dashboard/time-report`);
  };

  const filteredWeeks = weeks.filter(week =>
    week.dateRange.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="timesheet-container">
      <div className="timesheet-header">Timesheet Summary</div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by date range"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>
      {filteredWeeks.map((week, index) => (
        <div
          key={index}
          className={`timesheet-week ${week.status === 'Submitted for Approval' ? 'submitted' : 'approved'}`}
          onClick={() => handleWeekClick(week)}
        >
          <div className="week-info">
            <div className="week-dates">{week.dateRange}</div>
            <div className="week-status">{week.status}</div>
          </div>
          <div className="week-hours">
            <div className="hours-item">
              <span className="hours-label">Billable Project Hrs</span>
              <span className="hours-value">{week.billable}</span>
            </div>
            <div className="hours-item">
              <span className="hours-label">Non-Billable Project Hrs</span>
              <span className="hours-value">{week.nonBillable}</span>
            </div>
            <div className="hours-item">
              <span className="hours-label">Time off/Holiday Hrs</span>
              <span className="hours-value">{week.timeOff}</span>
            </div>
            <div className="hours-item">
              <span className="hours-label">Tru Time Hrs</span>
              <span className="hours-value">{week.truTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSheet;








// import React, { useState, useEffect } from 'react';
// import './TimeSheet.css';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchWeeks } from '../../../../Redux/Slices/TimesheetSlice';

// const TimeSheet = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");
  
//   const { weeks, status } = useSelector((state) => state.timesheet);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchWeeks(search));
//     }
//   }, [search, dispatch, status]);

//   const handleWeekClick = (week) => {
//     navigate(`/time-report-summary/${week.dateRange}`);
//   };

//   const filteredWeeks = weeks.filter(week =>
//     week.dateRange.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="timesheet-container">
//       <div className="timesheet-header">Timesheet Summary</div>
//       <div className="timesheet-instructions">Please follow basic troubleshooting if you face any discrepancies in accessing the page.</div>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search by date range"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button
//           className="search-button"
//           onClick={() => dispatch(fetchWeeks(search))}
//         >
//           Search
//         </button>
//       </div>
//       {status === 'loading' && <div>Loading...</div>}
//       {status === 'failed' && <div>Error loading data</div>}
//       {status === 'succeeded' && filteredWeeks.map((week, index) => (
//         <div
//           key={index}
//           className={`timesheet-week ${week.status === 'Submitted for Approval' ? 'submitted' : 'approved'}`}
//           onClick={() => handleWeekClick(week)}
//         >
//           <div className="week-info">
//             <div className="week-dates">{week.dateRange}</div>
//             <div className="week-status">{week.status}</div>
//           </div>
//           <div className="week-hours">
//             <div className="hours-item">
//               <span className="hours-label">Billable Project Hrs</span>
//               <span className="hours-value">{week.billable}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Non-Billable Project Hrs</span>
//               <span className="hours-value">{week.nonBillable}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Time off/Holiday Hrs</span>
//               <span className="hours-value">{week.timeOff}</span>
//             </div>
//             <div className="hours-item">
//               <span className="hours-label">Tru Time Hrs</span>
//               <span className="hours-value">{week.truTime}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TimeSheet;
