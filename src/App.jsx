
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
import React from 'react';
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
import LOP from './HRModule/Components/Pages/Payroll/PayrollInputs/Lossofpay/LOP/LOP';
import Finalsettlement from './HRModule/Components/Pages/Payroll/PayrollInputs/Finalsettlement/Settlementtabs';
import Finalsettlementmain from './HRModule/Components/Pages/Payroll/PayrollInputs/Finalsettlement/Finalsettlementmain/Finalsettlementmain'


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
          <Route path="/hr-dashboard/*" element={<Dashboard />}>
            <Route path="hr-home" element={<HRHome /> }/>
            <Route path="payroll" element={<Payroll />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="performance" element={<PerfarmanceMatrics />} />
            <Route path="leave-report" element={<LeaveReport />} />
            <Route path="apply-leave" element={<LeaveMetrics />} />
            <Route path="leave-calender" element={<LeaveCalender />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-employee" element={<Addemployee />} />
            <Route path="view-employee" element={<Viewemployee />} />
            <Route path='loan' element={<Loan/>}/>
            <Route path="salary" element={<Salary />} />
            <Route path="emp-lopdays" element={<EmpLopDays/>}/>
            <Route path='changepassword' element={<ChangePassword/>}/>
            <Route path='updatesalary' element={<Updatesalary/>}/>
            <Route path='time-sheet' element={<TimeSheet/>}/>
            <Route path='time-report' element={<TimeReport/>}/>
            <Route path='myapprovers' element={<MyApprovers/>}/>

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
            <Route path='lop' element={<ProtectedRoute><LOP/></ProtectedRoute>}/>
            <Route path='finalsettlementtabs' element={<ProtectedRoute><Finalsettlement/></ProtectedRoute>}/>
            <Route path='finalsettlementmain' element={<ProtectedRoute><Finalsettlementmain/></ProtectedRoute>}/>
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
