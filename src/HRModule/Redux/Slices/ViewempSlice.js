import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      state.error = null;
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

    saveEmployeeStart(state) {
      state.loading = true;
      state.error = null;
    },
    saveEmployeeSuccess(state, action) {
      state.loading = false;
      state.error = null;
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

// Thunk action to fetch employees
export const fetchEmployees = () => async dispatch => {
  dispatch(fetchEmployeesStart());
  try {
    const response = await axios.get('http://localhost:8000/api/v1/hr/AllEmployee');
    dispatch(fetchEmployeesSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeesFailure(error.message));
    // toast.error('Failed to fetch employees.');
  }
};

// export const deleteEmployee = (id) => async dispatch => {
//   if (window.confirm('Are you sure you want to delete this employee?')) {
//     dispatch(deleteEmployeeStart());
//     try {
//       const token = localStorage.getItem('authToken');
//       await axios.delete(`http://localhost:8000/api/v1/hr/deleteEmployee/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       dispatch(deleteEmployeeSuccess(id));
//       toast.success('Employee deleted successfully.');
//     } catch (error) {
//       dispatch(deleteEmployeeFailure(error.message));
//       toast.error('Failed to delete employee.');
//     }
//   }
// };


export const deleteEmployee = (id) => async dispatch => {
  if (window.confirm('Are you sure you want to delete this employee?')) {
    dispatch(deleteEmployeeStart());
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:8000/api/v1/hr/deleteEmployee/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch(deleteEmployeeSuccess(id));
      toast.success('Employee deleted successfully.');
    } catch (error) {
      dispatch(deleteEmployeeFailure(error.message));
      // toast.error('Failed to delete employee.');
    }
  }
};

export const saveEmployee = (editedEmployee) => async dispatch => {
  dispatch(saveEmployeeStart());
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.put(`http://localhost:8000/api/v1/hr/updateEmployee/${editedEmployee.emp_id}`, editedEmployee, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    dispatch(saveEmployeeSuccess(response.data));
    toast.success('Employee saved successfully.');
  } catch (error) {
    dispatch(saveEmployeeFailure(error.message));
    // toast.error('Failed to save employee.');
  }
};


export default employeesSlice.reducer;
