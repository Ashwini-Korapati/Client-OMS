import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaveData: [],
  selectedMonth: '',
  selectedEmployee: '',
};

const leaveReportSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
  },
});

export const { setMonth, setEmployee } = leaveReportSlice.actions;
export default leaveReportSlice.reducer;
