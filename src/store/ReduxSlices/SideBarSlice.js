import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "Shop",
};

export const sideBarSelectionSlice = createSlice({
  name: "SideBarSelction",
  initialState,
  reducers :{
    setSelected : (state,action)=>{
        state.selectedOption = action.payload
    },
  }
});



export const  {setSelected,getSelected}  = sideBarSelectionSlice.actions
export default sideBarSelectionSlice.reducer;
