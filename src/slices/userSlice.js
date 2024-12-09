import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  status: false,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserInfo(state, action) {
      // console.log("action.payload", action.payload);
      state.userData = action.payload;
      state.status = true;
    },
  },

  clearUserdata(state, action) {
    state.userData = {};
    state.status = false;
  },
});

export const { addUserInfo, clearUserdata } = userSlice.actions;

export default userSlice.reducer;
