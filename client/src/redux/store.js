import {configureStore} from "@reduxjs/toolkit"
import {auth} from "./slice/authSlice"
import {authLogout} from "./slice/logoutSlice"
import tokenSlice from "./slice/tokenSlice"
import produkKategory from "./slice/produkKategorySlice"
import produkSlice from "./slice/produkSlice"
import meSlice from "./slice/meSlice"
import historySlice from "./slice/historySlice"
import addKeranjangSlice from "./slice/addKeranjangSlice"
const store=configureStore({
  reducer:{
    me:meSlice,
    auth:auth,
    logout:authLogout,
    token:tokenSlice,
    produk: produkSlice,
    produkKategory:produkKategory,
    history:historySlice,
    addKeranjang:addKeranjangSlice
  }
})
export default store