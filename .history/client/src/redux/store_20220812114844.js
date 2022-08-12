import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import blog

export default configureStore({
  reducer: {
    user: userReducer
  }
})