import {createSlice,createAsycTunk} from "@reduxjs/toolkit"

const initialState={
  produk:[],
  isLoading:false,
  isError:false,
  msg:""
}


export const getProduk=createAsycTunk("/getProduk",(thunkAPI)=>{
  try{
    
  }catch(err){
    console.log(err)
  }
})

const produkSlice = createSlice({
  name:"produk slice",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    
  }
})

export default produkSlice.reducer