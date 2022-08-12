import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import 

export default configureStore({
  reducer: {
    user: userReducer
  }
})