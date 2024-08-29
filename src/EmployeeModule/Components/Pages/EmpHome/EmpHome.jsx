
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../EmpHome/EmpHome.css'
import EmpCards from '../EmpHome/EmpCards'
// import Graph from './Graph';
import EmpCalendar from '../EmpHome/EmpCalender'
import EmpAttendance from '../EmpAttendance/EmpAttendance';
import logo from '../../../Assets/homeimg.png' 

const HRHome = () => {
  const { emp } = useSelector(state => state.authState);




  return (
    <div className='EmpHome-first'>
        <h1 className='emp-h1'>
          Welcome <span className="emp-name">{emp.name}..!</span>
        </h1>
      <div className='EmpHome-blog-cards'>
        <EmpCards />
        <div className='image-container-emp'>
        {/* <img src={logo} alt="Logo" className="emp-home-logo" /> */}

      </div>
      </div>
      <div className='emp-attendance-calender'>
        {/* <Graph /> */}
        <EmpAttendance/>
        <EmpCalendar />
    
      </div>
   
    </div>
  );
}

export default HRHome;
