
import  { useEffect } from 'react';
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
import Salary from './HRModule/Components/Pages/Payroll/PayrollInputs/Salary/Salary';
import LeaveCalender from './HRModule/Components/Pages/LeaveCalender/LeaveCalender';
import ProtectedRoute from './route/ProtectedRoute';
import Updatesalary from './HRModule/Components/Pages/Payroll/PayrollInputs/Salary/Updatesalary/Updatesalary'
import TimeSheet from './HRModule/Components/Pages/TimeManagement/TimeSheet/TimeSheet'
import TimeReport from './HRModule/Components/Pages/TimeManagement/TimeReport/TimeReport'
// import Updatesalary from './HRModule/Components/Pages/Payroll/PayrollInputs/Salary/Updatesalary'

//employee routes->
import EmpHome from './EmployeeModule/Components/Pages/EmpHome/EmpHome'
import EmpProfile from './EmployeeModule/Components/Pages/EmpProfile/EmpProfile'
// import EmpAttendance from './EmployeeModule/Components/Pages/EmpAttendance/EmpAttendance'
import EmpApplyLeave from './EmployeeModule/Components/Pages/EmpLeave/EmpApplyLeave';
import Empholidaycalendar from './EmployeeModule/Components/Pages/Empholidaycalendar/Empholidaycalendar'
import ChangePassword from './HRModule/Components/Pages/ChangePassword/ChangePassword'
import Loan from './HRModule/Components/Pages/Payroll/PayrollInputs/Loan/Loan';
import Income from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Income/Income';
import Incometabs from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Incometabs/Incometabs'
import MyApprovers from './HRModule/Components/Pages/TimeManagement/MyApprovers/MyApprovers'
// import { getProfile } from './Landingpage/'
import { getProfile } from './HRModule/Redux/Reducers/ProfileSlice';

import store from "./Store"
import { useDispatch } from 'react-redux';
import EmpLopDays from './HRModule/Components/Pages/Payroll/PayrollInputs/EmpLopDays/EmpLopDays';
import Exemptions from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Exemptions/Exemptions';
import Perquisite from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Perquisite/Perquisite';
import Deductions from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Deductions/Deductions';
import Otherincome from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Otherincome/Otherincome';
import Houseproperty from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Houseproperty/Houseproperty';
import Regime from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Regime/Regime';
import Result from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Result/Result';


// const result = await dispatch(getProfile())

const App = () => {

  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getProfile())
  },[])
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
            <Route path='loan' element={<ProtectedRoute><Loan/></ProtectedRoute>}/>
            <Route path="salary" element={<ProtectedRoute><Salary /></ProtectedRoute>} />
            <Route path="emp-lopdays" element={<ProtectedRoute><EmpLopDays/></ProtectedRoute>}/>
            <Route path='changepassword' element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
            <Route path='updatesalary' element={<ProtectedRoute><Updatesalary/></ProtectedRoute>}/>
            <Route path='time-sheet' element={<ProtectedRoute><TimeSheet/></ProtectedRoute>}/>
            <Route path='time-report/:dateRange' element={<ProtectedRoute><TimeReport/></ProtectedRoute>}/>
            <Route path='myapprovers' element={<ProtectedRoute><MyApprovers/></ProtectedRoute>}/>

            {/* <Route path='updatesalary' element={<ProtectedRoute><Updatesalary/></ProtectedRoute>}/> */}

          
            <Route path='income' element={<ProtectedRoute><Income/></ProtectedRoute>}/>
            <Route path='income-tax' element={<ProtectedRoute><Incometabs/></ProtectedRoute>}/>
            <Route path='exemptions' element={<ProtectedRoute><Exemptions/></ProtectedRoute>}/>
            <Route path='perquisite' element={<ProtectedRoute><Perquisite/></ProtectedRoute>}/>
            <Route path='deductions' element={<ProtectedRoute><Deductions/></ProtectedRoute>}/>
            <Route path='otheroncome' element={<ProtectedRoute><Otherincome/></ProtectedRoute>}/>
            <Route path='houseproperty' element={<ProtectedRoute><Houseproperty/></ProtectedRoute>}/>
            <Route path='regime' element={<ProtectedRoute><Regime/></ProtectedRoute>}/>
            <Route path='result' element={<ProtectedRoute><Result/></ProtectedRoute>}/>
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
