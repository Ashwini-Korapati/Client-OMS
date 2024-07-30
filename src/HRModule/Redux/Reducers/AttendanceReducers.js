import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
 
export const checkIn = createAsyncThunk(
  'attendance/checkIn',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/employee/attendence/check_in', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
 
// Async thunk for check-out
export const checkOut = createAsyncThunk(
  'attendance/checkOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/employee/attendence/check_out');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
 
const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: {
    shiftTime: '',
    workType: '',
    checkInTime: null,
    checkOutTime: null,
    totalHours: 0,
    selfie: '',
    status: 'idle',
    error: null,
    success: false,
  },
  reducers: {
    setShiftTime: (state, action) => {
      state.shiftTime = action.payload;
    },
    setWorkType: (state, action) => {
      state.workType = action.payload;
    },
    setSelfie: (state, action) => {
      state.selfie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkIn.fulfilled, (state, action) => {
        state.checkInTime = action.payload.check_in;
        state.success = true;
      })
      .addCase(checkOut.fulfilled, (state, action) => {
        state.checkOutTime = action.payload.check_out;
        state.totalHours = action.payload.total_hours; 
        state.success = true;
      })
      .addCase(checkIn.rejected, (state, action) => {
        state.error = action.payload;
        state.success = false;
      })
      .addCase(checkOut.rejected, (state, action) => {
        state.error = action.payload;
        state.success = false;
      });
  }
  
});
 
export const { setShiftTime, setWorkType, setSelfie } = attendanceSlice.actions;
 
export default attendanceSlice.reducer;