// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   currentStep: 0,
// //   paymentType: '',
// //   isCostCenterFormVisible: false,
// //   isLocationFormVisible: false,
// //   isDepartmentFormVisible: false,
// //   isCompanyFormVisible: false,
// //   costCenters: [],
// //   locations: [],
// //   departments: [],
// //   companies: [],
// //   formData: {}
// // };

// // const employeeSlice = createSlice({
// //   name: 'addemployee',
// //   initialState,
// //   reducers: {
// //     setCurrentStep: (state, action) => {
// //       state.currentStep = action.payload;
// //     },
// //     setPaymentType: (state, action) => {
// //       state.paymentType = action.payload;
// //     },
// //     setCostCenterFormVisible: (state, action) => {
// //       state.isCostCenterFormVisible = action.payload;
// //     },
// //     setLocationFormVisible: (state, action) => {
// //       state.isLocationFormVisible = action.payload;
// //     },
// //     setDepartmentFormVisible: (state, action) => {
// //       state.isDepartmentFormVisible = action.payload;
// //     },
// //     setCompanyFormVisible: (state, action) => {
// //       state.isCompanyFormVisible = action.payload;
// //     },
// //     setCostCenters: (state, action) => {
// //       state.costCenters = action.payload;
// //       localStorage.setItem('costCenters', JSON.stringify(action.payload));
// //     },
// //     setLocations: (state, action) => {
// //       state.locations = action.payload;
// //       localStorage.setItem('locations', JSON.stringify(action.payload));
// //     },
// //     setDepartments: (state, action) => {
// //       state.departments = action.payload;
// //       localStorage.setItem('departments', JSON.stringify(action.payload));
// //     },
// //     setCompanies: (state, action) => {
// //       state.companies = action.payload;
// //       localStorage.setItem('companies', JSON.stringify(action.payload));
// //     },
// //     setFormData: (state, action) => {
// //       state.formData = { ...state.formData, ...action.payload };
// //     }
// //   },
// // });

// // export const {
// //   setCurrentStep,
// //   setPaymentType,
// //   setCostCenterFormVisible,
// //   setLocationFormVisible,
// //   setDepartmentFormVisible,
// //   setCompanyFormVisible,
// //   setCostCenters,
// //   setLocations,
// //   setDepartments,
// //   setCompanies,
// //   setFormData,
// // } = employeeSlice.actions;

// // export default employeeSlice.reducer;



// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   currentStep: 0,
// //   paymentType: '',
// //   formData: {
// //     // Add all form fields here with initial values if needed
// //     employeeNumberSeries: '',
// //     probationPeriod: '',
// //     employeeNo: '',
// //     confirmationDate: null,
// //     name: '',
// //     email: '',
// //     dateOfBirth: null,
// //     mobileNumber: '',
// //     aadhaarNumber: '',
// //     emergencyContactName: '',
// //     gender: '',
// //     emergencyContactNumber: '',
// //     reportingManager: '',
// //     fathersName: '',
// //     status: '',
// //     spouseName: '',
// //     dateOfJoining: null,
// //     referredBy: '',
// //     // Additional fields for other steps
// //   },
// //   costCenters: [],
// //   locations: [],
// //   departments: [],
// //   companies: [],
// // };

// // const employeeSlice = createSlice({
// //   name: 'employee',
// //   initialState,
// //   reducers: {
// //     setCurrentStep(state, action) {
// //       state.currentStep = action.payload;
// //     },
// //     setPaymentType(state, action) {
// //       state.paymentType = action.payload;
// //     },
// //     updateFormData(state, action) {
// //       state.formData = { ...state.formData, ...action.payload };
// //     },
// //     setCostCenters(state, action) {
// //       state.costCenters = action.payload;
// //     },
// //     setLocations(state, action) {
// //       state.locations = action.payload;
// //     },
// //     setDepartments(state, action) {
// //       state.departments = action.payload;
// //     },
// //     setCompanies(state, action) {
// //       state.companies = action.payload;
// //     },
// //   },
// // });

// // export const { setCurrentStep, setPaymentType, updateFormData, setCostCenters, setLocations, setDepartments, setCompanies } = employeeSlice.actions;

// // export default employeeSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentStep: 0,
//   paymentType: '',
//   formData: {},
//   costCenters: [],
//   locations: [],
//   departments: [],
//   companies: [],
// };

// const addEmployeeSlice = createSlice({
//   name: 'addEmployee',
//   initialState,
//   reducers: {
//     setCurrentStep: (state, action) => {
//       state.currentStep = action.payload;
//     },
//     setPaymentType: (state, action) => {
//       state.paymentType = action.payload;
//     },
//     updateFormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     setCostCenters: (state, action) => {
//       state.costCenters = action.payload;
//     },
//     setLocations: (state, action) => {
//       state.locations = action.payload;
//     },
//     setDepartments: (state, action) => {
//       state.departments = action.payload;
//     },
//     setCompanies: (state, action) => {
//       state.companies = action.payload;
//     },
//   },
// });

// export const {
//   setCurrentStep,
//   setPaymentType,
//   updateFormData,
//   setCostCenters,
//   setLocations,
//   setDepartments,
//   setCompanies,
// } = addEmployeeSlice.actions;

// export default addEmployeeSlice.reducer;



// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const addEmployeeAsync = createAsyncThunk(
//   'addEmployee/addEmployeeAsync',
//   async (employeeData, { rejectWithValue }) => {
//     const token = localStorage.getItem('authToken'); // Retrieve the token
//     if (!token) {
//       throw new Error('Token not found');
//     }

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/hr/addEmployee', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employeeData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data; // Successful response
//     } catch (error) {
//       return rejectWithValue(error.message); // Handle error
//     }
//   }
// );

// const initialState = {
//   currentStep: 0,
//   paymentType: '',
//   formData: {},
//   costCenters: [],
//   locations: [],
//   departments: [],
//   companies: [],
//   status: 'idle',
//   error: null,
// };

// const addEmployeeSlice = createSlice({
//   name: 'addEmployee',
//   initialState,
  
//   reducers: {
//     setCurrentStep: (state, action) => {
//       state.currentStep = action.payload;
//     },
//     setPaymentType: (state, action) => {
//       state.paymentType = action.payload;
//     },
//     updateFormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     setCostCenters: (state, action) => {
//       state.costCenters = action.payload;
//     },
//     setLocations: (state, action) => {
//       state.locations = action.payload;
//     },
//     setDepartments: (state, action) => {
//       state.departments = action.payload;
//     },
//     setCompanies: (state, action) => {
//       state.companies = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addEmployeeAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(addEmployeeAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Handle successful response
//       })
//       .addCase(addEmployeeAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export const {
//   setCurrentStep,
//   setPaymentType,
//   updateFormData,
//   setCostCenters,
//   setLocations,
//   setDepartments,
//   setCompanies,
// } = addEmployeeSlice.actions;

// export default addEmployeeSlice.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to add employee
// export const addEmployeeAsync = createAsyncThunk(
//   'addEmployee/addEmployeeAsync',
//   async (employeeData, { rejectWithValue }) => {
//     const token = localStorage.getItem('authToken'); // Retrieve the token
//     if (!token) {
//       return rejectWithValue('Token not found');
//     }

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/hr/addEmployee', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employeeData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data; // Successful response
//     } catch (error) {
//       return rejectWithValue(error.message); // Handle error
//     }
//   }
// );

// Example of addEmployeeAsync function
const addEmployeeAsync = createAsyncThunk(
  'employees/addEmployee',
  async (employeeData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/hr/addEmployee', employeeData);
      return response.data; // Ensure this returns the correct structure
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



// export const addEmployeeAsync = createAsyncThunk(
//   'addEmployee/addEmployeeAsync',
//   async (employeeData, { rejectWithValue }) => {
//     const token = localStorage.getItem('authToken'); // Retrieve the token
//     if (!token) {
//       return rejectWithValue('Token not found');
//     }

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/hr/addEmployee', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employeeData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Extract error message
//         throw new Error(errorData.message || 'Network response was not ok');
//       }

//       const data = await response.json();
//       return data; // Successful response
//     } catch (error) {
//       console.error('Error in addEmployeeAsync:', error); // Log error
//       return rejectWithValue(error.message); // Handle error
//     }
//   }
// );


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
        // Optionally clear form data or handle successful response
        state.formData = {}; // Clear form data if needed
      })
      .addCase(addEmployeeAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'An unknown error occurred'; // Ensure error payload is handled
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
