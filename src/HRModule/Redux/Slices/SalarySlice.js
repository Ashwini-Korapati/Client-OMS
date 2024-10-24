


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to save updated salary
// export const saveSalary = createAsyncThunk(
//   'salary/saveSalary',
//   async (salaryData) => {
//     const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
//     return response.data; // Ensure this includes employee details if necessary
//   }
// );

// export const fetchEmployees1 = createAsyncThunk(
//   'employees/fetchEmployees1',
//   async () => {
//     const response = await axios.get('/api/employees');
//     return response.data;
//   }
// );

// // Async thunk to fetch salary details by employee ID
// export const getSalary = createAsyncThunk(
//   'salary/getSalary',
//   async (emp_id) => {
//     const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
//     return response.data;
//   }
// );

// // Salary slice
// const salarySlice = createSlice({
//   name: 'salary',
//   initialState: {
//     salaryDetails: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearAuthError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getSalary.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getSalary.fulfilled, (state, action) => {
//         state.loading = false;
//         state.salaryDetails = action.payload.salaryDetails || [];
//       })
//       .addCase(getSalary.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(saveSalary.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(saveSalary.fulfilled, (state, action) => {
//         state.loading = false;
//         state.salaryDetails = [action.payload];
//       })
//       .addCase(saveSalary.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearAuthError } = salarySlice.actions;
// export default salarySlice.reducer;


 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
const initialState = {
  employees: [],
  salaryDetails: [],
  loading: false,
  error: null,
};
 
// Async thunk to save updated salary
export const saveSalary = createAsyncThunk(
  'salary/saveSalary',
  async (salaryData) => {
    const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
    return response.data; // Ensure this includes employee details if necessary
  }
);
 
export const fetchEmployees1 = createAsyncThunk(
  'employees/fetchEmployees1',
  async () => {
    const response = await axios.get('/api/employees');
    return response.data;
  }
);
 
// Async thunk to fetch salary details by employee ID
export const getSalary = createAsyncThunk(
  'salary/getSalary',
  async (emp_id) => {
    const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
    return response.data;
  }
);
 
// Async thunk to process salary for a selected employee
export const processSalary = createAsyncThunk(
  'salary/processSalary',
  async ({ emp_id, month, year }) => {
    const response = await axios.post('http://localhost:8000/api/v1/hr/postSalaryProcess', { emp_id, month, year });
    return response.data; // Ensure this includes any necessary information
  }
);
 
// Salary slice
const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.salaryDetails = action.payload.salaryDetails || [];
      })
      .addCase(getSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.salaryDetails = [action.payload];
      })
      .addCase(saveSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(processSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processSalary.fulfilled, (state, action) => {
        state.loading = false;
        // Optionally update state based on processed salary
      })
      .addCase(processSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
 
export const { clearAuthError } = salarySlice.actions;
export default salarySlice.reducer;

