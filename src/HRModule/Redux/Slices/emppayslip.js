// // // src/redux/payslipSlice.js
// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // export const fetchPayslip = createAsyncThunk(
// //   'payslip/fetchPayslip',
// //   async ({ month, year }) => {
// //     const response = await axios.get('http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth', {
// //       params: { month, year },
// //     });
// //     return response.data.salaryRecords;
// //   }
// // );

// // const payslipSlice = createSlice({
// //   name: 'payslip',
// //   initialState: {
// //     salaryRecords: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchPayslip.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchPayslip.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.salaryRecords = action.payload;
// //       })
// //       .addCase(fetchPayslip.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export default payslipSlice.reducer;


// // src/features/payslip/payslipSlice.js

// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // export const fetchPayslip = createAsyncThunk(
// //   'payslip/fetchPayslip',
// //   async ({ month, year, emp_id }, thunkAPI) => {
// //     try {
// //       const response = await axios.get(
// //         `http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth?month=${month}&year=${year}`, 
// //         {
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// //         }
// //       );
// //       return {
// //         salaryRecords: response.data.salaryRecords,
// //         employeeDetails: response.data.employeeDetails,
// //       };
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.response.data);
// //     }
// //   }
// // );



// // const payslipSlice = createSlice({
// //   name: 'payslip',
// //   initialState: {
// //     salaryRecords: [],
// //     employeeDetails: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchPayslip.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchPayslip.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.salaryRecords = action.payload.salaryRecords;
// //         state.employeeDetails = action.payload.employeeDetails;
// //       })
// //       .addCase(fetchPayslip.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.payload;
// //       });
// //   },
// // });

// // export default payslipSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // export const fetchPayslip = createAsyncThunk(
// //   'payslip/fetchPayslip',
// //   async ({ month, year, emp_id }, thunkAPI) => {
// //     try {
// //       console.log(`Fetching payslip for month: ${month}, year: ${year}`);
// //       const response = await axios.get(
// //         `http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth?month=${month}&year=${year}`, 
// //         {
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// //         }
// //       );
// //       console.log('Payslip API response:', response.data);
// //       return {
// //         salaryRecords: response.data.salaryRecords || [],
// //         employeeDetails: response.data.employeeDetails || {},
// //       };
// //     } catch (error) {
// //       console.error('Error fetching payslip:', error);
// //       return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
// //     }
// //   }
// // );


// export const fetchPayslip = createAsyncThunk(
//   'payslip/fetchPayslip',
//   async ({ month, year, emp_id }, thunkAPI) => {
//     try {
//       console.log(`Fetching payslip for month: ${month}, year: ${year}`);
//       const response = await axios.get(
//         `http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth?month=${month}&year=${year}`, 
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         }
//       );
//       console.log('Payslip API response:', response.data);
//       return {
//         combinedRecords: response.data.combinedRecords || [],  // Use the correct key from the API response
//       };
//     } catch (error) {
//       console.error('Error fetching payslip:', error);
//       return thunkAPI.rejectWithValue(error.response?.data || 'An error occurred');
//     }
//   }
// );

// // const payslipSlice = createSlice({
// //   name: 'payslip',
// //   initialState: {
// //     salaryRecords: [],
// //     employeeDetails: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchPayslip.pending, (state) => {
// //         state.status = 'loading';
// //         state.error = null;
// //         console.log('Fetching payslip...');
// //       })
// //       .addCase(fetchPayslip.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.salaryRecords = action.payload.salaryRecords;
// //         state.employeeDetails = action.payload.employeeDetails;
// //         console.log('Payslip data stored in Redux:', state);
// //       })
// //       .addCase(fetchPayslip.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.payload;
// //         console.error('Payslip fetch failed:', action.payload);
// //       });
// //   },
// // });

// const payslipSlice = createSlice({
//   name: 'payslip',
//   initialState: {
//     salaryRecords: [],  // Assuming the combinedRecords is for salary
//     employeeDetails: {}, // Assuming it contains employee details
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPayslip.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//         console.log('Fetching payslip...');
//       })
//       .addCase(fetchPayslip.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salaryRecords = action.payload.combinedRecords;  // Store combinedRecords
//         state.employeeDetails = action.payload.combinedRecords[0]?.employeeDetails || {};  // Assuming employeeDetails are within combinedRecords
//         console.log('Payslip data stored in Redux:', state);
//       })
//       .addCase(fetchPayslip.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//         console.error('Payslip fetch failed:', action.payload);
//       });
//   },
// });


// export default payslipSlice.reducer;


// // src/features/payslip/payslipSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunk for fetching payslip data
// export const fetchPayslip = createAsyncThunk(
//   'payslip/fetchPayslip',
//   async ({ month, year, emp_id }, thunkAPI) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth?month=${month}&year=${year}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       return response.data.combinedRecords[0]; // Return the first record from combinedRecords
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice for payslip state management
// const payslipSlice = createSlice({
//   name: 'payslip',
//   initialState: {
//     employeeDetails: {},
//     payslipDetails: {},
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPayslip.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPayslip.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.employeeDetails = action.payload.employeeDetails[0] || {};
//         state.payslipDetails = action.payload.payslipDetails || {};
//       })
//       .addCase(fetchPayslip.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default payslipSlice.reducer;

// src/features/payslip/payslipSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching payslip data
export const fetchPayslip = createAsyncThunk(
  'payslip/fetchPayslip',
  async ({ month, year, emp_id }, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth`, {
        params: { month, year, emp_id },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return response.data; // Return the full data, not just the first record
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice for payslip state management
const payslipSlice = createSlice({
  name: 'payslip',
  initialState: {
    employeeDetails: {},
    payslipDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayslip.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPayslip.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const combinedRecords = action.payload.combinedRecords || [];
        state.employeeDetails = (combinedRecords[0]?.employeeDetails[0]) || {};
        state.payslipDetails = (combinedRecords[0]?.payslipDetails) || {};
      })
      .addCase(fetchPayslip.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default payslipSlice.reducer;
