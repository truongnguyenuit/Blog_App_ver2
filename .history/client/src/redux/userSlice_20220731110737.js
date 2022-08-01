import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    realname: "",
    username: "",
    email: "",
    img: ""
  },
  reducers: {
    update: (state, action) => {
      state.realname = action.payload.realname,
      state.username = action.payload.

    }
  }
})