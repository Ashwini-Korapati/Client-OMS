import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchEmployeeAttendanceByMonth = createAsyncThunk(
  'monthlyattendance/fetchEmployeeAttendanceByMonth',
  async ({ emp_id, month, year }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/hr/employeeAttendence/bymonth`, {
        params: { emp_id, month, year },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.error = action.payload.message;
      });
  },
});
 
export default monthlyattendanceSlice.reducer;