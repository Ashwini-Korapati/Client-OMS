// // import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit';
// // import axios from 'axios';


// // export const fetchEmployees1 = createAsyncThunk(
// //   'employees/fetchEmployees',
// //   async () => {
// //     const response = await fetch('/api/employees'); // Adjust the URL to your API endpoint
// //     return response.json();
// //   }
// // );


// // export const getSalary = (emp_id) => async (dispatch) => {
// //     try {
// //       dispatch(getsalaryRequest());
// //       const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
// //       console.log('API Response:', response); // Log entire response
// //       dispatch(getsalarySuccess(response.data));
// //     } catch (error) {
// //       console.error('Error fetching salary:', error); // Log the error object
// //       dispatch(getsalaryReject(error.message));
// //     }
// //   };
  
// //   const SalarySlice = createSlice({
// //     name: 'salary',
// //     initialState: {
// //       salaryDetails: null,
// //       loading: true,
// //       error: null,
// //     },
// //     reducers: {
// //       getsalaryRequest(state) {
// //         state.loading = true;
// //       },
// //       getsalarySuccess(state, action) {
// //         state.loading = false;
// //         state.salaryDetails = action.payload; // Ensure this is the correct structure
// //       },
// //       getsalaryReject(state, action) {
// //         state.loading = false;
// //         state.error = action.payload;
// //       },
// //     },
// //   });

 

  
// //   export default SalarySlice.reducer;
  

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunks
// export const fetchEmployees1 = createAsyncThunk(
//   'employees/fetchEmployees',
//   async () => {
//     const response = await fetch('/api/employees'); // Adjust the URL to your API endpoint
//     return response.json();
//   }
// );

// // export const getSalary = (emp_id) => async (dispatch) => {
// //   try {
// //     dispatch(getsalaryRequest());
// //     const { data } = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
// //     dispatch(getsalarySuccess(data));
// //   } catch (error) {
// //     console.error('Error fetching salary:', error);
// //     dispatch(getsalaryReject(error.response ? error.response.data.message : 'An unknown error occurred'));
// //   }
// // };

// export const getSalary = (emp_id) => async (dispatch) => {
//     try {
//       dispatch(getsalaryRequest());
//       const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
//       console.log('API Response:', response); // Log entire response
//       dispatch(getsalarySuccess(response.data));
//     } catch (error) {
//       console.error('Error fetching salary:', error); // Log the error object
//       dispatch(getsalaryReject(error.message));
//     }
//   };

// // Slice
// const SalarySlice = createSlice({
//   name: 'salary',
//   initialState: {
//     loading: false,
//     isAuthenticatedAdmin: false,
//     salaryDetails: null,
//     error: null,
//   },
//   reducers: {
//     getsalaryRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     getsalarySuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticatedAdmin = true;
//       state.salaryDetails = action.payload.salaryDetails;
//     },
    
//     getsalaryReject(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// const { actions, reducer } = SalarySlice;
// export const { getsalaryRequest, getsalarySuccess, getsalaryReject } = actions;
// export default reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
export const fetchEmployees1 = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await fetch('/api/employees'); // Adjust the URL to your API endpoint
    return response.json();
  }
);

export const getSalary = (emp_id) => async (dispatch) => {
  try {
    dispatch(getsalaryRequest());
    const response = await axios.get(`http://localhost:8000/api/v1/hr/getSalarybyEmployee/${emp_id}`);
    
    if (response.data.salaryDetails) {
      dispatch(getsalarySuccess(response.data));
    } else {
      dispatch(getsalaryReject('No salary details found for this employee'));
    }
  } catch (error) {
    console.error('Error fetching salary:', error);
    dispatch(getsalaryReject(error.response ? error.response.data.message : 'An unknown error occurred'));
  }
};

export const saveSalary = (salaryData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/hr/postSalary', salaryData);
    console.log('Save Response:', response);
    // Optionally dispatch a success action here
  } catch (error) {
    console.error('Error saving salary:', error);
    // Optionally dispatch an error action here
  }
};

// Slice
const SalarySlice = createSlice({
  name: 'salary',
  initialState: {
    loading: false,
    isAuthenticatedAdmin: false,
    salaryDetails: null,
    error: null,
  },
  reducers: {
    getsalaryRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getsalarySuccess(state, action) {
      state.loading = false;
      state.isAuthenticatedAdmin = true;
      state.salaryDetails = action.payload.salaryDetails;
    },
    getsalaryReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = SalarySlice;
export const { getsalaryRequest, getsalarySuccess, getsalaryReject } = actions;
export default reducer;

 


