import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../EmpHome/EmpHome.css';
import EmpCards from '../EmpHome/EmpCards';
import EmpCalendar from '../EmpHome/EmpCalender';
import EmpAttendance from '../EmpAttendance/EmpAttendance';

const EmpHome = () => {
  const { emp } = useSelector(state => state.authState);
  const [employeeName, setEmployeeName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Check if emp data exists in Redux store first
    if (emp?.name) {
      setEmployeeName(emp.name);
      setIsLoading(false);
    } else {
      // If not in Redux, check localStorage
      const storedEmp = JSON.parse(localStorage.getItem('emp'));
      if (storedEmp?.name) {
        setEmployeeName(storedEmp.name);
        setIsLoading(false);
      } else {
        toast.error('Unable to fetch employee details. Please login again.');
        setIsLoading(false);
      }
    }
  }, [emp]);

  if (isLoading) {
    return (
      <div className='EmpHome-first loading'>
        {/* Blank state while loading */}
      </div>
    );
  }

  return (
    <div className='EmpHome-first'>
      {employeeName && (
        <h1 className='emp-h1'>
          Welcome <span className="emp-name">{employeeName}..!</span>
        </h1>
      )}
      <div className='EmpHome-blog-cards'>
        <EmpCards />
      </div>
      <div className='emp-attendance-calender'>
        <EmpAttendance />
        <EmpCalendar />
      </div>
    </div>
  );
};

export default EmpHome;