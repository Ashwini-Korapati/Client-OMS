// src/redux/slices/lopSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../Httphandler';

export const fetchLopData = createAsyncThunk(
  'lop/fetchLopData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get('/api/v1/hr/AllEmployee');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addLopData = createAsyncThunk(
  'lop/addLopData',
  async (lopData, { rejectWithValue }) => {
    try {
      const response = await http.post('/api/v1hr/lopByAdmin', lopData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const lopSlice = createSlice({
  name: 'lop',
  initialState: {
    lopData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLopData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLopData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lopData = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchLopData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addLopData.fulfilled, (state, action) => {
        if (action.payload && typeof action.payload === 'object') {
          state.lopData.push({
            ...action.payload,
            name: `${action.payload.firstName} ${action.payload.lastName}`,
          });
        }
        state.status = 'succeeded';
      })
      .addCase(addLopData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default lopSlice.reducer;
