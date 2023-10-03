import axios from "axios";
import { setToken } from "../redux/slice/tokenSlice";
import {instance} from "./instance"
import { useDispatch } from "react-redux";
import store from "../redux/store"
import jwt_decode from "jwt-decode"

const getAccessToken = async () => {
  try {
    const response = await instance.get("/token",{withCredentials:true});
    store.dispatch(setToken(response.data.accesToken)); 
    return response.data.accesToken;
  } catch (err) {
  }
};

const checkAccessToken = async () => {
  const token = store.getState().token.accesToken;
 
  if (token.length === 0) {
   return await getAccessToken();
  }
  const decode=jwt_decode(token).exp;

  if(decode*1000 < new Date().getTime()){
   return await getAccessToken();
  }else{
   return token;
  }
  
};

export const axiosJwt = axios.create({
  baseURL:"http://localhost:9797",
  withCredentials:true
});

axiosJwt.interceptors.request.use(async (config) => {
  const token =await checkAccessToken();
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
