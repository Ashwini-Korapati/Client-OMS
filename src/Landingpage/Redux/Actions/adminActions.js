// src/actions/createNewEmployee.js
import {
  addEmployee,
  addEmployeeFail,
  addEmployeeSuccess
} from "../slices/adminSlice";

import HttpHandler from '../../../Httphandler'

export const createNewEmployee = (formData1) => async (dispatch) => {
  try {
    dispatch(addEmployee());
    const { data } = await HttpHandler.post('/hr/addEmployee', formData1);
    dispatch(addEmployeeSuccess(data));
  } catch (error) {
    const message = error?.response?.data?.message || 'Failed to add employee';
    dispatch(addEmployeeFail(message));
  }
};
