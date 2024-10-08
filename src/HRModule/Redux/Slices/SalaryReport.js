
// // salarySlice.js
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async action to fetch salary data by month and year
// export const fetchSalaryByMonth = createAsyncThunk(
//   'salary/fetchSalaryByMonth',
//   async ({ month, year }, { rejectWithValue }) => {
//     try {
//       // Send selected month and year as query parameters
//       const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalaryByMonth?month=${month}&year=${year}`);
//       return response.data; // Assuming the backend returns the salary data
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );



// // Salary slice
// const reportSlice = createSlice({
//     name: 'salary',
//     initialState: {
//       salaryRecords: [], // Changed to match what your component expects
//       status: 'idle',
//       error: null,
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchSalaryByMonth.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(fetchSalaryByMonth.fulfilled, (state, action) => {
//           state.status = 'succeeded';
//           // Ensure salaryRecords is an array
//           state.salaryRecords = Array.isArray(action.payload) ? action.payload : [];
//         })
//         .addCase(fetchSalaryByMonth.rejected, (state, action) => {
//           state.status = 'failed';
//           state.error = action.payload;
//         });
//     },
//   });
  

// export default reportSlice.reducer;



// salarySlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSalaryByMonth = createAsyncThunk(
  'salary/fetchSalaryByMonth',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalaryByMonth?month=${month}&year=${year}`);
      return response.data; // Return the entire response data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const reportSlice = createSlice({
  name: 'salary',
  initialState: {
    salaryRecords: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaryByMonth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalaryByMonth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Extract salaryRecords from the response data
        state.salaryRecords = action.payload.salaryRecords || [];
      })
      .addCase(fetchSalaryByMonth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default reportSlice.reducer;