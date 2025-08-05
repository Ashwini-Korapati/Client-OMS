import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpHandler from '../../../Httphandler'
const initialState = {
  leave_type: '',
  start_date: null,
  session1: '',
  end_date: null,
  session2: '',
  teamLeaderEmail: '',
  hrEmail: [],
  contact_list: '',
};

export const submitLeaveForm = createAsyncThunk(
  'leaveForm/submitLeaveForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post('/api/v1/employee/submitLeave', formData);
      return response.data;
    } catch (error) {
      console.error('Submit leave form failed:', error);
      return rejectWithValue(error.response?.data?.message || error.message || 'Failed to submit form');
    }
  }
);

const leaveFormSlice = createSlice({
  name: 'leaveForm',
  initialState,
  reducers: {
    setLeaveField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setFile(state, action) {
      state.file = action.payload;
    },
    resetForm(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeaveForm.fulfilled, () => {
        return initialState;
      })
      .addCase(submitLeaveForm.rejected, (state, action) => {
        console.error('Submit leave form failed:', action.payload);
      });
  },
});

export const { setLeaveField, setFile, resetForm } = leaveFormSlice.actions;
export default leaveFormSlice.reducer;
