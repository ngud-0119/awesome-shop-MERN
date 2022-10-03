// import createSlice API from Redux Toolkit to create Redux State Slice
import { createSlice } from '@reduxjs/toolkit';

// slice requires name, initial state, and reducers
export const categorySlice = createSlice({
  name: 'category',
  // initial state of categories
  initialState: {
    categories: [],
    currentCategory: '',
  },
  reducers: {
    // update categores
    UPDATE_CATEGORIES: (state, action) => {
      return {
        // copy state
        ...state,
        // overwrite categories
        categories: [...action.payload.categories]
      };
    },
    // update current category
    UPDATE_CURRENT_CATEGORY: (state, action) => {
      return {
        ...state,
        currentCategory: action.payload.currentCategory
      };
    }
  }
});

export const { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } = categorySlice.actions;

export default categorySlice.reducer;