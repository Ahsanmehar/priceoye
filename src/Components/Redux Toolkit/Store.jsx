import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductSlice";
import popupReducer from "./PopUpSlice";

const Store = configureStore({
  reducer: {
    products: productsReducer,
    popup: popupReducer,
  },
});

export default Store;
