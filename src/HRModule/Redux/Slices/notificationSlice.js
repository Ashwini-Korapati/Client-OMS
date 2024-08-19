// // // src/store/notificationSlice.js

// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Async thunk to fetch notifications
// // export const fetchNotifications = createAsyncThunk(
// //   'notifications/fetchNotifications',
// //   async () => {
// //     const response = await axios.get('http://localhost:8000/api/v1/hr/notifications');
// //     return response.data;
// //   }
// // );

// // const notificationSlice = createSlice({
// //   name: 'notifications',
// //   initialState: {
// //     notifications: [], 
// //     notificationCount: 0,
// //     birthcount: 0,
// //     birthdayRecords: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchNotifications.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchNotifications.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.notifications = action.payload.result || []; 
// //         state.notificationCount = action.payload.notificationCount;
// //         state.birthcount = action.payload.birthcount;
// //         state.birthdayRecords = action.payload.birthdayRecords;
// //       })
// //       .addCase(fetchNotifications.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export default notificationSlice.reducer;



// // src/store/notificationSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch unread notifications
// export const fetchUnreadNotifications = createAsyncThunk('notifications/fetchUnreadNotifications', async () => {
//   const response = await axios.get('http://localhost:8000/api/v1/hr/notifications?status=unread'); // Adjust the endpoint if needed
//   return response.data;
// });

// const notificationsSlice = createSlice({
//   name: 'notifications',
//   initialState: {
//     unreadNotifications: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUnreadNotifications.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUnreadNotifications.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.unreadNotifications = action.payload.result; // Adjust based on API response structure
//       })
//       .addCase(fetchUnreadNotifications.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default notificationsSlice.reducer;



  // src/store/notificationSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch unread notifications
export const fetchUnreadNotifications = createAsyncThunk('notifications/fetchUnreadNotifications', async () => {
  const response = await axios.get('http://localhost:8000/api/v1/hr/notifications?status=unread'); 
  return response.data;
});

// Async thunk to mark notification as read
export const markNotificationAsRead = createAsyncThunk('notifications/markNotificationAsRead', async (id) => {
  await axios.post(`http://localhost:8000/api/v1/hr/notifications/${id}/mark-read`);
  return id;
});

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
        state.unreadNotifications = action.payload.result; // Adjust based on API response structure
      })
      .addCase(fetchUnreadNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.unreadNotifications = state.unreadNotifications.filter(
          (notification) => notification.id !== action.payload
        );
      });
  },
});

export default notificationsSlice.reducer;
