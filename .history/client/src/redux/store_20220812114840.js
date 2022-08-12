import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import { blogReducer } from "../reducers/blogReducer"

export default configureStore({
  reducer: {
    user: userReducer
  }
})