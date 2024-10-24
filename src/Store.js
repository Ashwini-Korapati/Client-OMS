import { combineReducers,configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { thunk } from "redux-thunk";
// import productsReducer f./Landingpage/Redux/ReducersductsSlice";
// import productReducer from './slices/productSlice';
import authReducer from './Landingpage/Redux/slices/authSlice'
// import cartReducer from './slices/cartSlice';
// import orderReducer from './slices/orderSlice';
import userReducer from '../../OMS-client/src/Landingpage/Redux/slices/userSlice'
import { createStore,  applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
// import { employeeAddReducer } from './Landingpage/Redux/reducers/employeeReducer';
import attendanceReducer from './HRModule/Redux/Slices/AttendanceReducers'
import LeaveReportslice from './HRModule/Redux/Slices/LeaveReportSlice'
import profileReducer from './HRModule/Redux/Slices/ProfileSlice'
import adminReducer from "./Landingpage/Redux/slices/adminSlice";
// import addEmployeeReducer from "./HRModule/Redux/Reducers/Addemployeereducers"
import employeeReducer from './HRModule/Redux/Slices/NewAddemployee'
import employeesReducer from './HRModule/Redux/Slices/ViewempSlice'
// import LeaveFormSlice from "./HRModule/Redux/Slices/LeaveFormSlice";
import leaveCalendarReducer from './HRModule/Redux/Slices/leaveCalendarSlice'
import empleaveCalendarSlice from './HRModule/Redux/Slices/EmpholidaycalenderSlice'
import changepasswordReducer from './HRModule/Redux/Slices/changepasswordReducer'
// import salaryReducer from './HRModule/Redux/Slices/SalarySlice'
// import getSalary  from "./Landingpage/Redux/Actions/salaryActions";
import getSalary from "./HRModule/Redux/Slices/SalarySlice"
import salaryUpdateSlice from './HRModule/Redux/Slices/salaryUpdateSlice'
import notificationReducer from './HRModule/Redux/Slices/notificationSlice'
import SettlementSlice from "./HRModule/Redux/Slices/SettlementSlice";
import homeleaveCalendarReducer from './HRModule/Redux/Slices/homeholidayleaveSlice'
import payslipReducer from './HRModule/Redux/Slices/emppayslip'
import AddemployeeHomeSlice from './HRModule/Redux/Slices/AddemployeeHomeSlice'
import todayattendanceSlice from "./HRModule/Redux/Slices/todayattendanceSlice";
import monthlyattendanceReducer from './HRModule/Redux/Slices/monthlyattendanceSlice'
import lopReducer from './HRModule/Redux/Slices/lopSlice'
import lopEmpReducer from './HRModule/Redux/Slices/lopEmpSlice'
import LeaveHistorySlice from './HRModule/Redux/Slices/leaveHistorySlice'
import LeavePendingSlice from './HRModule/Redux/Slices/leavePendingSlice'
import reportSliceReducer from './HRModule/Redux/Slices/SalaryReport'
import payrollReducer from './HRModule/Redux/Slices/BulkpayrollSlice'



const reducer = combineReducers({
  authState: authReducer,
  profile: profileReducer,
  admin: adminReducer,
  userState: userReducer,
  attendance: attendanceReducer,
  leavereport: LeaveReportslice,
  addemployee: employeeReducer,
  employees: employeesReducer,
  leaveCalendar: leaveCalendarReducer,
  homeleaveCalendar: homeleaveCalendarReducer,

  leaveCalendaremp: empleaveCalendarSlice,
  changepasswordState: changepasswordReducer,
  salary: getSalary,
  salaryUpdate: salaryUpdateSlice,
  notifications: notificationReducer,
  settlement:SettlementSlice,
  payslip: payslipReducer,
  addEmployeeHome: AddemployeeHomeSlice,
  todayattendance:todayattendanceSlice,
  monthlyattendance:monthlyattendanceReducer,
  lop:lopReducer,
  lopEmp:lopEmpReducer,
  leaveHistory: LeaveHistorySlice,
  leavePending: LeavePendingSlice,
  reportSlice: reportSliceReducer, // Add the salary slice to your store
  payroll: payrollReducer,


});

const initialState = {};
const middleware = [thunk];



const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;



