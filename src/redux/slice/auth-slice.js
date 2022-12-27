import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    industryType: {},
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    organizationName: "",
    description: "",
    isLoggedIn: false,
    isLoading: false,
    isProfileComplete: false,
    activeStep: 0,
    editActiveStep: 0,
    brandLogo: "",
    brandText: "",
    favicon: "",
    themePrimaryColor: "#000000",
    themeSecondaryColor: "#000000",
    homepageH1Title: "",
    tlds: [],
    socialMedia: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
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
    componentsEnabled: {
      premiumDomain: false,
      domainTransfer: false,
      discountingModule: false,
      userAuthMfa: false,
    },
    chainSupport: "",
    landingPageTemplate: {
      domainSearch: false,
      premiumDomain: false,
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
    setUser(state, response) {
      state.firstName = response.payload.firstName;
      state.lastName = response.payload.lastName;
      state.role = response.payload.role;
      state.email = response.payload.email;
    },
    handleReset(state) {
      state.activeStep = 0;
    },
    handleEditReset(state) {
      state.editActiveStep = 0;
    },
    handleNext(state) {
      state.activeStep = state.activeStep + 1;
    },
    handleBack(state) {
      state.activeStep = state.activeStep - 1;
    },
    editHandleNext(state) {
      state.editActiveStep = state.editActiveStep + 1;
    },
    editHandleBack(state) {
      state.editActiveStep = state.editActiveStep - 1;
    },
    profileCompleteSuccess(state) {
      state.isProfileComplete = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user-token");
      localStorage.removeItem("enterpriseId");
      localStorage.removeItem("metadataId");
      localStorage.clear();
    },
    setLoadingTrue(state) {
      state.isLoading = true;
    },
    setLoadingFalse(state) {
      state.isLoading = false;
    },
    setIndustryType(state, response) {
      state.industryType = response.payload.industryType;
    },
    setProfileData(state, response) {
      state.completionIndicator = response.payload.completionIndicator;
      state.brandText = response.payload.brandText;
      state.homepageH1Title = response.payload.homepageH1Title;
      state.themePrimaryColor = response.payload.themePrimaryColor;
      state.themeSecondaryColor = response.payload.themeSecondaryColor;
      state.organizationName = response.payload.organizationName;
      state.description = response.payload.description;
      state.industryType = response.payload.industryType;
    },
    setPreMetaData(state, response) {
      state.tlds = response.payload.tlds;
      state.socialMedia = response.payload.socialMedia;
      state.domainLimit = response.payload.domainLimit;
      state.restrictedSignup = response.payload.restrictedSignup;
      state.allowedEmailType = response.payload.allowedEmailType;
      state.additionalInfo = response.payload.additionalInfo;
    },
    setMetaData(state, response) {
      state.tlds = response.payload.tlds;
      state.socialMedia = response.payload.socialMedia;
      state.domainLimit = response.payload.domainLimit;
      state.restrictedSignup = response.payload.restrictedSignup;
      state.allowedEmailType = response.payload.allowedEmailType;
      state.additionalInfo = response.payload.additionalInfo;
      state.componentsEnabled = response.payload.componentsEnabled;
      state.chainSupport = response.payload.chainSupport;
      state.landingPageTemplate = response.payload.landingPageTemplate;
    },
    setActiveStep(state, step) {
      state.activeStep = step.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
