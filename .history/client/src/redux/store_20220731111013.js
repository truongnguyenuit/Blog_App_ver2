import { configureStore } from "@reduxjs/toolkit"
import userReducer
export default configureStore({
  reducer: {
    user: userReducer
  }
})