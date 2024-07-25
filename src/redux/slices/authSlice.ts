import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload
    },
    logout: (state, action) => {
      state.isAuth = action.payload
    },
    loginAsync: () => {},
    logoutAsync: () => {},
  },
})

export const { login, logout, loginAsync, logoutAsync } = authSlice.actions

export default authSlice.reducer