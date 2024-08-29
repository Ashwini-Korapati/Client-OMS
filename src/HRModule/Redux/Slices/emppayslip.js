// // src/redux/payslipSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchPayslip = createAsyncThunk(
//   'payslip/fetchPayslip',
//   async ({ month, year }) => {
//     const response = await axios.get('http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth', {
//       params: { month, year },
//     });
//     return response.data.salaryRecords;
//   }
// );

// const payslipSlice = createSlice({
//   name: 'payslip',
//   initialState: {
//     salaryRecords: [],
//     status: 'idle',
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPayslip.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPayslip.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salaryRecords = action.payload;
//       })
//       .addCase(fetchPayslip.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default payslipSlice.reducer;


// src/features/payslip/payslipSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPayslip = createAsyncThunk(
  'payslip/fetchPayslip',
  async ({ month, year, emp_id }, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/employee/getEmployeePaySlipByMonth?month=${month}&year=${year}`, {
        // params: { month, year },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return response.data.salaryRecords;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const payslipSlice = createSlice({
  name: 'payslip',
  initialState: {
    salaryRecords: [],
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
        state.salaryRecords = action.payload;
      })
      .addCase(fetchPayslip.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default payslipSlice.reducer;
