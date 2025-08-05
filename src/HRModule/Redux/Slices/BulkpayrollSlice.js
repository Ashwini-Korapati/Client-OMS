import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet } from '../../../Httphandler' // ✅ Use centralized HTTP handler

export const processSalaryForAllEmployees = createAsyncThunk(
  'payroll/processSalaryForAllEmployees',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      // You can also pass query params if needed like `/getSalary?month=${month}&year=${year}`
      const response = await httpGet('/api/v1/hr/getSalary');
      return response;
    } catch (error) {
      console.error('Error processing salary:', error);
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const payrollSlice = createSlice({
  name: 'payroll',
  initialState: {
    salaryProcessing: false,
    salaryProcessed: [],
    newEmployees: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processSalaryForAllEmployees.pending, (state) => {
        state.salaryProcessing = true;
        state.error = null;
      })
      .addCase(processSalaryForAllEmployees.fulfilled, (state, action) => {
        state.salaryProcessing = false;
        state.salaryProcessed = action.payload.salaryProcessed;
        state.newEmployees = action.payload.newEmployees;
      })
      .addCase(processSalaryForAllEmployees.rejected, (state, action) => {
        state.salaryProcessing = false;
        state.error = action.payload;
      });
  },
});

export default payrollSlice.reducer;
