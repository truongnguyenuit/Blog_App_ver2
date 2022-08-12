import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import 
import axios from 'axios'

export const userSlice = createSlice({
  name: "user",

  initialState: {
    realname: "truongnhe",
    username: "vrttankzz",
    email: "vrttankzz@gmail.com",
    img: "truongluon"
  },

  reducers: {
    update: (state, action) => {
      state.realname = action.payload.realname;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.img = action.payload.img
    },
  }
});

export const { update } = userSlice.actions

export default userSlice.reducer