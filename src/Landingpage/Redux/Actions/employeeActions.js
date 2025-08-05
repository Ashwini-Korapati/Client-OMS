import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL } from '../constants/employeeConstants';
import { httpPost } from '../../../Httphandler' // adjust path as needed

export const addEmployee = (employeeData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_EMPLOYEE_REQUEST });

    const { data } = await httpPost('/api/v1/hr/addEmployee', employeeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EMPLOYEE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
