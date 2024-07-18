// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from '../src/Landingpage/Components/Header/Header';
// import Login from '../src/Landingpage/Auth/Login/Login';
// import Forget from '../src/Landingpage/Auth/ForgetPassword/Forget';
// import ResetPassword from '../src/Landingpage/Auth/ResetPassword/ResetPassword';
// import Dashboard from './HRModule/Components/Dashboard/Dashboard';
// import HRHome from './HRModule/Components/Pages/HRHome/HRHome';
// import Viewemployee from './HRModule/Components/Pages/Viewemployee/Viewemployee' 
// import Payroll from './HRModule/Components/Pages/Payroll/Payroll';
// import Attendance from './HRModule/Components/Pages/Attendance/Attendance';
// import PerfarmanceMatrics from './HRModule/Components/Pages/PerfarmanceMatrics/PerfarmanceMatrics';
// import LeaveMetrics from './HRModule/Components/Pages/Leave/LeaveMetrics';
// import Settings from './HRModule/Components/Pages/Settings/Settings';
// import Profile from './HRModule/Components/Pages/Profile/Profile'
// import Addemployee from './HRModule/Components/Pages/Addemployee/Addemployee';

// import Register1 from './Landingpage/Auth/Register/Register1';
// import EmployeeDashboard from './EmployeeModule/EmployeeDashboard/EmployeeDashboard';
// import AdminDashboard from './AdminModule/AdminDashboard';
// import UserDashboard from './UserModule/UserDashboard/UserDashboard';
// import LeaveReport from './HRModule/Components/Pages/LeaveReport/LeaveReport';
// import AdminHome from './AdminModule/AdminHome/AdminHome';
// import EmpHome from './EmployeeModule/EmpHome/EmpHome';
// import Salary from './HRModule/Components/Pages/Payroll/PayrollInputs/Salary'
// import LeaveCalender from './HRModule/Components/Pages/LeaveCalender/LeaveCalender';
// // import ProtectedRoute from './route/ProtectedRoute';

// const App = () => {
 

//   return (
//     <div>
//       <BrowserRouter>
//       <ToastContainer theme='dark'/>
//         <Routes>
//           <Route path="/" element={<Header />} />
//           <Route path="/registerr" element={<Register1/>} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forget" element={<Forget />} />
//           <Route path="/password/reset/:token" element={<ResetPassword />} />
         

          
//           {/* HR Module */}
//           <Route path="/hr-dashboard/*" element={<Dashboard /> }>
//             <Route path="hr-home" element ={  <HRHome /> }/>
//             <Route path="Payroll" element={<Payroll />} />
//             <Route path="attendance" element={<Attendance />} />
//             <Route path="perfarmance" element={<PerfarmanceMatrics />} />
//             <Route path="leave-report" element={<LeaveReport />} />
//             <Route path="apply-leave" element={<LeaveMetrics />} />
//             <Route path="leave-calender" element={<LeaveCalender />} />

//             <Route path="settings" element={<Settings />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="add-employee" element={<Addemployee />} />
//             <Route path="view-employee" element={<Viewemployee />} />
//             <Route path="salary" element={<Salary/>} />


//           </Route>
      
//           <Route path='/admin-dashboard*' element={<AdminDashboard/>}>
//           <Route path="adminhome" element={<AdminHome />} />

//           </Route>

//           </Routes>

//         <Routes>
//         {/* <Route path='/employee-dashboard' element={<EmployeeDashboard/>}/> */}
//         <Route path="/user-dashboard" element={<UserDashboard />}/>
//     <Route path='/emp-dashboard*' element={<EmployeeDashboard/>}>
//     <Route path='emphome' element={<EmpHome/>}/>

//     </Route>
//         </Routes>

       
      
       

//      </BrowserRouter>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Landingpage/Components/Header/Header';
import Login from './Landingpage/Auth/Login/Login';
import Forget from './Landingpage/Auth/ForgetPassword/Forget';
import ResetPassword from './Landingpage/Auth/ResetPassword/ResetPassword';
import Dashboard from './HRModule/Components/Dashboard/Dashboard';
import HRHome from './HRModule/Components/Pages/HRHome/HRHome';
import Viewemployee from './HRModule/Components/Pages/Viewemployee/Viewemployee';
import Payroll from './HRModule/Components/Pages/Payroll/Payroll';
import Attendance from './HRModule/Components/Pages/Attendance/Attendance';
import PerfarmanceMatrics from './HRModule/Components/Pages/PerfarmanceMatrics/PerfarmanceMatrics';
import LeaveMetrics from './HRModule/Components/Pages/Leave/LeaveMetrics';
import Settings from './HRModule/Components/Pages/Settings/Settings';
import Profile from './HRModule/Components/Pages/Profile/Profile';
import Addemployee from './HRModule/Components/Pages/Addemployee/Addemployee';
import Register1 from './Landingpage/Auth/Register/Register1';
import EmployeeDashboard from './EmployeeModule/Components/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './AdminModule/AdminDashboard';
import UserDashboard from './UserModule/UserDashboard/UserDashboard';
import LeaveReport from './HRModule/Components/Pages/LeaveReport/LeaveReport';
import AdminHome from './AdminModule/AdminHome/AdminHome';
import Salary from './HRModule/Components/Pages/Payroll/PayrollInputs/Salary';
import LeaveCalender from './HRModule/Components/Pages/LeaveCalender/LeaveCalender';
import ProtectedRoute from './route/ProtectedRoute';

//employee routes->
import EmpHome from './EmployeeModule/Components/Pages/EmpHome/EmpHome'
import EmpProfile from './EmployeeModule/Components/Pages/EmpProfile/EmpProfile'
// import EmpAttendance from './EmployeeModule/Components/Pages/EmpAttendance/EmpAttendance'
import EmpApplyLeave from './EmployeeModule/Components/Pages/EmpLeave/EmpApplyLeave';
import Empholidaycalendar from './EmployeeModule/Components/Pages/Empholidaycalendar/Empholidaycalendar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/registerr" element={<Register1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />

          {/* HR Module */}
          <Route path="/hr-dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="hr-home" element={<ProtectedRoute><HRHome /></ProtectedRoute> }/>
            <Route path="payroll" element={<ProtectedRoute><Payroll /></ProtectedRoute>} />
            <Route path="attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
            <Route path="performance" element={<ProtectedRoute><PerfarmanceMatrics /></ProtectedRoute>} />
            <Route path="leave-report" element={<ProtectedRoute><LeaveReport /></ProtectedRoute>} />
            <Route path="apply-leave" element={<ProtectedRoute><LeaveMetrics /></ProtectedRoute>} />
            <Route path="leave-calender" element={<ProtectedRoute><LeaveCalender /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="add-employee" element={<ProtectedRoute><Addemployee /></ProtectedRoute>} />
            <Route path="view-employee" element={<ProtectedRoute><Viewemployee /></ProtectedRoute>} />
            <Route path="salary" element={<ProtectedRoute><Salary /></ProtectedRoute>} />
          </Route>

          {/* Admin Module */}
          <Route path="/admin-dashboard/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
            <Route path="adminhome" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />

          </Route>

          {/* Employee Module */}
          <Route path="/emp-dashboard/*" element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>}>
            <Route path="emphome" element={<ProtectedRoute><EmpHome /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><EmpProfile /></ProtectedRoute>} />
            <Route path="leave-calender" element={<ProtectedRoute><Empholidaycalendar/></ProtectedRoute>}/>
            <Route path='leave-apply' element={<ProtectedRoute><EmpApplyLeave/></ProtectedRoute>}/>


          </Route>

          {/* User Module */}
          <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
