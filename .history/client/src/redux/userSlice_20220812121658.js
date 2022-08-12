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
      state.realname = action.payload.realname;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.img = action.payload.img;
      state.authLoading: false,
      state.isAuthenticated: isAuthenticated,
        suser: user
    },
  }
});

useEffect(() => {
  loadUser()
}, [userSlice.isAuthenticated])



export const { update } = userSlice.actions

export default userSlice.reducer