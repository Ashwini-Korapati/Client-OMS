
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { environment } from '../../../../environment';

const token = localStorage.getItem('authToken');
const MAX_RETRIES = 3;

export const fetchHolidays = createAsyncThunk(
  'leaveCalendar/fetchHolidays',
  async (_, { getState, rejectWithValue }) => {
    const { leaveCalendar } = getState();

    // Check if holidays are already fetched for the current year to prevent refetching
    if (leaveCalendar.holidays.length > 0) {
      return leaveCalendar.holidays;
    }

    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        const { data } = await axios.get(`${environment.APIURL}hr/holidays`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        return data.holidaysByMonth; // Assuming data.holidaysByMonth is the array of holidays
      } catch (error) {
        if (error.response && error.response.status === 429) {
          retries += 1;
          const retryAfter = error.response.headers['retry-after'] || 1;
          await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        } else {
          return rejectWithValue(
            error.response ? error.response.data.message : error.message
          );
        }
      }
    }

    return rejectWithValue('Max retries reached');
  }
);

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
        state.error = null; // Reset error on new fetch
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload; // Store holiday data in holidays array
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays || [];

export default leaveCalendarSlice.reducer;
