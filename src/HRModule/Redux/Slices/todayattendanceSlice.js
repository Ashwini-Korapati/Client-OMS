import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchTodayAttendance = createAsyncThunk(
  'todayattendance/fetchTodayAttendance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/hr/TodayAttendence');
      return response.data.attendanceSummary;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.office = action.payload.office;
        state.workFromHome = action.payload.workFromHome;
        state.leave = action.payload.leave;
        state.sickLeave = action.payload.sickLeave;
        state.absent = action.payload.absent;
        state.totalPresent = action.payload.totalPresent;
        state.loading = false;
      })
      .addCase(fetchTodayAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});
 
export default todayattendanceSlice.reducer;