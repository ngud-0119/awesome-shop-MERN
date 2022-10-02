// import createSlice API from Redux Toolkit to create Redux State Slice
import { createSlice } from '@reduxjs/toolkit';

// slice requires string name to identify slice, initial state value, and reducers to define how state can be updated
// helps to simplfy Redux reducer logic and actions
// immutable reducers written as functions instead of previous switch/case statements
// actions creators are generated automatically based on reducer functions
// combines initial state, reducers, and actions into an object
export const cartSlice = createSlice({
  // name of slice used as the prefix for generated action types
  name: 'cart',
  // initial state of cart
  initialState: {
    cart: [],
    cartOpen: false,
  },
  // reducers for cart functionality
  reducers: {
    // add item to cart
    ADD_TO_CART: (state, action) => {
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.payload.product]
      };
    },
    // add multiple items to cart
    ADD_MULTIPLE_TO_CART: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, ...action.payload.products],
      };
    },
    // remove item from cart
    REMOVE_FROM_CART: (state, action) => {
      // create copy of cart data from state and filter for product id's that do not equal payload id
      let newState = state.cart.filter(product => {
        // return new array of products without product specified by payload id
        return product._id !== action.payload._id;
      });
    
      // return state, cartOpen, and replace cart with new cart product array
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
    },
    // update item quantity in cart
    UPDATE_CART_QUANTITY: (state, action) => {
      // create new copy of cart data in state and map array of products
      let newState = state.cart.map(product => {
        // if product is equal to id in payload, copy product data, update quantity, and return to array
        if(product._id === action.payload._id) {
          return{
            ...product,
            purchaseQuantity: action.payload.purchaseQuantity
          }
        }
        // if not equal to id, return product to array
        return product;
      })
      // return opened cart tab and replace old cart with new cart product array
      return {
        ...state,
        cartOpen: true,
        cart: newState
      };
    },
    // clear entire cart
    CLEAR_CART: state => {
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
    },
    // toggle cart
    TOGGLE_CART: state=> {
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    }
  }
});

// Action creators are generated for each case reducer function
export const { 
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
} = cartSlice.actions;

export default cartSlice.reducer;