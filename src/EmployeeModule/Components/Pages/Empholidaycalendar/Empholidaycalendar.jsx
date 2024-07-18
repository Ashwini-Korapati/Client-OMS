// // // // import React, { useState, useEffect } from 'react';
// // // // import { Select, Spin, Alert } from 'antd';
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import { fetchHolidays, selectHolidays } from '../../../../HRModule/Redux/Slices/leaveCalendarSlice'
// // // // import '../Empholidaycalendar/Empholidaycalendar.css'

// // // // const { Option } = Select;

// // // // const LeaveCalendar = () => {
// // // //   const dispatch = useDispatch();
// // // //   const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
// // // //   const loading = useSelector((state) => state.leaveCalendar.loading);
// // // //   const error = useSelector((state) => state.leaveCalendar.error);
// // // //   const [year, setYear] = useState(2024);

// // // //   const handleYearChange = (value) => {
// // // //     setYear(value);
// // // //   };

// // // //   useEffect(() => {
// // // //     dispatch(fetchHolidays());
// // // //   }, [dispatch]);

// // // //   const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

// // // //   const holidaysByMonth = holidaysByYear.reduce((acc, holiday) => {
// // // //     const month = new Date(holiday.date).toLocaleString('en-us', { month: 'long' });
// // // //     if (!acc[month]) {
// // // //       acc[month] = [];
// // // //     }
// // // //     acc[month].push(holiday);
// // // //     return acc;
// // // //   }, {});

// // // //   return (
// // // //     <div className="emp-calendar-container">
// // // //       <div className="emp-holiday-calendar-image"></div>
// // // //       <h2 className='emp-holiday-h2'>Holiday Calendar</h2>
// // // //       <div className='emp-holiday-year'>
// // // //       <Select
// // // //         className='emp-holiday-year-select'
// // // //         value={year}
// // // //         onChange={handleYearChange}
// // // //       >
// // // //         <Option value={2025}>2025</Option>
// // // //         <Option value={2023}>2023</Option>
// // // //         <Option value={2024}>2024</Option>
// // // //       </Select></div>
// // // //       {loading ? (
// // // //         <Spin size="large" />
// // // //       ) : error ? (
// // // //         <Alert message="Error" description={error} type="error" showIcon />
// // // //       ) : (
// // // //         <div className="emp-h-card-grid">
// // // //           {Object.keys(holidaysByMonth).length > 0 ? Object.keys(holidaysByMonth).map((month) => (
// // // //             <div key={month} className="emp-h-card">
// // // //               <h3>{month} {year}</h3>
// // // //               {holidaysByMonth[month].map((holiday) => (
// // // //                 <div key={holiday.date} className="emp-holiday">
// // // //                   <div className="emp-holiday-date">{new Date(holiday.date).getDate()}
// // // //                     <div className="emp-holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
// // // //                   </div>
// // // //                   <div className="emp-holiday-details">
// // // //                     <div className="emp-holiday-name">{holiday.name}</div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )) : (
// // // //             <div className="emp-no-holidays">No Holidays for {year}</div>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LeaveCalendar;


// // // import React, { useState, useEffect } from 'react';
// // // import { Select, Spin, Alert } from 'antd';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { fetchHolidays, selectHolidays } from '../../../../HRModule/Redux/Slices/leaveCalendarSlice';
// // // import '../Empholidaycalendar/Empholidaycalendar.css';

// // // const { Option } = Select;

// // // const LeaveCalendar = () => {
// // //   const dispatch = useDispatch();
// // //   const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
// // //   const loading = useSelector((state) => state.leaveCalendar.loading);
// // //   const error = useSelector((state) => state.leaveCalendar.error);
// // //   const [year, setYear] = useState(2024);

// // //   const handleYearChange = (value) => {
// // //     setYear(value);
// // //   };

// // //   useEffect(() => {
// // //     dispatch(fetchHolidays());
// // //   }, [dispatch]);

// // //   const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

// // //   const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en-us', { month: 'long' }));

// // //   const holidaysByMonth = months.reduce((acc, month) => {
// // //     acc[month] = holidaysByYear.filter(holiday => new Date(holiday.date).toLocaleString('en-us', { month: 'long' }) === month);
// // //     return acc;
// // //   }, {});

// // //   return (
// // //     <div className="emp-calendar-container">
// // //       <div className="emp-holiday-calendar-image"></div>
// // //       <h2 className='emp-holiday-h2'>Holiday Calendar</h2>
// // //       <div className='emp-holiday-year'>
// // //         <Select
// // //           className='emp-holiday-year-select'
// // //           value={year}
// // //           onChange={handleYearChange}
// // //         >
// // //           <Option value={2025}>2025</Option>
// // //           <Option value={2023}>2023</Option>
// // //           <Option value={2024}>2024</Option>
// // //         </Select>
// // //       </div>
// // //       {loading ? (
// // //         <Spin size="large" />
// // //       ) : error ? (
// // //         <Alert message="Error" description={error} type="error" showIcon />
// // //       ) : (
// // //         <div className="emp-h-card-grid">
// // //           {months.map((month) => (
// // //             <div key={month} className="emp-h-card">
// // //               <h3>{month} {year}</h3>
// // //               {holidaysByMonth[month].length > 0 ? (
// // //                 holidaysByMonth[month].map((holiday) => (
// // //                   <div key={holiday.date} className="emp-holiday">
// // //                     <div className="emp-holiday-date">{new Date(holiday.date).getDate()}
// // //                       <div className="emp-holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
// // //                     </div>
// // //                     <div className="emp-holiday-details">
// // //                       <div className="emp-holiday-name">{holiday.name}</div>
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <div className="emp-no-holidays">No Holidays for {month}</div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default LeaveCalendar;


// // import React, { useState, useEffect } from 'react';
// // import { Select, Spin, Alert } from 'antd';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchHolidays, selectHolidays } from '../../../Redux/EmpholidaycalenderSlice'
// // import '../Empholidaycalendar/Empholidaycalendar.css';

// // const { Option } = Select;

// // const LeaveCalendar = () => {
// //   const dispatch = useDispatch();
// //   const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
// //   const loading = useSelector((state) => state.empleaveCalendar.loading);
// //   const error = useSelector((state) => state.empleaveCalendar.error);
// //   const [year, setYear] = useState(2024);

// //   const handleYearChange = (value) => {
// //     setYear(value);
// //   };

// //   useEffect(() => {
// //     dispatch(fetchHolidays());
// //   }, [dispatch]);

// //   const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

// //   const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en-us', { month: 'long' }));

// //   const holidaysByMonth = months.reduce((acc, month) => {
// //     acc[month] = holidaysByYear.filter(holiday => new Date(holiday.date).toLocaleString('en-us', { month: 'long' }) === month);
// //     return acc;
// //   }, {});

// //   return (
// //     <div className="emp-calendar-container">
// //       <div className="emp-holiday-calendar-image"></div>
// //       <h2 className='emp-holiday-h2'>Holiday Calendar</h2>
// //       <div className='emp-holiday-year'>
// //         <Select
// //           className='emp-holiday-year-select'
// //           value={year}
// //           onChange={handleYearChange}
// //         >
// //           <Option value={2025}>2025</Option>
// //           <Option value={2023}>2023</Option>
// //           <Option value={2024}>2024</Option>
// //         </Select>
// //       </div>
// //       {loading ? (
// //         <Spin size="large" />
// //       ) : error ? (
// //         <Alert message="Error" description={error} type="error" showIcon />
// //       ) : (
// //         <div className="emp-h-card-grid">
// //           {months.map((month) => (
// //             <div key={month} className="emp-h-card">
// //               <h3>{month} {year}</h3>
// //               {holidaysByMonth[month].length > 0 ? (
// //                 holidaysByMonth[month].map((holiday) => (
// //                   <div key={holiday.date} className="emp-holiday">
// //                     <div className="emp-holiday-date">{new Date(holiday.date).getDate()}</div>
// //                     <div className="emp-holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
// //                     <div className="emp-holiday-name">{holiday.name}</div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="emp-no-holidays">No Holidays for {month}</div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LeaveCalendar;
// import React, { useState, useEffect } from 'react';
// import { Select, Spin, Alert } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchHolidays, selectHolidays } from '../../../Redux/EmpholidaycalenderSlice'
// import '../Empholidaycalendar/Empholidaycalendar.css'

// const { Option } = Select;

// const LeaveCalendar = () => {
//   const dispatch = useDispatch();
//   const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
//   const loading = useSelector((state) => state.leaveCalendar.loading);
//   const error = useSelector((state) => state.leaveCalendar.error);
//   const [year, setYear] = useState(2024);

//   const handleYearChange = (value) => {
//     setYear(value);
//   };

//   useEffect(() => {
//     dispatch(fetchHolidays());
//   }, [dispatch]);

//   // Filter holidays for the selected year
//   const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

//   // Group holidays by month
//   const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en-us', { month: 'long' }));
//   const holidaysByMonth = months.reduce((acc, month) => {
//     acc[month] = holidaysByYear.filter(holiday => new Date(holiday.date).toLocaleString('en-us', { month: 'long' }) === month);
//     return acc;
//   }, {});

//   return (
//     <div className="calendar-container">
//       <div className="holiday-calendar-image"></div>
//       <h2 className="holiday-h2">Holiday Calendar</h2>
//       <div className='holiday-year'>
//         <Select
//           className='holiday-year-select'
//           value={year}
//           onChange={handleYearChange}
//         >
//           <Option value={2025}>2025</Option>
//           <Option value={2023}>2023</Option>
//           <Option value={2024}>2024</Option>
//         </Select>
//       </div>
//       {loading ? (
//         <Spin size="large" />
//       ) : error ? (
//         <Alert message="Error" description={error} type="error" showIcon />
//       ) : (
//         <div className="h-card-grid">
//           {months.map((month) => (
//             <div key={month} className="h-card">
//               <h3>{month} {year}</h3>
//               {holidaysByMonth[month].length > 0 ? (
//                 holidaysByMonth[month].map((holiday) => (
//                   <div key={holiday.date} className="holiday">
//                     <div className="holiday-date">{new Date(holiday.date).getDate()}</div>
//                     <div className="holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
//                     <div className="holiday-name">{holiday.name}</div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-holidays">No Holidays for {month}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LeaveCalendar;


import React, { useState, useEffect } from 'react';
import { Select, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidays, selectHolidays } from '../../../Redux/EmpholidaycalenderSlice'
import '../Empholidaycalendar/Empholidaycalendar.css'

const { Option } = Select;

const LeaveCalendar = () => {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays) || []; // Ensure holidays is an empty array if undefined
  const loading = useSelector((state) => state.leaveCalendaremp.loading);
  const error = useSelector((state) => state.leaveCalendaremp.error);
  const [year, setYear] = useState(2024);

  const handleYearChange = (value) => {
    setYear(value);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  // Filter holidays for the selected year
  const holidaysByYear = holidays.filter(holiday => new Date(holiday.date).getFullYear() === year);

  // Group holidays by month
  const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en-us', { month: 'long' }));
  const holidaysByMonth = months.reduce((acc, month) => {
    acc[month] = holidaysByYear.filter(holiday => new Date(holiday.date).toLocaleString('en-us', { month: 'long' }) === month);
    return acc;
  }, {});

  return (
    <div className="calendar-container">
      <div className="holiday-calendar-image"></div>
      <h2 className="holiday-h2">Holiday Calendar</h2>
      <div className='holiday-year'>
        <Select
          className='holiday-year-select'
          value={year}
          onChange={handleYearChange}
        >
          <Option value={2025}>2025</Option>
          <Option value={2023}>2023</Option>
          <Option value={2024}>2024</Option>
        </Select>
      </div>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <div className="h-card-grid">
          {months.map((month) => (
            <div key={month} className="h-card">
              <h3>{month} {year}</h3>
              {holidaysByMonth[month].length > 0 ? (
                holidaysByMonth[month].map((holiday) => (
                  <div key={holiday.date} className="holiday">
                    <div className="holiday-date">{new Date(holiday.date).getDate()}</div>
                    <div className="holiday-day">{new Date(holiday.date).toLocaleString('en-us', { weekday: 'short' })}</div>
                    <div className="holiday-name">{holiday.name}</div>
                  </div>
                ))
              ) : (
                <div className="no-holidays">No Holidays for {month}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveCalendar;
