import React from "react";

const CartContext = React.createContext({
  isCartShown: false,
  showCart: () => {},
  hideCart: () => {},
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
  addItem: (id, count) => {},
  removeItem: (id) => {},
});

export default CartContext;
