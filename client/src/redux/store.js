import {configureStore} from "@reduxjs/toolkit"
import {auth} from "./slice/authSlice"
import {authLogout} from "./slice/logoutSlice"
import tokenSlice from "./slice/tokenSlice"
import produkKategory from "./slice/produkKategorySlice"
import produkSlice from "./slice/produkSlice"
import meSlice from "./slice/meSlice"
const store=configureStore({
  reducer:{
    auth:auth,
    me:meSlice,
    logout:authLogout,
    token:tokenSlice,
    produk: produkSlice,
    produkKategory:produkKategory
  }
})
export default store