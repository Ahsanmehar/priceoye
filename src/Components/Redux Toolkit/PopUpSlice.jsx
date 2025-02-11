import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartpopup: null,
  wishlistpopup: false,
  quikviewpopup: null,
};

const PopUpSlice = createSlice({
  name: "popup",
  initialState,

  reducers: {
    isClickCart: (state) => {
      state.cartpopup = !state.cartpopup;
    },
    isClickWishlist: (state) => {
      state.wishlistpopup = !state.wishlistpopup;
    },
    isClickQuickView: (state) => {
      state.quikviewpopup = !state.quikviewpopup;
    },
  },
});

export const { isClickCart, isClickWishlist, isClickQuickView } =
  PopUpSlice.actions;
export default PopUpSlice.reducer;
