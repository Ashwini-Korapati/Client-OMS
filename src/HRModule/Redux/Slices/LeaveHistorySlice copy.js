// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch leave data for the admin
// export const fetchLeaveStatus = createAsyncThunk(
//   'leaveHistory/fetchLeaveStatus',
//   async () => {
//     const response = await axios.get('http://localhost:8000/api/v1//employee/EmployeeLeaveMetricsByMonth'); // Use your API route here
//     return response.data.leaveRequests; // Assuming response contains leaveRequests array
//   }
// );

// // Update leave status by admin
// export const updateLeaveStatus = createAsyncThunk(
//   'leaveHistory/updateLeaveStatus',
//   async ({ leaveId, status }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/hr/updateLeaveStatus/${leaveId}`, { status });
//       return { leaveId, status };
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const leaveHistorySlice = createSlice({
//   name: 'leaveHistory',
//   initialState: {
//     leaveData: [],
//     loading: false,
//     error: null,
//     updateStatusSuccess: null,
//   },
//   reducers: {
//     clearUpdateStatus: (state) => {
//       state.updateStatusSuccess = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle fetch leave data
//       .addCase(fetchLeaveStatus.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchLeaveStatus.fulfilled, (state, action) => {
//         state.loading = false;
//         state.leaveData = action.payload;
//       })
//       .addCase(fetchLeaveStatus.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // Handle update leave status
//       .addCase(updateLeaveStatus.pending, (state) => {
//         state.updateStatusSuccess = null;
//       })
//       .addCase(updateLeaveStatus.fulfilled, (state, action) => {
//         state.updateStatusSuccess = `Leave request #${action.payload.leaveId} updated to ${action.payload.status}`;
//         // Update the local state for the specific leave request
//         const leave = state.leaveData.find(l => l.id === action.payload.leaveId);
//         if (leave) {
//           leave.status = action.payload.status.toUpperCase();
//         }
//       })
//       .addCase(updateLeaveStatus.rejected, (state, action) => {
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// export const { clearUpdateStatus } = leaveHistorySlice.actions;

// export default leaveHistorySlice.reducer;







import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch leave data for the admin
export const fetchLeaveStatus = createAsyncThunk(
  'leaveHistory/fetchLeaveStatus',
  async () => {
    const response = await axios.get('http://localhost:8000/api/v1/employee/EmployeeLeaveMetricsByMonth'); // Use your API route here
    return response.data.leaveRecords; // Correctly extract leaveRecords
  }
);

// Update leave status by admin
export const updateLeaveStatus = createAsyncThunk(
  'leaveHistory/updateLeaveStatus',
  async ({ leaveId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/hr/updateLeaveStatus/${leaveId}`, { status });
      return { leaveId, status };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const leaveHistorySlice = createSlice({
  name: 'leaveHistory',
  initialState: {
    leaveData: [],
    loading: false,
    error: null,
    updateStatusSuccess: null,
  },
  reducers: {
    clearUpdateStatus: (state) => {
      state.updateStatusSuccess = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetch leave data
      .addCase(fetchLeaveStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaveStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.leaveData = action.payload; // Action payload is now leaveRecords
      })
      .addCase(fetchLeaveStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle update leave status
      .addCase(updateLeaveStatus.pending, (state) => {
        state.updateStatusSuccess = null;
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        state.updateStatusSuccess = `Leave request #${action.payload.leaveId} updated to ${action.payload.status}`;
        // Update the local state for the specific leave request
        const leave = state.leaveData.find(l => l.emp_id === action.payload.leaveId); // Changed from l.id to l.emp_id
        if (leave) {
          leave.status = action.payload.status.toUpperCase();
        }
      })
      .addCase(updateLeaveStatus.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearUpdateStatus } = leaveHistorySlice.actions;

export default leaveHistorySlice.reducer;

