import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    form: {
      shift_time: '',
      location: '',
      messegebox: '',
      photo: null,
      showCamera: false,
    },
  };
  

const AttendanceSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setShiftTime: (state, action) => {
      state.shift_time = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      if (action.payload === 'workFromHome') {
        state.showCamera = true;
      } else {
        state.showCamera = false;
        state.photo = null; 
      }
    },
    setMessegebox: (state, action) => {
      state.messegebox = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
      state.showCamera = false;
    },
    clearPhoto: (state) => {
      state.photo = null;
      state.showCamera = false;
    }
  },
});

export const { setShiftTime, setLocation, setMessegebox, setPhoto, clearPhoto } = AttendanceSlice.actions;
export default AttendanceSlice.reducer;