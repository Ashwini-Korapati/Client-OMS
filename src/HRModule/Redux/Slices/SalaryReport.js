import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpGet } from  '../../../Httphandler'

export const fetchSalaryByMonth = createAsyncThunk(
  'salary/fetchSalaryByMonth',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const response = await httpGet(`/api/v1/hr/getSalaryByMonth?month=${month}&year=${year}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch salary');
    }
  }
);

const reportSlice = createSlice({
  name: 'salary',
  initialState: {
    salaryRecords: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaryByMonth.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSalaryByMonth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.salaryRecords = action.payload.salaryRecords || [];
      })
      .addCase(fetchSalaryByMonth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default reportSlice.reducer;
