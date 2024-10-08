

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
//   reducers: {},
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

// export default salarySlice.reducer;





import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

// Salary slice
const salarySlice = createSlice({
  name: 'salary',
  initialState: {
    salaryDetails: [],
    loading: false,
    error: null,
  },
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
      });
  },
});

export const { clearAuthError } = salarySlice.actions;
export default salarySlice.reducer;




