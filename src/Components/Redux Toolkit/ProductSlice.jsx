import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../Product/ProductData";

const initialState = {
  smartphone: ProductData.smartPhones,
  tablet: ProductData.tablets,
  accessories: ProductData.accessories,
  trending: ProductData.trending,
  quickviewdata: null,
  addtocartdata: JSON.parse(localStorage.getItem("addtocart")) || [],
  productcount: {},
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    quickview: (state, action) => {
      state.quickviewdata = action.payload;
    },
    addtocart: (state, action) => {
      let product = state.quickviewdata;
      let productid = product.id;
      let count = state.productcount[productid] || 1;

      let existingitem = state.addtocartdata.find(
        (item) => item.id === productid
      );

      if (existingitem) {
        existingitem.count = count;
      } else {
        state.addtocartdata.push({ ...product, count });
      }
      localStorage.setItem("addtocart", JSON.stringify(state.addtocartdata));
    },

    removecart: (state, action) => {
      state.addtocartdata = state.addtocartdata.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem("addtocart", JSON.stringify(state.addtocartdata));
    },

    increasecount: (state, action) => {
      let { productid } = action.payload;
      let existingitem = state.addtocartdata.find(
        (item) => item.id === productid
      );

      if (existingitem) {
        existingitem.count += 1;
      } else {
        state.productcount[productid] =
          (state.productcount[productid] || 1) + 1;
      }

      localStorage.setItem("addtocart", JSON.stringify(state.addtocartdata));
    },

    decreasecount: (state, action) => {
      let { productid } = action.payload;
      let existingitem = state.addtocartdata.find(
        (item) => item.id === productid
      );

      if (existingitem && existingitem.count > 1) {
        existingitem.count -= 1;
      } else if (
        state.productcount[productid] &&
        state.productcount[productid] > 1
      ) {
        state.productcount[productid] -= 1;
      }

      localStorage.setItem("addtocart", JSON.stringify(state.addtocartdata));
    },
  },

  selectors: {
    selectTotalPrice: (state) => {
      const total = state.addtocartdata.reduce(
        (total, item) => total + item.newPrice * item.count,
        0
      );

      return new Intl.NumberFormat("en-US").format(total);
    },
  },
});

export const {
  quickview,
  addtocart,
  removecart,
  increasecount,
  decreasecount,
} = ProductSlice.actions;
export const { selectTotalPrice } = ProductSlice.selectors;
export default ProductSlice.reducer;
