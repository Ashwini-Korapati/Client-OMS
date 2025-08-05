// todayattendanceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../Httphandler'; // adjust path as per your structure

export const fetchTodayAttendance = createAsyncThunk(
  'todayattendance/fetchTodayAttendance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get('/api/v1/hr/TodayAttendence');
      return response.data.attendanceSummary;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch attendance');
    }
  }
);

const todayattendanceSlice = createSlice({
  name: 'todayattendance',
  initialState: {
    office: 0,
    workFromHome: 0,
    leave: 0,
    sickLeave: 0,
    absent: 0,
    totalPresent: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodayAttendance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodayAttendance.fulfilled, (state, action) => {
        const {
          office,
          workFromHome,
          leave,
          sickLeave,
          absent,
          totalPresent,
        } = action.payload;

        state.office = office;
        state.workFromHome = workFromHome;
        state.leave = leave;
        state.sickLeave = sickLeave;
        state.absent = absent;
        state.totalPresent = totalPresent;
        state.loading = false;
      })
      .addCase(fetchTodayAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todayattendanceSlice.reducer;
