// src/redux/slices/monthlyattendanceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../Httphandler'

export const fetchEmployeeAttendanceByMonth = createAsyncThunk(
  'monthlyattendance/fetchEmployeeAttendanceByMonth',
  async ({ emp_id, month, year }, { rejectWithValue }) => {
    try {
      const response = await http.get('/api/v1/hr/employeeAttendence/bymonth', {
        params: { emp_id, month, year },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const monthlyattendanceSlice = createSlice({
  name: 'monthlyattendance',
  initialState: {
    attendanceData: [],
    employeeName: '',
    employeeDesignation: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeAttendanceByMonth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeAttendanceByMonth.fulfilled, (state, action) => {
        const { formatDate } = action.payload;
        state.attendanceData = formatDate;
        if (formatDate.length > 0) {
          state.employeeName = formatDate[0].firstName;
          state.employeeDesignation = formatDate[0].designation;
        } else {
          state.employeeName = '';
          state.employeeDesignation = '';
        }
        state.loading = false;
      })
      .addCase(fetchEmployeeAttendanceByMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
      });
  },
});

export default monthlyattendanceSlice.reducer;
