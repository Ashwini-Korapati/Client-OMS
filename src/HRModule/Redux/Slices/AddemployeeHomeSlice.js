import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 
const initialState = {
  selectedOption: '',
  file: null,
  status: 'idle',
  error: null,
};
 
export const uploadFile = createAsyncThunk(
  'addEmployeeHome/uploadFile',
  async ({ file }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('upload', file);
 
    try {
      const response = await fetch('http://localhost:9000/api/v1/hr/addBulkEmployee', {
        method: 'POST',
        body: formData,
        headers: {
         
        },
        credentials: 'include',
      });
   
      const responseData = await response.json();
 
      if (!response.ok) {
        throw new Error(responseData.message || 'File upload failed.');
      }
 
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 
const AddemployeeHomeSlice = createSlice({
  name: 'addEmployeeHome',
  initialState,
  reducers: {
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
    clearFile: (state) => {
      state.file = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.status = 'uploading';
      })
      .addCase(uploadFile.fulfilled, (state) => {
        state.status = 'succeeded';
        state.file = null;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
 
export const { setSelectedOption, setFile, clearFile } = AddemployeeHomeSlice.actions;
 
export default AddemployeeHomeSlice.reducer;