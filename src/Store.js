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
import attendanceReducer from './HRModule/Redux/Reducers/AttendanceReducers'
import LeaveReportslice from './HRModule/Redux/Reducers/LeaveReportSlice'
import profileReducer from './HRModule/Redux/Reducers/ProfileSlice'
import adminReducer from "./Landingpage/Redux/slices/adminSlice";
// import addEmployeeReducer from "./HRModule/Redux/Reducers/Addemployeereducers"
import employeeReducer from './HRModule/Redux/Slices/NewAddemployee'
import employeesReducer from './HRModule/Redux/Slices/ViewempSlice'
import LeaveFormSlice from "./HRModule/Redux/Slices/LeaveFormSlice";
import leaveCalendarReducer from './HRModule/Redux/Slices/leaveCalendarSlice'
import empleaveCalendarSlice from './EmployeeModule/Redux/EmpholidaycalenderSlice'
import changepasswordReducer from './HRModule/Redux/Reducers/changepasswordReducer'
// import jobReducer from './Landingpage/Redux/Reducers'
// import hrCardsReducer from './HRModule/Redux/Reducers/hrCardsSlice'



// const reducer = combineReducers({
//     // productsState: productsReducer,
//     // productState: productReducer ,
    
//     authState: authReducer,
//     profile: profileReducer,
//     admin:adminReducer,
//     // jobs:jobReducer,
    
//     // cartState: cartReducer,
//     // orderState: orderReducer,
//     userState: userReducer,
//     // employeeAdd: employeeAddReducer,
//     attendance: attendanceReducer,
//     leavereport:LeaveReportslice,
//     addemployee: addEmployeeReducer,
//     employees: employeesReducer,
//     leaveform: LeaveFormSlice,
//     leaveCalendar: leaveCalendarReducer,
//     leaveCalendaremp: empleaveCalendarSlice


//     // hrCards: hrCardsReducer,



// })

const reducer = combineReducers({
  authState: authReducer,
  profile: profileReducer,
  admin: adminReducer,
  userState: userReducer,
  attendance: attendanceReducer,
  leavereport: LeaveReportslice,
  // addemployee: addEmployeeReducer,
  addemployee: employeeReducer,
  employees: employeesReducer,
  leaveform: LeaveFormSlice,
  leaveCalendar: leaveCalendarReducer,
  leaveCalendaremp: empleaveCalendarSlice,
  changepasswordState: changepasswordReducer,
});

const initialState = {};
const middleware = [thunk];


// const store = configureStore({
//     reducer,
//     // middleware:[thunk]
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// })

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from '../../OMS-client/src/Landingpage/Redux/slices/userSlice';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;
