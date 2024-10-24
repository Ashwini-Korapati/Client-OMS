import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
 
 
 
export const processSalaryForAllEmployees = createAsyncThunk(
    'payroll/processSalaryForAllEmployees',
    async ({ month, year }, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/hr/postSalaryProcessForAllEmployee', {
          month,
          year,
        });
        return response.data;
      } catch (error) {
        // Log the error for debugging
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