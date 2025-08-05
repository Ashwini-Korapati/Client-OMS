import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet, httpPut } from '../../../Httphandler' // Adjust the path as needed

const initialState = {
  leaveData: [],
  selectedMonth: '',
  selectedEmployee: '',
  loading: false,
  error: null,
};

// Fetch leave data
export const fetchLeaveData = createAsyncThunk(
  'leave/fetchLeaveData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpGet('/api/v1/hr/getLeaveStatus');
      console.log('API Response:', response.data);
      return response.data.leaveRequests;
    } catch (error) {
      console.error('Error fetching leave data:', error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Update leave status
export const updateLeaveStatus = createAsyncThunk(
  'leave/updateLeaveStatus',
  async ({ leaveId, status }, { rejectWithValue }) => {
    try {
      await httpPut(`/api/v1/hr/updateLeaveStatus/${leaveId}`, { status });
      return { leaveId, status };
    } catch (error) {
      console.error('Error updating leave status:', error);
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

const leaveReportSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    setStatus: (state, action) => {
      const { leaveId, status } = action.payload;
      const leaveToUpdate = state.leaveData.find(item => item.id === leaveId);
      if (leaveToUpdate) {
        leaveToUpdate.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaveData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaveData.fulfilled, (state, action) => {
        console.log('Fetched leave data:', action.payload);
        state.leaveData = action.payload;
        state.loading = false;
      })
      .addCase(fetchLeaveData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        const { leaveId, status } = action.payload;
        const item = state.leaveData.find(item => item.id === leaveId);
        if (item) item.status = status;
        state.loading = false;
      })
      .addCase(updateLeaveStatus.rejected, (state, action) => {
        console.error('Error updating leave status:', action.payload);
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      });
  },
});

export const { setMonth, setEmployee, setStatus } = leaveReportSlice.actions;
export default leaveReportSlice.reducer;
