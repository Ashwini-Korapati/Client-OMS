 
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
 
// export const fetchEmployeeDetails = createAsyncThunk(
//   'salary/fetchEmployeeDetails',
//   async (employeeId) => {
//     const response = await axios.get(`/api/employee/${employeeId}`);
//     return response.data;
//   }
// );
 
// export const fetchEmployees = createAsyncThunk(
//   'salary/fetchEmployees',
//   async () => {
//     const response = await axios.get('http://localhost:8000/api/v1/hr/EmployeeforSalary');
//     return response.data;
//   }
// );
 
// const salarySlice = createSlice({
//   name: 'salary',
//   initialState: {
//     searchTerm: '',
//     isTableVisible: false,
//     expandedKeys: [],
//     selectedEmployee: null,
//     employeeDetails: {},
//     employees: [], // Ensure this is initialized as an empty array
//     filteredEmployees: [], // Ensure this is initialized as an empty array
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;
//       // Ensure employees is an array before filtering
//       state.filteredEmployees = Array.isArray(state.employees)
//         ? state.employees.filter(employee =>
//             employee.name.toLowerCase().includes(action.payload.toLowerCase())
//           )
//         : [];
//     },
//     setIsTableVisible: (state, action) => {
//       state.isTableVisible = action.payload;
//     },
//     setExpandedKeys: (state, action) => {
//       state.expandedKeys = action.payload;
//     },
//     toggleExpandAll: (state, action) => {
//       state.expandedKeys = action.payload;
//     },
//     setSelectedEmployee: (state, action) => {
//       state.selectedEmployee = action.payload;
//     },
//     setEmployees: (state, action) => {
//       state.employees = action.payload;
//       state.filteredEmployees = action.payload; // Initialize with all employees
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployeeDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.employeeDetails = action.payload;
//       })
//       .addCase(fetchEmployeeDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.employees = action.payload;
//         state.filteredEmployees = action.payload;
//       });
//   },
// });
 
// export const { setSearchTerm, setIsTableVisible, setExpandedKeys, toggleExpandAll, setSelectedEmployee, setEmployees } = salarySlice.actions;
 
// export const selectFilteredEmployees = (state) => state.salary.filteredEmployees;
 
// export default salarySlice.reducer;
 
 
 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchEmployeeDetails = createAsyncThunk(
  'salary/fetchEmployeeDetails',
  async (id) => {
    const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${id}`);
    // const response = await axios.get(`/api/employee/${employeeId}`);
    return response.data;
  }
);
 
 
 
 
 
 
 
export const fetchEmployees = createAsyncThunk(
  'salary/fetchEmployees',
  async () => {
    const response = await axios.get('http://localhost:8000/api/v1/hr/EmployeeforSalary');
    return response.data;
  }
);
 
const salarySlice = createSlice({
  name: 'salary',
  initialState: {
    searchTerm: '',
    isTableVisible: false,
    expandedKeys: [],
    selectedEmployee: null,
    employeeDetails: {},
    employees: [], // Ensure this is initialized as an empty array
    filteredEmployees: [], // Ensure this is initialized as an empty array
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      // Ensure employees is an array before filtering
      state.filteredEmployees = Array.isArray(state.employees)
        ? state.employees.filter(employee =>
            employee.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : [];
    },
    setIsTableVisible: (state, action) => {
      state.isTableVisible = action.payload;
    },
    setExpandedKeys: (state, action) => {
      state.expandedKeys = action.payload;
    },
    toggleExpandAll: (state, action) => {
      state.expandedKeys = action.payload;
    },
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
      state.filteredEmployees = action.payload; // Initialize with all employees
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employeeDetails = action.payload;
      })
      .addCase(fetchEmployeeDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.filteredEmployees = action.payload;
      });
  },
});
 
export const { setSearchTerm, setIsTableVisible, setExpandedKeys, toggleExpandAll, setSelectedEmployee, setEmployees } = salarySlice.actions;
 
export const selectFilteredEmployees = (state) => state.salary.filteredEmployees;
 
export default salarySlice.reducer;
 
 