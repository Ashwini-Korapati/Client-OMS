// // registerActions.js

// import axios from 'axios';

// export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
// export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// // Action creators
// export const updateFormData = (formData) => ({
//   type: UPDATE_FORM_DATA,
//   payload: formData,
// });

// export const togglePasswordVisibility = () => ({
//   type: TOGGLE_PASSWORD_VISIBILITY,
// });

// export const registerSuccess = (message) => ({
//   type: REGISTER_SUCCESS,
//   payload: message,
// });

// export const registerFailure = (message) => ({
//   type: REGISTER_FAILURE,
//   payload: message,
// });

// // Async action for registration
// export const registerUser = (formData) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://192.168.10.63:8000/api/v1/employee/register', formData);
//     if (response.status === 200) {
//       dispatch(registerSuccess("Registered Successfully"));
//       // Optionally clear form or redirect
//     } else {
//       dispatch(registerFailure("Error while registering"));
//     }
//   } catch (error) {
//     console.error('Error during registration:', error);
//     dispatch(registerFailure("Error while registering"));
//   }
// };
