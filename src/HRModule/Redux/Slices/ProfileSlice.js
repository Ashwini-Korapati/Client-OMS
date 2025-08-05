import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet, httpPut } from '../../../Httphandler' // Adjust path as needed

const initialState = {
  emp: null,
  loading: false,
  error: null,
};

// Fetch employee profile
export const getProfile = createAsyncThunk(
  'employee/getProfile',
  async (_, thunkAPI) => {
    try {
      const response = await httpGet('/api/v1/employee/getEmpProfile');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch profile');
    }
  }
);

// Update employee profile
export const updateProfile = createAsyncThunk(
  'employee/updateProfile',
  async (formData, thunkAPI) => {
    try {
      const response = await httpPut('/api/v1/employee/update/myprofile', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to update profile');
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.emp = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.emp = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = employeeSlice.actions;

export default employeeSlice.reducer;
