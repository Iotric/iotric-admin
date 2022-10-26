import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { testApplicationKey: null, liveApplicationKey: null },
  isKeyLoading: false,
  isTestMode: false,
  showCredentials: false,
};

const keySlice = createSlice({
  name: "key",
  initialState,
  reducers: {
    toggleCredentials(state) {
      state.showCredentials = !state.showCredentials;
      state.isKeyLoading = true;
    },
    setShowCredentials(state, val) {
      state.showCredentials = val.payload;
    },
    setUser(state, val) {
      state.user = val.payload;
    },
    setTestMode(state) {
      state.isTestMode = !state.isTestMode;
    },
    setKeyLoadingTrue(state) {
      state.isKeyLoading = true;
    },
    setKeyLoadingFalse(state) {
      state.isKeyLoading = false;
    },
  },
});

export const keyActions = keySlice.actions;

export default keySlice;
