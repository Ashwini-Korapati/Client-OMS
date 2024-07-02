// // registerReducer.js

// import { UPDATE_FORM_DATA, TOGGLE_PASSWORD_VISIBILITY, REGISTER_SUCCESS, REGISTER_FAILURE } from '../registerActions'

// const initialState = {
//   formData: {
//     name: '',
//     email: '',
//     password: '',
//   },
//   message: '',
//   showPassword: false,
// };

// const registerReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_FORM_DATA:
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           ...action.payload,
//         },
//       };
//     case TOGGLE_PASSWORD_VISIBILITY:
//       return {
//         ...state,
//         showPassword: !state.showPassword,
//       };
//     case REGISTER_SUCCESS:
//     case REGISTER_FAILURE:
//       return {
//         ...state,
//         message: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default registerReducer;
