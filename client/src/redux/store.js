// import configureStore API from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import categoryReducer from './features/categorySlice';

// create Redux store with reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer
  }
})

// export Redux store
export default store;