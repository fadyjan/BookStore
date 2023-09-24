import { createSlice } from "@reduxjs/toolkit";



export const HandleButtonSpan = (SelectedPage) => {
  let ButtonSpan;
  if (SelectedPage === "Books") {
    ButtonSpan = "Book";
  } else if (SelectedPage === "Author") {
    ButtonSpan = "Author";
  } else {
    ButtonSpan = "Store";
  }

  return ButtonSpan
}
const initialState = {
  selectedOption: "Shop",
};
export const sideBarSelectionSlice = createSlice({
  name: "SideBarSelction",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedOption = action.payload
    },
  }
});



export const { setSelected, getSelected } = sideBarSelectionSlice.actions
export default sideBarSelectionSlice.reducer;
