// src/redux/slices/lopEmpSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../Httphandler' // Adjust path as needed

const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};

export const fetchEmployees = createAsyncThunk('lopEmp/fetchEmployees', async (_, { rejectWithValue }) => {
  try {
    const response = await http.get('/api/v1/hr/AllEmployee');
    return response.data.employees;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

const lopEmpSlice = createSlice({
  name: 'lopEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default lopEmpSlice.reducer;
