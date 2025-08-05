import { createSlice } from '@reduxjs/toolkit';
import http from '../../../Httphandler'
import { toast } from 'react-toastify';

const initialState = {
  employees: [],
  editModeId: null,
  editedEmployee: {
    emp_id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    role: '',
    reporting_to: '',
    accountNo: '',
    ifsc: '',
    aadhar: '',
    pancard: '',
    dateOfJoining: '',
    employeeType: '',
    profilePhoto: '',
    gender: '',
    state: '',
    city: '',
    zipCode: '',
    graduationDoc: null
  },
  loading: false,
  error: null
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    fetchEmployeesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess(state, action) {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchEmployeesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setEditModeId(state, action) {
      state.editModeId = action.payload;
    },
    setEditedEmployee(state, action) {
      state.editedEmployee = action.payload;
    },
    resetEditedEmployee(state) {
      state.editedEmployee = initialState.editedEmployee;
    },
    deleteEmployeeStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteEmployeeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteEmployeeSuccess(state, action) {
      state.loading = false;
      state.employees = state.employees.filter(emp => emp.emp_id !== action.payload);
    },
    saveEmployeeStart(state) {
      state.loading = true;
    },
    saveEmployeeSuccess(state, action) {
      state.loading = false;
      state.employees = state.employees.map(emp =>
        emp.emp_id === action.payload.emp_id ? action.payload : emp
      );
      state.editModeId = null;
      state.editedEmployee = initialState.editedEmployee;
    },
    saveEmployeeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  setEditModeId,
  setEditedEmployee,
  resetEditedEmployee,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  saveEmployeeStart,
  saveEmployeeSuccess,
  saveEmployeeFailure
} = employeesSlice.actions;

// ✅ Fetch employees using httpHandler
export const fetchEmployees = () => async dispatch => {
  dispatch(fetchEmployeesStart());
  try {
    const response = await http.get('/api/v1/hr/AllEmployee');
    dispatch(fetchEmployeesSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeesFailure(error.message));
  }
};

// ✅ Delete employee using httpHandler
export const deleteEmployee = (id) => async dispatch => {
  if (window.confirm('Are you sure you want to delete this employee?')) {
    dispatch(deleteEmployeeStart());
    try {
      await http.delete(`/api/v1/hr/deleteEmployee/${id}`);
      dispatch(deleteEmployeeSuccess(id));
      toast.success('Employee deleted successfully.');
    } catch (error) {
      dispatch(deleteEmployeeFailure(error.message));
    }
  }
};

// ✅ Save employee using httpHandler
export const saveEmployee = (editedEmployee) => async dispatch => {
  dispatch(saveEmployeeStart());
  try {
    const response = await http.put(`/api/v1/hr/updateEmployee/${editedEmployee.emp_id}`, editedEmployee);
    dispatch(saveEmployeeSuccess(response.data));
    toast.success('Employee saved successfully.');
  } catch (error) {
    dispatch(saveEmployeeFailure(error.message));
  }
};

export default employeesSlice.reducer;
