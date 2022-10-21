import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import keySlice from "./slice/key-slice";
import adminSlice from "./slice/admin-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    key: keySlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
