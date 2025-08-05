import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    users: [],
    isUserUpdated: false,
    isUserDeleted: false,
    token: null, // Added token to state
    error: null  // Ensure error exists in initialState
  },
  reducers: {
    // Token handlers
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },

    // Get all users
    usersRequest(state) {
      state.loading = true;
    },
    usersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload.users;
    },
    usersFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Get single user
    userRequest(state) {
      state.loading = true;
    },
    userSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
    },
    userFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete user
    deleteUserRequest(state) {
      state.loading = true;
    },
    deleteUserSuccess(state) {
      state.loading = false;
      state.isUserDeleted = true;
    },
    deleteUserFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Update user
    updateUserRequest(state) {
      state.loading = true;
    },
    updateUserSuccess(state) {
      state.loading = false;
      state.isUserUpdated = true;
    },
    updateUserFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear flags & errors
    clearUserDeleted(state) {
      state.isUserDeleted = false;
    },
    clearUserUpdated(state) {
      state.isUserUpdated = false;
    },
    clearError(state) {
      state.error = null;
    }
  }
});

const { actions, reducer } = userSlice;

export const {
  usersRequest,
  usersSuccess,
  usersFail,
  userRequest,
  userSuccess,
  userFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
  updateUserRequest,
  updateUserSuccess,
  updateUserFail,
  clearUserDeleted,
  clearUserUpdated,
  clearError,
  setToken,
  clearToken
} = actions;

export default reducer;
