import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    handleLogin: (state) => {
      state.isLoggedIn = true;
    },
    handleLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { handleLogin, handleLogout } = loginSlice.actions;
export default loginSlice.reducer;
