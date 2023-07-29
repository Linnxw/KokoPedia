import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
  msg:"",
  token:"",
  isLoading:false,
  isError:false
}

export const login=createAsyncThunk("login",async(data,thunkAPI)=>{
 
  try{
    const response=await axios.post("http://localhost:5000/login",{
      email:data.email,
      password:data.password
    },{
    withCredentials:true
   }) 
    console.log(response)
    return response.data
  }catch(err){
  console.log(err)
   return thunkAPI.rejectWithValue(err.response.data.msg)
  }
  
})

const authSlice=createSlice({
  name:"auth",
  initialState,
  reducers:{
    reset:(state)=>{
      state.msg=""
      state.token=""
      state.isLoading=false
      state.isError=false
    }
  },
  extraReducers:(builder)=>{
  builder.addCase(login.pending, (state, action) => {
      state.isLoading=true
    })
  builder.addCase(login.fulfilled,(state,action)=>{
  console.log(action.payload)
    state.isLoading=false
    state.token=action.payload
  })
  builder.addCase(login.rejected,(state,action)=>{
    state.isLoading=false
    state.isError=true
    state.msg=action.payload
  })
 }
})
export const auth =  authSlice.reducer
export const {reset}=authSlice.actions
