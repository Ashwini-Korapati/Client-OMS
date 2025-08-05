import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet } from '../../../Httphandler'

export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async (_, { rejectWithValue }) => {
  try {
    const response = await httpGet('/api/v1/employees/holidays');
    return response.data.holidaysByMonth;
  } catch (error) {
    console.error('Fetch holidays error:', error);
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch holidays');
  }
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
        state.error = null;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidaysByMonth = action.payload || [];
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectHolidaysByMonth = (state) => state.leaveCalendar.holidaysByMonth || [];

export default empleaveCalendarSlice.reducer;
