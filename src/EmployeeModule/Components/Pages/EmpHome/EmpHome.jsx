import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../EmpHome/EmpHome.css';
import EmpCards from '../EmpHome/EmpCards';
import EmpCalendar from '../EmpHome/EmpCalender';
import EmpAttendance from '../EmpAttendance/EmpAttendance';
import logo from '../../../Assets/homeimg.png';

const HRHome = () => {
  const { emp } = useSelector(state => state.authState);
  console.log("Employee Data:", emp);
  const [employeeName, setEmployeeName] = useState('');

  useEffect(() => {
    // Check if emp data exists in localStorage
    const storedEmp = JSON.parse(localStorage.getItem('emp'));
    console.log("Stored Employee Data:", storedEmp);
    if (storedEmp?.name) {
      setEmployeeName(emp.name);
    } else if (emp?.name) {
      setEmployeeName(emp.name);
      // Store emp data in localStorage
      localStorage.setItem('emp', JSON.stringify(emp));
    } else {
      toast.error('Unable to fetch employee details. Please login again.');
    }
  }, [emp]);

  if (!employeeName) {
    return (
      <div className='EmpHome-first loading'>
        <h1 className='emp-h1'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='EmpHome-first'>
      <h1 className='emp-h1'>
        Welcome <span className="emp-name">{employeeName}..!</span>
      </h1>
      <div className='EmpHome-blog-cards'>
        <EmpCards />
        <div className='image-container-emp'>
          {/* <img src={logo} alt="Logo" className="emp-home-logo" /> */}
        </div>
      </div>
      <div className='emp-attendance-calender'>
        <EmpAttendance />
        <EmpCalendar />
      </div>
    </div>
  );
};

export default HRHome;