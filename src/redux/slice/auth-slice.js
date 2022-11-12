import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    isProfileComplete: false,
    activeStep: 0,
    brandLogo: "",
    brandText: "",
    favicon: "",
    themeColor: "",
    homepageH1Title: "",
    tlds: [],
    socialMedia: [],
    domainLimit: 1000,
    restrictedSignup: false,
    allowedEmailType: [],
    additionalInfo: [],
    completionIndicator: {
      registration: false,
      profileForm: false,
      metaInfoForm: false,
      isMinted: false,
    },
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
      localStorage.removeItem("enterpriseId");
    },
    setLoadingTrue(state) {
      state.isLoading = true;
    },
    setLoadingFalse(state) {
      state.isLoading = false;
    },
    setEnterprise(state, response) {
      state.completionIndicator = response.payload.completionIndicator;
      state.brandText = response.payload.brandText;
      state.homepageH1Title = response.payload.homepageH1Title;
      state.themeColor = response.payload.themeColor;
    },
    setProfileData(state, response) {
      state.completionIndicator = response.payload.completionIndicator;
      state.brandText = response.payload.brandText;
      state.homepageH1Title = response.payload.homepageH1Title;
      state.themeColor = response.payload.themeColor;
    },
    setMetaData(state, response) {
      console.log(response);
      state.tlds = response.payload.tlds;
      state.socialMedia = response.payload.socialMedia;
      state.domainLimit = response.payload.domainLimit;
      state.restrictedSignup = response.payload.restrictedSignup;
      state.allowedEmailType = response.payload.allowedEmailType;
      state.additionalInfo = response.payload.additionalInfo;
    },
    setActiveStep(state, step) {
      state.activeStep = step.payload;
    },
    setAdditionalInfo(state, data) {
      state.additionalInfo = data.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
