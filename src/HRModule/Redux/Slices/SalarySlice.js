
// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Thunks
// // export const fetchEmployees1 = createAsyncThunk(
// //   'employees/fetchEmployees',
// //   async () => {
// //     const response = await fetch('/api/employees'); // Adjust the URL to your API endpoint
// //     return response.json();
// //   }
// // );

// // export const getSalary = (emp_id) => async (dispatch) => {
// //   try {
// //     dispatch(getsalaryRequest());
// //     const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
    
// //     if (response.data.salaryDetails) {
// //       dispatch(getsalarySuccess(response.data));
// //     } else {
// //       dispatch(getsalaryReject('No salary details found for this employee'));
// //     }
// //   } catch (error) {
// //     console.error('Error fetching salary:', error);
// //     dispatch(getsalaryReject(error.response ? error.response.data.message : 'An unknown error occurred'));
// //   }
// // };

// // export const saveSalary = (salaryData) => async (dispatch) => {
// //   try {
// //     const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
// //     console.log('Save Response:', response.data); // Log the response
// //   } catch (error) {
// //     console.error('Error saving salary:', error.response);
// //     throw error;
// //   }
// // };

// // const salarySlice = createSlice({
// //   name: 'salary',
// //   initialState: {
// //     salaryDetails: [],
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {
// //     getsalaryRequest: (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     },
// //     getsalarySuccess: (state, action) => {
// //       state.salaryDetails = action.payload.salaryDetails || [];
      
// //               state.salaryDetails = [action.payload]; // Update with the latest salary details

// //       state.loading = false;
// //     },
// //     getsalaryReject: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchEmployees1.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(fetchEmployees1.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.employees = action.payload;
// //       })
// //       .addCase(fetchEmployees1.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export const { getsalaryRequest, getsalarySuccess, getsalaryReject } = salarySlice.actions;

// // export default salarySlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the async thunk for saving salary
// export const saveSalary = createAsyncThunk(
//   'salary/saveSalary',
//   async (salaryData) => {
//     const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
//     return response.data;
//   }
// );

// export const fetchEmployees1 = createAsyncThunk(
//   'employees/fetchEmployees1',
//   async () => {
//     const response = await axios.get('/api/employees');
//     return response.data;
//   }
// );

// export const getSalary = createAsyncThunk(
//   'salary/getSalary',
//   async (emp_id) => {
//     const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
//     return response.data;
//   }
// );

// const salarySlice = createSlice({
//   name: 'salary',
//   initialState: {
//     salaryDetails: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getSalary.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getSalary.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salaryDetails = action.payload.salaryDetails;
//       })
//       .addCase(getSalary.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(saveSalary.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(saveSalary.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Handle success case
//       })
//       .addCase(saveSalary.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default salarySlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the async thunk for saving salary
// export const saveSalary = createAsyncThunk(
//   'salary/saveSalary',
//   async (salaryData) => {
//     const response = await axios.post('http://localhost:8000/api/v1//hr/postSalary', salaryData);
//     return response.data;
//   }
// );

// export const fetchEmployees1 = createAsyncThunk(
//   'employees/fetchEmployees1',
//   async () => {
//     const response = await axios.get('/api/employees');
//     return response.data;
//   }
// );

// export const getSalary = createAsyncThunk(
//   'salary/getSalary',
//   async (emp_id) => {
//     const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
//     return response.data;
//   }
// );

// const salarySlice = createSlice({
//   name: 'salary',
//   initialState: {
//     salaryDetails: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getSalary.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getSalary.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salaryDetails = action.payload.salaryDetails;
//       })
//       .addCase(getSalary.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(saveSalary.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(saveSalary.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salaryDetails = action.payload; // Update salaryDetails with the response
//       })
//       .addCase(saveSalary.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default salarySlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for saving salary
export const saveSalary = createAsyncThunk(
  'salary/saveSalary',
  async (salaryData) => {
    const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
    return response.data;
  }
);

export const getSalary = createAsyncThunk(
  'salary/getSalary',
  async (emp_id) => {
    const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
    return response.data;
  }
);

export const fetchEmployees1 = createAsyncThunk(
  'employees/fetchEmployees1',
  async () => {
    const response = await axios.get('/api/employees');
    return response.data;
  }
);

const salarySlice = createSlice({
  name: 'salary',
  initialState: {
    salaryDetails: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSalary.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.salaryDetails = action.payload.salaryDetails;
      })
      .addCase(getSalary.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(saveSalary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveSalary.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { AnnualCTC, MonthyCTC, BASIC, HRA, SPECIAL, OTHER, PF } = action.payload;
        state.salaryDetails = [{
          ...state.salaryDetails[0],
          previous_annual_ctc: AnnualCTC,
          previous_monthly_ctc: MonthyCTC,
          previous_full_basic: BASIC,
          previous_full_hra: HRA,
          previous_full_special_allowance: SPECIAL,
          previous_full_other_allowance: OTHER,
          previous_full_employer_pf: PF,
        }];
      })
      .addCase(saveSalary.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default salarySlice.reducer;
