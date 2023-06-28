import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categories";
import itemSlicer from "./reducers/items";
import cartSlicer from "./reducers/cart";
import searchSlicer from "./reducers/search";
import { categoryListener } from "./middlewares/categories";
import { itemListener } from "./middlewares/items";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemSlicer,
    cart: cartSlicer,
    search: searchSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(categoryListener.middleware, itemListener.middleware),
});

export default store;
