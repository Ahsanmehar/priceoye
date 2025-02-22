import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductSlice";
import popupReducer from "./PopUpSlice";
import wishlistReducer from "./WishlistSlice";

const Store = configureStore({
  reducer: {
    products: productsReducer,
    popup: popupReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
