import axios from "axios";
import { setToken } from "../redux/slice/tokenSlice";
import { useDispatch } from "react-redux";
import store from "../redux/store"
import jwt_decode from "jwt-decode"

const getAccessToken = async () => {
  try {
    const response = await axios.get("http://localhost:5000/token",{withCredentials:true});
    store.dispatch(setToken(response.data.accesToken)); 
    return response.data.accesToken;
  } catch (err) {
    console.log("eror token get",err);
  }
};

const checkAccessToken = async () => {
  const token = store.getState().token.accesToken;
 
  if (token.length === 0) {
   return await getAccessToken();
  }
  const decode=jwt_decode(token).exp

  if(decode*1000 < new Date().getTime()){
   return await getAccessToken()
  }else{
   return token;
  }
};

export const axiosJwt = axios.create({
  withCredentials:true
});

axiosJwt.interceptors.request.use(async (config) => {
  const token = await checkAccessToken();
  config.headers["Authorization"] = `Bearer ${token}`;
  return config
});
