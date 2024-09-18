import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchLopData = createAsyncThunk(
  'lop/fetchLopData',
  async () => {
    const response = await axios.get('http://localhost:8000/api/v1/hr/AllEmployee');
    return response.data;
  }
);
 
export const addLopData = createAsyncThunk(
  'lop/addLopData',
  async (lopData) => {
    const response = await axios.post('http://localhost:8000/api/v1/hr/lopByAdmin', lopData);
    return response.data;
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
        state.error = action.error.message;
      })
      .addCase(addLopData.fulfilled, (state, action) => {
        if (action.payload && typeof action.payload === 'object') {
          state.lopData.push({
            ...action.payload,
            name: `${action.payload.firstName} ${action.payload.lastName}`, 
          });
        }
        state.status = 'succeeded';
      });
  },
});
 
export default lopSlice.reducer;