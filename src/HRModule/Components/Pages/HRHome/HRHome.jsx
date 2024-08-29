
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchEmployees } from '../../../Redux/Slices/ViewempSlice';
// import '../HRHome/HRHome.css';
// import HRCards from './HRCards';
// import Graph from './Graph';
// import Calender from './Calender';
// import logo from '../../../Assets/documentation_12650218.png'; 

// const HRHome = () => {
//   const { emp } = useSelector(state => state.authState);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   return (
//     <div className='HRHome-first'>
//       <div className='HRHome-blog-cards'>
//         {/* <img src={logo} alt="Logo" className="hr-logo" /> */}
//         <h1>
//           {/* Welcome <span className="emp-name">{emp.name}..!</span> */}
//           Welcome <span className="emp-name">user..!</span>

//         </h1>
//       </div>
//       <HRCards />
//       <div className='HRHome-graph-calender'>
//         {/* <Graph /> */}
//         <Calender />
//       </div>
//     </div>
//   );
// }

// export default HRHome;



import  { useEffect, useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../Redux/Slices/ViewempSlice';
import '../HRHome/HRHome.css';
import HRCards from './HRCards';
import Graph from './Graph';
import Calender from './Calender';
import MyTasks from './Tasks/NotifyMsg'
import Birthday from '../HRHome/Birthday/Birthday'

// import logo from '../../../Assets/documentation_12650218.png'; 


const HRHome = () => {
  const { emp } = useSelector(state => state.authState);
  const dispatch = useDispatch();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    dispatch(fetchEmployees());

    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [dispatch]);

  return (
    <div className='HRHome-first'>
      <div className='HRHome-blog-cards'>
        {/* <img src={logo} alt="Logo" className="hr-logo" /> */}
        <h3>
          {greeting} <span className="emp-name"></span>
        </h3>
      </div>
      <HRCards />
      <div className='HRHome-graph-calender'>
        {/* <Graph /> */}
        <MyTasks />
        <Birthday />
        <Calender />
      </div>
    </div>
  );
}

export default HRHome;

