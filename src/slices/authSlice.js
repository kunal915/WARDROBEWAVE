import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    authReducer(state, action) {
      console.log("action.payload", action.payload);
      state.isAuthenticated = action.payload;
      state.status = true;
    },
  },
});

export const { authReducer } = authSlice.actions;

export default authSlice.reducer;
