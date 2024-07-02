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
import { employeeAddReducer } from './Landingpage/Redux/reducers/employeeReducer';
import attendanceReducer from './HRModule/Redux/Reducers/AttendanceReducers'
import LeaveReportslice from './HRModule/Redux/Reducers/LeaveReportSlice'
// import hrCardsReducer from './HRModule/Redux/Reducers/hrCardsSlice'



const reducer = combineReducers({
    // productsState: productsReducer,
    // productState: productReducer ,
    authState: authReducer,
    
    // cartState: cartReducer,
    // orderState: orderReducer,
    userState: userReducer,
    employeeAdd: employeeAddReducer,
    form: attendanceReducer,
    leavereport:LeaveReportslice,
    // hrCards: hrCardsReducer,


})

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
