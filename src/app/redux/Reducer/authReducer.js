import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    token:null,
    userLogin:{data:[],loading:null}
  },
  reducers:{
    userLoginFetch(state,action){
      state.userLogin.loading = true;
    },
    
    userLoginSuccess(state,action){
      state.userLogin.loading = false;
      state.userLogin.data = action.payload;
    },
    
    userLoginFailed(state,action){
      state.userLogin.loading = false;
    },
    
  }
})

export const authActions = authSlice.actions; 
export default authSlice.reducer; 
