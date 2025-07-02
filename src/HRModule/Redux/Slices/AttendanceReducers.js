
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
// // Async thunk for check-in
// export const checkIn = createAsyncThunk(
//   'attendance/checkIn',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/employee/attendence/check_in', formData);

//       console.log(formData);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const checkIn = createAsyncThunk(
  'attendance/checkIn',
  async (formData, { rejectWithValue }) => {
    try {
      // Debug: Log FormData contents
      console.log('FormData being sent:');
      if (formData instanceof FormData) {
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }
      } else {
        console.log('FormData object:', formData);
      }

      const response = await axios.post('http://localhost:8000/api/v1/employee/attendence/check_in', formData);
      console.log('Response is:', response.data);
      return response.data;
      
    } catch (error) {
      // Better error logging
      console.error('Error details is:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        headers: error.response?.headers,
        config: error.config
      });
      return rejectWithValue(error.response?.data || error.message);
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
    selfie: null,
    success: false,
    error: null,
    date: ''
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
        state.date = action.payload.date;
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
  },
});
 
export const { setShiftTime, setWorkType, setSelfie } = attendanceSlice.actions;
 
export default attendanceSlice.reducer;