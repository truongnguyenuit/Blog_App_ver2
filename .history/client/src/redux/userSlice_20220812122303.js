import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
}, [])

const loadUser = createAsyncThunk("user/loadUser", async () => {
  if (localStorage['LocalStorageTokenName']) {
    setAuthToken(localStorage['LocalStorageTokenName'])
    try {
      const response = await axios.get(`http://localhost:5000/api/auth`)
      if (response.data.success) {

        dispatch({
          type: 'SET_AUTH',
          payload: { isAuthenticated: true, user: response.data.user }
        })
      }
    } catch (error) {
      localStorage.removeItem('LocalStorageTokenName')
      setAuthToken(null)
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null }
      })
    }
  }
  else {
    dispatch({
      type: 'SET_AUTH',
      payload: { isAuthenticated: false, user: null }
    })
  }
})



export const { update } = userSlice.actions

export default userSlice.reducer