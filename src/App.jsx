import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Landingpage/Components/Header/Header';
import Login from '../src/Landingpage/Auth/Login/Login';
import Forget from '../src/Landingpage/Auth/ForgetPassword/Forget';
import ResetPassword from '../src/Landingpage/Auth/ResetPassword/ResetPassword';
import Dashboard from './HRModule/Components/Dashboard/Dashboard';
import HRHome from './HRModule/Components/Pages/HRHome/HRHome';
import Viewemployee from './HRModule/Components/Pages/Viewemployee/Viewemployee' 
import Payroll from './HRModule/Components/Pages/Payroll/Payroll';
import Attendance from './HRModule/Components/Pages/Attendance/Attendance';
import PerfarmanceMatrics from './HRModule/Components/Pages/PerfarmanceMatrics/PerfarmanceMatrics';
import LeaveMetrics from './HRModule/Components/Pages/Leave/LeaveMetrics';
import Settings from './HRModule/Components/Pages/Settings/Settings';
import Profile from './HRModule/Components/Pages/Profile/Profile'
import Addemployee from './HRModule/Components/Pages/Addemployee/Addemployee';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  const editEmployee = (index, updatedEmployee) => {
    const newEmployees = employees.map((employee, i) => (i === index ? updatedEmployee : employee));
    setEmployees(newEmployees);
  };

  const addLeave = (leave) => {
    setLeaves([...leaves, leave]);
  };

  const updateLeaveStatus = (index, status) => {
    const newLeaves = leaves.map((leave, i) => (i === index ? { ...leave, status } : leave));
    setLeaves(newLeaves);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          
          {/* HR Module */}
          <Route path="/hr-dashboard/*" element={<Dashboard />}>
            <Route path="hr-home" element={<HRHome />} />
            <Route path="Payroll" element={<Payroll />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="perfarmance" element={<PerfarmanceMatrics />} />
            <Route path="leavemetrics" element={<LeaveMetrics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-employee" element={<Addemployee />} />

          </Route>
          <Route path="view-employee" element={<Viewemployee />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
