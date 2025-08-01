import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../Redux/Slices/ViewempSlice';
import '../HRHome/HRHome.css';
import HRCards from './HRCards';
import Graph from './Graph';
import Calender from './Calender';
import MyTasks from './Tasks/NotifyMsg';
import Birthday from '../HRHome/Birthday/Birthday';

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
    <div className="HRHome-first">
      <div className="HRHome-blog-cards">
        {/* Uncomment and adjust path if using logo */}
        {/* <img src={logo} alt="Logo" className="hr-logo" /> */}
        <h3>
          {greeting} <span className="emp-name">{emp?.name || 'User'}</span>
        </h3>
      </div>
      <HRCards />
      <div className="HRHome-graph-calender">
        <MyTasks />
        <Birthday />
        <Calender />
      </div>
    </div>
  );
};

export default HRHome;