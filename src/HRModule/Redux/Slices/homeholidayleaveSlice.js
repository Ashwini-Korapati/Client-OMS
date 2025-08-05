import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { httpGet } from '../../../Httphandler'; // Adjust path if needed

export const fetchHolidays1 = createAsyncThunk('leaveCalendar/fetchHolidays', async (_, { rejectWithValue }) => {
  try {
    const response = await httpGet('/hr/holidays'); // Path relative to base URL in httpHandler
    const data = response.data;

    const currentDate = dayjs();

    const upcomingHolidays = data.holidaysByMonth
      .filter(holiday => dayjs(holiday.date, 'DD MMM').isAfter(currentDate))
      .sort((a, b) => dayjs(a.date, 'DD MMM') - dayjs(b.date, 'DD MMM'))
      .slice(0, 4);

    return upcomingHolidays;
  } catch (error) {
    console.error('Failed to fetch holidays:', error);
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch holidays');
  }
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
        state.error = null;
      })
      .addCase(fetchHolidays1.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })
      .addCase(fetchHolidays1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays;

export default leaveCalendarSlice.reducer;
