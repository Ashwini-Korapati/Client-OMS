import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGet, httpPost } from '../../../Httphandler' // adjust the path if needed

const initialState = {
  employees: [],
  salaryDetails: [],
  loading: false,
  error: null,
};

// Save salary
export const saveSalary = createAsyncThunk(
  'salary/saveSalary',
  async (salaryData, { rejectWithValue }) => {
    try {
      const response = await httpPost('/api/v1/hr/postCalcSalary', salaryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to save salary');
    }
  }
);

// Fetch employees
export const fetchEmployees1 = createAsyncThunk(
  'employees/fetchEmployees1',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpGet('/api/employees');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch employees');
    }
  }
);

// Get salary by employee ID
export const getSalary = createAsyncThunk(
  'salary/getSalary',
  async (emp_id, { rejectWithValue }) => {
    try {
      const response = await httpGet(`/api/v1/hr/getSalarybyEmployee/${emp_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch salary');
    }
  }
);

// Process salary
export const processSalary = createAsyncThunk(
  'salary/processSalary',
  async ({ emp_id, month, year }, { rejectWithValue }) => {
    try {
      const response = await httpPost('/api/v1/hr/postSalaryProcess', { emp_id, month, year });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to process salary');
    }
  }
);

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getSalary
      .addCase(getSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.salaryDetails = action.payload.salaryDetails || [];
      })
      .addCase(getSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // saveSalary
      .addCase(saveSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveSalary.fulfilled, (state, action) => {
        state.loading = false;
        state.salaryDetails = [action.payload];
      })
      .addCase(saveSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // processSalary
      .addCase(processSalary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processSalary.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(processSalary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAuthError } = salarySlice.actions;
export default salarySlice.reducer;
