import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addEmployeeAsync = createAsyncThunk(
  'employees/addEmployee',
  async (employeeData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/hr/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  currentStep: 0,
  paymentType: '',
  formData: {},
  costCenters: [],
  locations: [],
  departments: [],
  companies: [],
  status: 'idle',
  error: null,
};

// Create slice
const addEmployeeSlice = createSlice({
  name: 'addEmployee',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setCostCenters: (state, action) => {
      state.costCenters = action.payload;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEmployeeAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addEmployeeAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.formData = {}; // Optionally clear form data or handle successful response
      })
      .addCase(addEmployeeAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An unknown error occurred';
        toast.error(`Failed to add employee: ${state.error}`);
      });
  },
});

// Export actions
export const {
  setCurrentStep,
  setPaymentType,
  updateFormData,
  setCostCenters,
  setLocations,
  setDepartments,
  setCompanies,
} = addEmployeeSlice.actions;

// Export reducer
export default addEmployeeSlice.reducer;
