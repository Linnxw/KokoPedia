import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {axiosJwt} from "../../api/interceptor"

const initialState = {
  data:"",
  pending:false,
  error:false,
  msg:null
}

export const add = createAsyncThunk("addKeranjang",async (data,thunkApi)=>{
  try{
    const response = await axiosJwt.post(`/keranjang?id=${data.id}&jumlah=${data.jumlah}`)
    return response.data.msg
  }catch(err){
    if(err.response){
      return thunkApi.rejectWithValue(err.response.data.msg)
    }
    console.log(err)
  }
})

const addKeranjangSlice = createSlice({
  name:'add keranjang slice',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(add.pending,(state)=>{
      state.pending = true
      state.msg = null
      state.error = false
    })
    builder.addCase(add.rejected,(state,action)=>{
      state.data = ""
      state.pending = false
      state.msg = action.payload
      state.error = true
    })
    builder.addCase(add.fulfilled,(state,action)=>{
      state.data = action.payload
      state.pending = false
      state.msg = null
      state.error = false
    })
  }
})

export default addKeranjangSlice.reducer