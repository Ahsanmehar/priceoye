import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addtowishlistdata: JSON.parse(localStorage.getItem("addtowishlist")) || [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    addtowishlist: (state, action) => {
      if (
        !state.addtowishlistdata.some((item) => item.id == action.payload.id)
      ) {
        state.addtowishlistdata.push(action.payload);
      }

      localStorage.setItem(
        "addtowishlist",
        JSON.stringify(state.addtowishlistdata)
      );
    },
    removewishlist: (state, action) => {
      state.addtowishlistdata = state.addtowishlistdata.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem(
        "addtowishlist",
        JSON.stringify(state.addtowishlistdata)
      );
    },
  },
});

export const { addtowishlist, removewishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
