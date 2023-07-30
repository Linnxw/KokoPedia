import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const initialState={
  accesToken:""
}

const tokenSlice=createSlice({
  name:"token slice",
  initialState,
  reducers:{
    setToken:(state,action)=>{
      state.accesToken=action.payload
    }
  }
})

export default tokenSlice.reducer
export const {setToken}=tokenSlice.actions