import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { idbPromise } from "../../utils/helpers";

// import ADD_TO_CART and UPDATE_CART_QUANTITY actions from cartSlice
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../redux/features/cartSlice';
// read data from the store with useSelector, and dispatch actions using useDispatch
import { useSelector, useDispatch } from 'react-redux';

function ProductItem(item) {
  // read data from the store with the useSelector hook
  const { cart } = useSelector(state => state.cart);
  // get the dispatch function with the useDispatch hook, and dispatch actions as needed
  const dispatch = useDispatch();

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch(UPDATE_CART_QUANTITY({
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      }));
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch(ADD_TO_CART({
        product: { ...item, purchaseQuantity: 1 }
      }));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
