import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch the token from where it is stored (e.g., localStorage)
const token = localStorage.getItem('authToken');

export const fetchHolidays = createAsyncThunk('leaveCalendar/fetchHolidays', async () => {
  const response = await fetch('http://localhost:8000/api/v1//hr/holidays', {
    method: 'GET', // Explicitly specify the GET method
    headers: {
      'Authorization': `Bearer ${token}`, // Include the Bearer token in the request headers
      'Content-Type': 'application/json',
    },
      // body: JSON.stringify(response),
         credentials: 'include'
  });
  if (!response.ok) {
    throw new Error('Failed to fetch holidays');
  }
  const data = await response.json();
  return data.holidays; // Ensure this matches your backend response
});

const leaveCalendarSlice = createSlice({
  name: 'leaveCalendar',
  initialState: {
    holidays: [], // Initialize as an empty array
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
        state.holidays = action.payload; // Assuming action.payload is an array of holidays
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error as needed
      });
  },
});

export const selectHolidays = (state) => state.leaveCalendar.holidays || []; // Ensure holidays is an empty array if undefined

export default leaveCalendarSlice.reducer;
