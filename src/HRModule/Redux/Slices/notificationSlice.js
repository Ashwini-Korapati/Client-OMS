// Redux/Slices/notificationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet, httpPut } from '../../../Httphandler';

// Fetch unread notifications
export const fetchUnreadNotifications = createAsyncThunk(
  'notifications/fetchUnreadNotifications',
  async (_, thunkAPI) => {
    try {
      const response = await httpGet('/api/v1/hr/notifications');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch notifications'
      );
    }
  }
);

// Mark a notification as read
export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (id, thunkAPI) => {
    try {
      await httpPut(`/api/v1/hr/notifications/${id}/mark-read`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to mark notification as read'
      );
    }
  }
);

// Notification slice
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    unreadNotifications: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnreadNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUnreadNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.unreadNotifications = action.payload.result || [];
      })
      .addCase(fetchUnreadNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.unreadNotifications = state.unreadNotifications.filter(
          (n) => n.id !== action.payload
        );
      });
  },
});

export default notificationsSlice.reducer;
