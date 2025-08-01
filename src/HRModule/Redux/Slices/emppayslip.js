
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
