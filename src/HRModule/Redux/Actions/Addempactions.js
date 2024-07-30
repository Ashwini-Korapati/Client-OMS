 
// import axios from 'axios';
// import {
//   SET_FIELD,
//   SET_FILE,
//   RESET_FORM,
//   ADD_EMPLOYEE_REQUEST,
//   ADD_EMPLOYEE_SUCCESS,
//   ADD_EMPLOYEE_FAILURE,
// } from './Addemployeeactions'
 
// export const setField = (payload) => ({
//   type: SET_FIELD,
//   payload,
// });
 
// export const setFile = (payload) => ({
//   type: SET_FILE,
//   payload,
// });
 
// export const resetForm = () => ({
//   type: RESET_FORM,
// });
 
// export const addEmployee = (formData) => async (dispatch) => {
//   dispatch({ type: ADD_EMPLOYEE_REQUEST });
 
//   try {
//     // Simulating API call with axios
//     const response = await axios.post("http://localhost:8000/api/v1/hr/addEmployee", formData);
//     dispatch({
//       type: ADD_EMPLOYEE_SUCCESS,
//       payload: response.data,
//     });
//     dispatch(resetForm());
//   } catch (error) {
//     dispatch({
//       type: ADD_EMPLOYEE_FAILURE,
//       payload: error.message,
//     });
//   }
// };
 