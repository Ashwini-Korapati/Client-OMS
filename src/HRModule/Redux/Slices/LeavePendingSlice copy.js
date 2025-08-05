import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet } from '../../../Httphandler' // Adjust path if needed

// Async thunk to fetch pending leave data using custom HTTP handler
export const fetchPendingLeave = createAsyncThunk(
  'leavePending/fetchPendingLeave',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpGet('/api/v1employee/getLeaveStatus');
      return response.data;
    } catch (error) {
      console.error('Error fetching pending leave:', error);
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

const leavePendingSlice = createSlice({
  name: 'leavePending',
  initialState: {
    pendingLeaveData: [],
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
        console.log('Fetched pending leave data:', action.payload);
        state.pendingLeaveData = action.payload;
        state.loading = false;
      })
      .addCase(fetchPendingLeave.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default leavePendingSlice.reducer;
