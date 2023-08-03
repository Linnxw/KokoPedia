import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {instance} from "../../api/instance"
const initialState={
  produk:[],
  pending:false,
  isError:false,
  msg:null
}


export const getProduk=createAsyncThunk("/getProduk",async(thunkAPI)=>{
  try{
    const response=await instance.get("/produk")
    return response.data
  }catch(err){
   if(err.response){
     return thunkAPI.rejectWithValue(err.response.data.msg)
   }
  }
})

const produkSlice = createSlice({
  name:"produk slice",
  initialState,
  reducers:{
    reset:(state)=>{
      state.pending=false,
      state.produk=[],
      state.msg=null,
      state.isError=false 
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getProduk.pending,(state)=>{
      state.pending=true
    })
    builder.addCase(getProduk.fulfilled,(state,action)=>{
      state.pending=false
      state.produk=action.payload
    })
    builder.addCase(getProduk.rejected,(state,action)=>{
      state.isError=true
      state.loading=false
      state.msg=action.payload
    })
  }
})
export const {reset}=produkSlice.actions
export default produkSlice.reducer