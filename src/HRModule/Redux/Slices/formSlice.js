// import { createSlice } from '@reduxjs/toolkit';
 
// // Initial State
// const initialState = {
//   costCenters: [],
//   locations: [],
//   departments: [],
//   companies: [],
//   isCostCenterFormVisible: false,
//   isLocationFormVisible: false,
//   isDepartmentFormVisible: false,
//   isCompanyFormVisible: false,
// };
 
// // Create Slice
// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     addCostCenter: (state, action) => {
//       state.costCenters.push(action.payload);
//     },
//     addLocation: (state, action) => {
//       state.locations.push(action.payload);
//     },
//     addDepartment: (state, action) => {
//       state.departments.push(action.payload);
//     },
//     addCompany: (state, action) => {
//       state.companies.push(action.payload);
//     },
//     setCostCenterFormVisible: (state, action) => {
//       state.isCostCenterFormVisible = action.payload;
//     },
//     setLocationFormVisible: (state, action) => {
//       state.isLocationFormVisible = action.payload;
//     },
//     setDepartmentFormVisible: (state, action) => {
//       state.isDepartmentFormVisible = action.payload;
//     },
//     setCompanyFormVisible: (state, action) => {
//       state.isCompanyFormVisible = action.payload;
//     },
//   },
// });
 
// export const {
//   addCostCenter,
//   addLocation,
//   addDepartment,
//   addCompany,
//   setCostCenterFormVisible,
//   setLocationFormVisible,
//   setDepartmentFormVisible,
//   setCompanyFormVisible,
// } = formSlice.actions;
 
// export default formSlice.reducer;