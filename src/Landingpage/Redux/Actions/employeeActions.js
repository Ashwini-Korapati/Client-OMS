// import axios from 'axios';
// import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL } from '../constants/employeeConstants';

// export const addEmployee = (employeeData) => async (dispatch) => {
//   try {
//     dispatch({ type: ADD_EMPLOYEE_REQUEST });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('/hr/addEmployee', employeeData, config);

//     dispatch({
//       type: ADD_EMPLOYEE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ADD_EMPLOYEE_FAIL,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };


import axios from 'axios';
import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL } from '../constants/employeeConstants'

export const addEmployee = (employeeData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_EMPLOYEE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:8000/hr/addEmployee', employeeData, config);

    dispatch({
      type: ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EMPLOYEE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
