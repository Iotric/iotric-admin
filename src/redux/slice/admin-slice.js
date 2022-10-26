import { createSlice } from "@reduxjs/toolkit";

import { adminRows } from "../../datatablesource";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminData: adminRows,
  },
  reducers: {
    handleDelete(state, id) {
      state.adminData = state.adminData.filter((item) => item.id !== id.payload);
    },
  },
});

export const adminActions = adminSlice.actions

export default adminSlice