import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   payload: {}
}

const AuthenticationSlice = createSlice({
   name: "Auth",
   initialState,
   reducers: {
   }
})

export const {} = AuthenticationSlice.actions
export const AuthenticationReducer = AuthenticationSlice.reducer