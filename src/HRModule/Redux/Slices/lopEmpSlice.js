import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 
const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};
 
export const fetchEmployees = createAsyncThunk('lopEmp/fetchEmployees', async () => {
  const response = await axios.get('http://localhost:8000/api/v1/hr/AllEmployee');
  return response.data.employees; 
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
        state.error = action.error.message;
      });
  },
});
 
export default lopEmpSlice.reducer;