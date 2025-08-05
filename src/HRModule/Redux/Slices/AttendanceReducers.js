// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { httpPost } from '../../../Httphandler';

// export const checkIn = createAsyncThunk(
//   'attendance/checkIn',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await httpPost('/api/v1/employee/attendence/check_in', formData);
//       if (!response.success) {
//         throw new Error(response.message || 'Failed to check in');
//       }
//       return {
//         check_in: response.check_in_time,
//         date: response.date
//       };
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// export const checkOut = createAsyncThunk(
//   'attendance/checkOut',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await httpPost('/api/v1/employee/attendence/check_out');
//       if (!response.success) {
//         throw new Error(response.message || 'Failed to check out');
//       }
//       return {
//         check_out: response.check_out_time,
//         total_hours: response.total_hours
//       };
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// const attendanceSlice = createSlice({
//   name: 'attendance',
//   initialState: {
//     shiftTime: '',
//     workType: '',
//     checkInTime: null,
//     checkOutTime: null,
//     totalHours: 0,
//     selfie: null,
//     isLoading: false,
//     error: null,
//     date: ''
//   },
//   reducers: {
//     setShiftTime: (state, action) => {
//       state.shiftTime = action.payload;
//     },
//     setWorkType: (state, action) => {
//       state.workType = action.payload;
//     },
//     setSelfie: (state, action) => {
//       state.selfie = action.payload;
//     },
//     resetAttendance: (state) => {
//       state.checkInTime = null;
//       state.checkOutTime = null;
//       state.totalHours = 0;
//       state.error = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(checkIn.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(checkIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.checkInTime = action.payload.check_in;
//         state.date = action.payload.date;
//         state.error = null;
//       })
//       .addCase(checkIn.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(checkOut.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(checkOut.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.checkOutTime = action.payload.check_out;
//         state.totalHours = action.payload.total_hours;
//         state.error = null;
//       })
//       .addCase(checkOut.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const { 
//   setShiftTime, 
//   setWorkType, 
//   setSelfie,
//   resetAttendance 
// } = attendanceSlice.actions;

// export default attendanceSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpPost } from '../../../Httphandler';

export const checkIn = createAsyncThunk(
  'attendance/checkIn',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await httpPost('/api/v1/employee/attendence/check_in', formData);
      
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to check in');
      }
      return {
        check_in: response.data.check_in_time,
        date: response.data.date
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const checkOut = createAsyncThunk(
  'attendance/checkOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpPost('/api/v1/employee/attendence/check_out');
      
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to check out');
      }
      return {
        check_out: response.data.check_out_time,
        total_hours: response.data.total_hours
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
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
    isLoading: false,
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
    resetAttendance: (state) => {
      state.checkInTime = null;
      state.checkOutTime = null;
      state.totalHours = 0;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkInTime = action.payload.check_in;
        state.date = action.payload.date;
        state.error = null;
      })
      .addCase(checkIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(checkOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkOutTime = action.payload.check_out;
        state.totalHours = action.payload.total_hours;
        state.error = null;
      })
      .addCase(checkOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { 
  setShiftTime, 
  setWorkType, 
  setSelfie,
  resetAttendance 
} = attendanceSlice.actions;

export default attendanceSlice.reducer;