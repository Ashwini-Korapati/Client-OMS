import React, { useEffect, useState } from 'react';
import './EmpCards.css';
import cal from '../../../Assets/calender.png'
import holiday from '../../../Assets/holiday.png'
import holiday1 from '../../../Assets/calendar1.png'
import { NavLink } from 'react-router-dom';

const Perfcards = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
  };

  const formatDay = (date) => {
    const options = { weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="emp-card-perfamnce-dashboard">
      <div className="emp-p-card">
        <div className="emp-p-content">
          <h4>{formatDate(currentDate)}</h4>
          <p>{formatDay(currentDate)}</p>
          <p>{formatTime(currentDate)}</p>
        </div>
        <div className="emp-p-icon">
          <img src={cal} alt="Total Employees" />
        </div>
      </div>

      <div className="emp-p-card">
        <div className="emp-p-content">
          <p>Total Leave Balance</p>
          <h4>20</h4>
        </div>
        <div className="emp-p-icon">
          <img src={holiday} alt="Leave balence" />
        </div>
      </div>

      <div className="emp-p-card">
        <div className="emp-p-content">
          <p>Apply for Leave </p>
          <NavLink to='/emp-dashboard/leave-apply'>
  <button 
          className='apply-leave'
        >
        Apply
        </button>
          </NavLink>
        
        </div>
        <div className="emp-p-icon">
          <img src={holiday1} alt="Leave balence" />
        </div>
      </div>
    </div>
  );
};

export default Perfcards;