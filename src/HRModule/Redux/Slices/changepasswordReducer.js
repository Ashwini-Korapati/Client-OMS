// src/redux/slices/changepasswordSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpPut } from '../../../Httphandler'
import { API } from '../../../../config'

export const changePassword = createAsyncThunk(
  'changepassword/changePassword',
  async ({ oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const payload = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      const response = await httpPut(API.CHANGE_PASSWORD, payload);
      return response;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const changepasswordSlice = createSlice({
  name: 'changepassword',
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: null,
  },
  reducers: {
    clearPasswordError: (state) => {
      state.error = null;
    },
    resetPasswordState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { clearPasswordError, resetPasswordState } = changepasswordSlice.actions;
export default changepasswordSlice.reducer;
