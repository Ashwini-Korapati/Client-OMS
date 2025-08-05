

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpUpload } from '../../../Httphandler' // update path as per your folder structure

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
      const response = await httpUpload('api/v1/hr/addBulkEmployee', formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || 'File upload failed');
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
    setFile(state, action) {
      state.file = action.payload;
    },
    clearFile(state) {
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
