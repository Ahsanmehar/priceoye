import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../Product/ProductData";

const initialState = {
  smartphone: ProductData.smartPhones,
  tablet: ProductData.tablets,
  accessories: ProductData.accessories,
  trending: ProductData.trending,

  quickviewdata: null,
  addtocartdata: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    quickview: (state, actions) => {
      state.quickviewdata = actions.payload;
    },

    addtocart: (state, actions) => {
      state.addtocartdata.push(actions.payload);
    },
  },
});

export const { quickview, addtocart } = ProductSlice.actions;
export default ProductSlice.reducer;
