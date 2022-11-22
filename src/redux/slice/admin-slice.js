import { createSlice } from "@reduxjs/toolkit";

import { adminRows } from "../../datatablesource";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminData: adminRows,
    currentAdmin: {},
  },
  reducers: {
    setAllAdmins(state, val) {
      state.adminData = val.payload;
    },
    setCurrentAdmin(state, val) {
      state.currentAdmin = val.payload;
    },
    setDeleteAdmin(state, { payload: userId }) {
      state.adminData = state.adminData.filter(
        (item) => item.userId !== userId
      );
    },
    setAddAdmin(state, val) {},
    handleDelete(state, id) {
      state.adminData = state.adminData.filter(
        (item) => item.id !== id.payload
      );
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
