import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../Product/ProductData";

const initialState = {
  smartphone: ProductData.smartPhones,
  tablet: ProductData.tablets,
  accessories: ProductData.accessories,
  trending: ProductData.trending,

  trendingcart: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addtocart: (state, actions) => {
      state.trendingcart.push(actions.payload);
    },
  },
});

export const { addtocart } = ProductSlice.actions;
export default ProductSlice.reducer;
