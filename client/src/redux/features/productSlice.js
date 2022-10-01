// import createSlice API from Redux Toolkit to create Redux State Slice
import { createSlice } from '@reduxjs/toolkit';

// slice requires name, initial state, and reducers
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    // update products
    UPDATE_PRODUCTS: (state, action) => {
      return {
        ...state,
        products: [...action.products]
      };
    }
  }
});

export const { UPDATE_PRODUCTS } = productSlice.actions;

export default productSlice.reducer;