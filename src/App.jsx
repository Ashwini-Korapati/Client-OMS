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

import Register1 from './Landingpage/Auth/Register/Register1';
import EmployeeDashboard from './EmployeeModule/EmployeeDashboard/EmployeeDashboard';
import AdminDashboard from './AdminModule/AdminDashboard';
import UserDashboard from './UserModule/UserDashboard/UserDashboard';
import LeaveReport from './HRModule/Components/Pages/LeaveReport/LeaveReport';

const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/registerr" element={<Register1 />} />

          
          {/* HR Module */}
          <Route path="/hr-dashboard/*" element={<Dashboard />}>
            <Route path="hr-home" element={<HRHome />} />
            <Route path="Payroll" element={<Payroll />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="perfarmance" element={<PerfarmanceMatrics />} />
            <Route path="leave-report" element={<LeaveReport />} />
            <Route path="apply-leave" element={<LeaveMetrics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-employee" element={<Addemployee />} />
            <Route path="view-employee" element={<Viewemployee />} />


          </Route>
          <Route path="/user-dashboard" element={<UserDashboard />}/>

          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>

      
<Route path='/employee-dashboard' element={<EmployeeDashboard/>}/>

        </Routes>
      
       

     </BrowserRouter>
    </div>
  );
};

export default App;
