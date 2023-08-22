import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {axiosJwt} from "../../api/interceptor"
const initialState={
  data:[],
  pending:false,
  error:false,
  msg:null
}

export const getHistory=createAsyncThunk("get/gistory",async(thunkAPI)=>{
  console.log("masuk getHistory")
  try{
    const response = await axiosJwt.get("/beli/riwayat/beli/me")
    return response.data
  }catch(err){
    if(err.response)
    return thunkAPI.rejectWithValue(err.response.data.msg)
    console.log(err)
  }
})

const historySlice=createSlice({
  name:"histori slice",
  initialState,
  reducers:{
    reset:(state)=>{
      state.pending=false
      state.error=false
      state.data=[]
      state.msg=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getHistory.pending,(state)=>{
      state.pending=true
    })
    builder.addCase(getHistory.fulfilled,(state,action)=>{
      state.pending=false
      state.data=action.payload
    })
    builder.addCase(getHistory.rejected,(state,action)=>{
      state.pending=false
      state.error=true
      state.msg=action.payload
    })
  }
})

export default historySlice.reducer
export const {reset}=historySlice.actions