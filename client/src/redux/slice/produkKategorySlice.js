import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {instance} from "../../api/instance"
const initialState={
  produk:[],
  isError:false,
  msg:null,
  pending:false
}

export const getProdukKategory=createAsyncThunk("get/produkKategory",async(data,thunkAPI)=>{
  try{
    const response=await instance.get(`/produk/kategory?kategory=${data}`)
    return response.data
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
})

const produkKategory=createSlice({
  name:"produk kategory slice",
  initialState,
  reducers:{
    reset:(state)=>{
      state.produk=[],
      state.isError=false,
      state.msg=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getProdukKategory.pending,(state)=>{
      state.pending=true
    })
    
    builder.addCase(getProdukKategory.fulfilled,(state,action)=>{
      state.pending=false
      state.produk=action.payload
    })
    
    builder.addCase(getProdukKategory.rejected,(state,action)=>{
      state.pending=false
      state.msg=action.payload
      state.isError=true
    })
  }
})

export default produkKategory.reducer
export const {reset}=produkKategory.actions