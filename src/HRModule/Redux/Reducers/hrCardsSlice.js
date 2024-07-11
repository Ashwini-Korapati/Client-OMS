// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   attendance: 150,
//   leavesToApprove: 17,
//   totalEmployees: 12,
// };

// const hrCardsSlice = createSlice({
//   name: 'hrCards',
//   initialState,
//   reducers: {
//     updateAttendance: (state, action) => {
//       state.attendance = action.payload;
//     },
//     updateLeavesToApprove: (state, action) => {
//       state.leavesToApprove = action.payload;
//     },
//     updateTotalEmployees: (state, action) => {
//       state.totalEmployees = action.payload;
//     },
//   },
// });

// export const { updateAttendance, updateLeavesToApprove, updateTotalEmployees } = hrCardsSlice.actions;

// export default hrCardsSlice.reducer;


export const selectTotalEmployees = state => state.employees.employees.totalEmployees;
// export const selectTotalClients = state => state.clients.count; 
// export const selectTotalProjects = state => state.projects.count; 
// export const selectActiveProjects = state => state.projects.active; 
