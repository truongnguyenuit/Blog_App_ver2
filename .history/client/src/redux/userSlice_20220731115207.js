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
      state.realname = action.payload.realname;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.img = action.payload.emai;
    },
  }
});

export const { update } = userSlice.actions
export default userSlice.reducer