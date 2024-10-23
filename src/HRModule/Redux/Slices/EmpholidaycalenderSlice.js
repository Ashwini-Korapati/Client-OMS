import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem('authToken');

export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
  const response = await fetch('http://localhost:8000/api/v1/employees/holidays', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch holidays');
  }
  const data = await response.json();
  return data.holidaysByMonth; 
});

const empleaveCalendarSlice = createSlice({
  name: 'leaveCalendar',
  initialState: {
    holidaysByMonth: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidaysByMonth = action.payload || [];
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectHolidaysByMonth = (state) => state.leaveCalendar.holidaysByMonth || [];

export default empleaveCalendarSlice.reducer;










// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

// const token = localStorage.getItem('authToken');

// export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
//   const response = await fetch('http://localhost:8000/api/v1/employees/holidays', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch holidays');
//   }
//   const data = await response.json();
//   console.log('API Response:', data); // Debugging: Log the API response
//   return data.holidaysByMonth; // Adjusted based on the new structure
// });

// const empleaveCalendarSlice = createSlice({
//   name: 'leaveCalendar',
//   initialState: {
//     holidaysByMonth: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchHolidays.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchHolidays.fulfilled, (state, action) => {
//         state.loading = false;
//         state.holidaysByMonth = action.payload || [];
//         console.log('State after fetchHolidays.fulfilled:', state.holidaysByMonth); // Debugging: Log the state
//       })
//       .addCase(fetchHolidays.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// const selectLeaveCalendarState = (state) => state.leaveCalendar;

// export const selectHolidaysByMonth = createSelector(
//   [selectLeaveCalendarState],
//   (leaveCalendar) => leaveCalendar.holidaysByMonth || []
// );

// export default empleaveCalendarSlice.reducer;

