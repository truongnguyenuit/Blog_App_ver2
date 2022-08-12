import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import blogSlice from "./blogSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    blog: blog
  }
})