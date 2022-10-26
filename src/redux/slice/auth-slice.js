import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    isProfileComplete: false,
    activeStep: 0,
  },
  reducers: {
    loginStart(state) {},
    loginSuccess(state) {
      state.isLoggedIn = true;
    },
    registerStart(state) {
      state.isLoggedIn = true;
    },
    registerSuccess(state) {
      state.isLoggedIn = false;
    },
    handleReset(state) {
      state.activeStep = 0;
    },
    handleNext(state) {
      state.activeStep = state.activeStep + 1;
    },
    handleBack(state) {
      state.activeStep = state.activeStep - 1;
    },
    profileCompleteSuccess(state) {
      state.isProfileComplete = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user-token");
    },
    setLoadingTrue(state) {
      state.isLoading = true;
    },
    setLoadingFalse(state) {
      state.isLoading = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
