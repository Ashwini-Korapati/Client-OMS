// salarySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../Httphandler'

export const updateSalary = createAsyncThunk(
  'salary/updateSalary',
  async ({ emp_id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await http.put(`/hr/postSalary/${emp_id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An unknown error occurred');
    }
  }
);

const SalarySlice = createSlice({
  name: 'salary',
  initialState: {
    loading: false,
    isAuthenticatedAdmin: false,
    salaryDetails: null,
    error: null,
  },
  reducers: {
    getsalaryRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getsalarySuccess(state, action) {
      state.loading = false;
      state.isAuthenticatedAdmin = true;
      state.salaryDetails = action.payload.salaryDetails;
    },
    getsalaryReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.salaryDetails = action.payload.salaryDetails;
      })
      .addCase(updateSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getsalaryRequest, getsalarySuccess, getsalaryReject } = SalarySlice.actions;
export default SalarySlice.reducer;
