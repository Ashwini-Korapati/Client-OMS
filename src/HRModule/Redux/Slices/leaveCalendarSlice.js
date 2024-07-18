import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem('authToken');

export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
  const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json',
    },
      // body: JSON.stringify(response),
         credentials: 'include'
  });
  if (!response.ok) {
    throw new Error('Failed to fetch holidays');
  }
  const data = await response.json();
  return data.holidays;
});

const leaveCalendarSlice = createSlice({
  name: 'leaveCalendar',
  initialState: {
    holidays: [], 
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
        state.holidays = action.payload; 
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays || []; 

export default leaveCalendarSlice.reducer;
