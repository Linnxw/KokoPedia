import {configureStore} from "@reduxjs/toolkit"
import {auth} from "./slice/authSlice"
import {authLogout} from "./slice/logoutSlice"
import tokenSlice from "./slice/tokenSlice"
const store=configureStore({
  reducer:{
    auth:auth,
    logout:authLogout,
    token:tokenSlice
  }
})
export default store