import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {axiosJwt} from "../../api/interceptor"
const initialState={
  me:{},
  isLoading:false,
  isError:false,
  msg:null
}

export const getMe=createAsyncThunk("/me",async(thunkAPI)=>{
  try{
    const response=await axiosJwt.get("/user/me")
    return response.data
  }catch(err){
    console.log(err)
    if(err.response){
      return thunkAPI.rejectWithValue(err.response.data.msg)
    }
  }
})

const meSlice=createSlice({
  name:"me slice",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getMe.pending,(state)=>{
      state.isLoading=true
    })
    builder.addCase(getMe.fulfilled,(state,action)=>{
      state.isLoading=false
      state.me=action.payload
    })
    builder.addCase(getMe.rejected,(state,action)=>{
      state.isLoading=false
      state.isError=true
      console.log({action})
    })
  }
})

export default meSlice.reducer