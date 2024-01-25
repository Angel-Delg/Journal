import { configureStore } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./Slices/AuthenticationSlice";

export const Store = configureStore({
   reducer:{
      Authentication: AuthenticationReducer
   }
})