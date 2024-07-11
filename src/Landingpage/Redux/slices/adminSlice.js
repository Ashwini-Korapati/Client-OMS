import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        loading: true,
        employee:{},
        isEmployeeAdded:false
        
        
    },
    reducers: {
        addEmployee(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        addEmployeeSuccess(state, action){
            return {
                loading: false,
                employee: action.payload.user,
                isEmployeeAdded:true
            }
        },
        
       
        addEmployeeFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isEmployeeAdded:false
            }
        }
        
    }
});

const { actions, reducer } = adminSlice;

export const { 
    addEmployee,
    addEmployeeSuccess,
    addEmployeeFail
    // emploginFail,
    // emploginRequest,
    // emploginSuccess,
    // loginRequest, 
    // loginSuccess, 
    // loginFail, 
    // clearError,
    // registerRequest,
    // registerSuccess,
    // registerFail,
    // loadUserRequest,
    // loadUserSuccess,
    // loadUserFail,
    // logoutFail,
    // logoutSuccess,
    // updateProfileFail,
    // updateProfileRequest,
    // updateProfileSuccess,
    // clearUpdateProfile,
    // updatePasswordFail,
    // updatePasswordSuccess,
    // updatePasswordRequest,
    // forgotPasswordFail,
    // forgotPasswordSuccess,
    // forgotPasswordRequest,
    // resetPasswordFail,
    // resetPasswordRequest,
    // resetPasswordSuccess,
    
 } = actions;

export default reducer;

