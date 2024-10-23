import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
      const response = await fetch("http://localhost:8000/api/v1/employee/submitLeave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      return data;
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
    resetForm(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeaveForm.fulfilled, (state) => {
        return initialState;
      })
      .addCase(submitLeaveForm.rejected, (state, action) => {
        console.error("Submit leave form failed:", action.payload);
      });
  },
});

export const { setLeaveField, setFile, resetForm } = leaveFormSlice.actions;
export default leaveFormSlice.reducer;