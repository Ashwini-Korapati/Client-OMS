import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const token = localStorage.getItem('authToken');

export const fetchHolidays1 = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
  const response = await fetch('http://localhost:8000/api/v1/hr/holidays', {
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
  const currentDate = dayjs(); // Current date

  // Filter, sort, and select the next 4 upcoming holidays
  const upcomingHolidays = data.holidaysByMonth
    .filter(holiday => dayjs(holiday.date, 'DD MMM').isAfter(currentDate)) // Filter holidays that are in the future
    .sort((a, b) => dayjs(a.date, 'DD MMM') - dayjs(b.date, 'DD MMM')) // Sort by date
    .slice(0, 4); // Get the first 4 upcoming holidays

  return upcomingHolidays;
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
      .addCase(fetchHolidays1.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHolidays1.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })
      .addCase(fetchHolidays1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays;

export default leaveCalendarSlice.reducer;
