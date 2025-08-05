import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet, httpPut } from  '../../../Httphandler' // Adjust path if needed

// Fetch leave data for the admin
export const fetchLeaveStatus = createAsyncThunk(
  'leaveHistory/fetchLeaveStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpGet('/api/v1/employee/EmployeeLeaveMetricsByMonth');
      return response.data.leaveRecords;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch leave data');
    }
  }
);

// Update leave status by admin
export const updateLeaveStatus = createAsyncThunk(
  'leaveHistory/updateLeaveStatus',
  async ({ leaveId, status }, { rejectWithValue }) => {
    try {
      await httpPut(`/hr/updateLeaveStatus/${leaveId}`, { status });
      return { leaveId, status };
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
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
      .addCase(fetchLeaveStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaveStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.leaveData = action.payload;
      })
      .addCase(fetchLeaveStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(updateLeaveStatus.pending, (state) => {
        state.updateStatusSuccess = null;
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        state.updateStatusSuccess = `Leave request #${action.payload.leaveId} updated to ${action.payload.status}`;
        const leave = state.leaveData.find(
          (l) => l.emp_id === action.payload.leaveId
        );
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
