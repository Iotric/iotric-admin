import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import keySlice from "./slice/key-slice";
import adminSlice from "./slice/admin-slice";
import dashboardSlice from "./slice/dashboard-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    key: keySlice.reducer,
    admin: adminSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
