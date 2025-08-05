
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
import EmpHome from './EmployeeModule/Components/Pages/EmpHome/EmpHome'
import EmpProfile from './EmployeeModule/Components/Pages/EmpProfile/EmpProfile'
// import EmpAttendance from './EmployeeModule/Components/Pages/EmpAttendance/EmpAttendance'
import EmpApplyLeave from './EmployeeModule/Components/Pages/EmpLeave/EmpApplyLeave';
import Empholidaycalendar from './HRModule/Redux/Slices/EmpholidaycalenderSlice'
import ChangePassword from './HRModule/Components/Pages/ChangePassword/ChangePassword'
import Loan from './HRModule/Components/Pages/Payroll/PayrollInputs/Loan/Loan';
import Income from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Income/Income';
import Incometabs from './HRModule/Components/Pages/Payroll/PayrollInputs/Incometax/Incometabs/Incometabs'
import MyApprovers from './HRModule/Components/Pages/TimeManagement/MyApprovers/MyApprovers'
import EmpPayslip from './EmployeeModule/Components/Pages/EmpSalary/EmpPayslip/EmpPayslip'
// import { getProfile } from './Landingpage/'
import { getProfile } from './HRModule/Redux/Slices/ProfileSlice'

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
import { fetchHolidays } from './HRModule/Redux/Slices/EmpholidaycalenderSlice'
import AddemployeeHome from './HRModule/Components/Pages/Addemployee/AddemployeeHome/AddemployeeHome';
import EmpChangePassword from './EmployeeModule/Components/Pages/EmpChangePassword'
import CardLayout from './HRModule/Components/Pages/HRHome/CardLayout';
import AddEmployee from './HRModule/Components/Pages/Addemployee/Addemployee';
import AttendanceTabs from './HRModule/Components/Pages/Attendance/Attendancetabs/Attendancetabs'
import LeaveHome from './EmployeeModule/Components/Pages/EmpLeave/LeaveHome/LeaveHome'
import Onboarding from  './EmployeeModule/Components/Pages/Onboarding/Onboarding'
import Qpforms from './EmployeeModule/Components/Pages/Onboarding/Qpforms';
import Empitstatement from './EmployeeModule/Components/Pages/EmpSalary/Empitstatement/Empitstatement';
import Verify from './HRModule/Components/Pages/Verify/Verify';
import Process from './HRModule/Components/Pages/Payroll/Process/Process';
import HrPayslipsRelease from './HRModule/Components/Pages/Payroll/Payout/Payslips/HrPayslipsRelease';
import OnboardingForms from './EmployeeModule/Components/Pages/Onboarding/PopUpForms/OnboardingForms';
// import  Verify  from './HRModule/Components/Pages/Verify/Verify'
// import { fetchHolidays } from './HRModule/Redux/Slices/leaveCalendarSlice'
import ErrorBoundary from './Landingpage/Auth/ErrorBoundary'

// const result = await dispatch(getProfile())

const App = () => {

  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getProfile())
  },[])

  useEffect(()=>{
    dispatch(fetchHolidays())
    dispatch(fetchHolidays())
  },[])

  
  return (
    <div>
       <ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            <Route path="add-employee" element={<AddemployeeHome />} />
            <Route path="view-employee" element={<Viewemployee />} />
            <Route path='loan' element={<Loan/>}/>
            <Route path="salary" element={<Salary />} />
            <Route path="emp-lopdays" element={<EmpLopDays/>}/>
            <Route path='changepassword' element={<ChangePassword/>}/>
            <Route path='updatesalary' element={<Updatesalary/>}/>
            <Route path='time-sheet' element={<TimeSheet/>}/>
            <Route path='time-report' element={<TimeReport/>}/>
            <Route path='myapprovers' element={<MyApprovers/>}/>
            <Route path='leave-report-detail' element={<CardLayout/>}/>
            <Route path='attendancetabs' element={<AttendanceTabs/>}/>
            <Route path='verify' element={<Verify/>}/>
            <Route path='payroll-process' element={<Process/>}/>
            <Route path='release-payslips' element={<HrPayslipsRelease/>}/>
            {/* <Route path='verify' element={<Verify/>}/> */}


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



<Route path="/emp-dashboard/*" element={<EmployeeDashboard />}>
            <Route path="emphome" element={<EmpHome />} />
            <Route path="profile" element={<EmpProfile />} />
            <Route path="leave-calender" element={<LeaveCalender/>}/>
            <Route path='leave-apply' element={<LeaveHome/>}/>
            <Route path='emp-payslip' element={<EmpPayslip/>}/>
            <Route path='onboarding' element={<OnboardingForms/>}/>
            <Route path='onboarding/forms' element={<Qpforms/>}/>
            <Route path='emp-ITstatement' element={<Empitstatement/>}/>
 
          </Route>
   <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
          {/* User Module */}
          {/* <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} /> */}
        </Routes>
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
