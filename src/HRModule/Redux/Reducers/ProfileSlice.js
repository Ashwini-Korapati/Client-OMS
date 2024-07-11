import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  emp: {},
  success: false,
  loading: false,
  error: null,
};

export const getProfile = createAsyncThunk('employee/getProfile', async () => {
  const response = await axios.get('http://localhost:8000/api/v1/employee/getEmpProfile');
  return response.data;
});

export const updateProfile = createAsyncThunk('employee/updateProfile', async (profileData) => {
  const response = await axios.put('http://localhost:8000/api/v1/employee/update/myprofile', profileData);
  return response.data;
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState; // Reset state to initial state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.emp = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.emp = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = employeeSlice.actions;

export default employeeSlice.reducer;
