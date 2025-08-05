import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../../../Redux/Slices/ViewempSlice';
import { toast } from 'react-toastify';
import '../HRHome/HRHome.css';
import HRCards from './HRCards';
import Calender from './Calender';
import MyTasks from './Tasks/NotifyMsg';
import Birthday from '../HRHome/Birthday/Birthday';

const HRHome = () => {
  const { emp } = useSelector(state => state.authState);
  const { loading, error } = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const loadData = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
      dispatch(fetchEmployees());
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) {
    return (
      <div className="HRHome-first">
        <p className="loading-message">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="HRHome-first">
      <div className="HRHome-greeting-section">
        <h3>
          {greeting}, <span className="emp-name">{emp?.name || 'User'}</span>
        </h3>
      </div>

      <HRCards />

      {/* Main dashboard grid for tasks, birthday, and calendar */}
      <div className="HRHome-dashboard-grid">
        {/* Row 1: Equal width widgets */}
        <div className="dashboard-widget HRHome-tasks-widget">
          <MyTasks />
        </div>
        <div className="dashboard-widget HRHome-birthday-widget">
          <Birthday />
        </div>
        
        {/* Row 2: Full-width widget */}
        <div className="dashboard-widget HRHome-calender-widget">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default HRHome;