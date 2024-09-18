 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
// Async thunk to fetch pending leave data from the backend
export const fetchPendingLeave = createAsyncThunk('leavePending/fetchPendingLeave', async () => {
  const response = await axios.get('http://localhost:8000/api/v1/employee/getLeaveStatus');
  return response.data;
});
 
const leavePendingSlice = createSlice({
  name: 'leavePending',
  initialState: {
    pendingLeaveData: [], // Ensure the initial state is an empty array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingLeave.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingLeave.fulfilled, (state, action) => {
        console.log('Fetched pending leave data:', action.payload); // Log the data
        state.pendingLeaveData = action.payload; // Ensure the data is an array, if not adjust accordingly
        state.loading = false;
      })
      .addCase(fetchPendingLeave.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
 
export default leavePendingSlice.reducer;