import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
  msg:"",
  isLoading:false,
  isError:false
}

export const logout=createAsyncThunk("/logout",async(data,thunkAPI)=>{
  try{
    const token=await axios.get("http://localhost:5000/token",{withCredentials:true})
    console.log(token)
    const response=await axios.delete("http://localhost:5000/logout",{withCredentials:true},{
     headers:{
      'Authorization':`Bearer ${token.data.accesToken}`
    }
    })
    return response.data.msg
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
})
const authSlice=createSlice({
  name:"auth/logout",
  initialState,
  reducers:{
    reset:(state)=>{
      state.msg=""
      state.isLoading=false
      state.isError=false
    }
  },
  extraReducers:(builder)=>{
  
  builder.addCase(logout.pending,(state)=>{
    state.isLoading=true
  })
  builder.addCase(logout.fulfilled,(state,action)=>{
    state.isLoading=false
    state.msg=action.payload
  })
  builder.addCase(logout.rejected,(state,action)=>{
    state.isLoading=false
    state.isError=true
    state.msg=action.payload.msg
  })
 }
})
export const authLogout =  authSlice.reducer
export const {reset}=authSlice.actions
