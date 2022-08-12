import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import setAuthToken from "../untils/setAuthToken";
import axios from 'axios'

export const userSlice = createSlice({
  name: "user",

  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  },

  reducers: {
    setAuth: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  }
});

useEffect(() => {
  loadUser()
}, [userSlice.isAuthenticated])

const 



export const { update } = userSlice.actions

export default userSlice.reducer