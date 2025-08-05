// features/leaveForm/leaveFormSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpPost } from '../../../Httphandler'

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
      const response = await httpPost('/api/v1/employee/submitLeave', formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
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
    resetForm() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeaveForm.fulfilled, () => initialState)
      .addCase(submitLeaveForm.rejected, (state, action) => {
        console.error("Submit leave form failed:", action.payload);
      });
  },
});

export const { setLeaveField, setFile, resetForm } = leaveFormSlice.actions;
export default leaveFormSlice.reducer;
