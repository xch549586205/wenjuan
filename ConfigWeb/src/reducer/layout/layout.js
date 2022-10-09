import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarHeight: 0,
};

export const questionSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    updateNavbarHeight: (state, action) => {
      state.navbarHeight = action.payload;
    },
  },
});

// reducer方法的每一个case都会生成一个Action
export const { updateNavbarHeight } = questionSlice.actions;
export default questionSlice.reducer;
