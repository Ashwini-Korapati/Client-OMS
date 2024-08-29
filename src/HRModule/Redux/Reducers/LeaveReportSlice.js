import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  leaveData: [],
  selectedMonth: '',
  selectedEmployee: '',
  loading: false,
  error: null,
};

export const fetchLeaveData = createAsyncThunk('leave/fetchLeaveData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/hr/getLeaveStatus', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log('API Response:', response.data);
    return response.data.leaveRequests;
  } catch (error) {
    console.error('Error fetching leave data:', error.response || error.message);
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

export const updateLeaveStatus = createAsyncThunk(
  'leave/updateLeaveStatus',
  async ({ leaveId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/v1/hr/updateLeaveStatus/${leaveId}`, { status }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('Updated leave status:', response.data);
      return { leaveId, status };
    } catch (error) {
      console.error('Error updating leave status:', error.response || error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
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
        state.error = action.payload?.message || action.payload || 'An unknown error occurred';
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        console.log('Updated leave status:', action.payload);
        state.loading = false;
      })
      .addCase(updateLeaveStatus.rejected, (state, action) => {
        console.error('Error updating leave status:', action.payload);
        state.loading = false;
        state.error = action.payload?.message || action.payload || 'An unknown error occurred';
      });
  },
});

export const { setMonth, setEmployee, setStatus } = leaveReportSlice.actions;
export default leaveReportSlice.reducer;
