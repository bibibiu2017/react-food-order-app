import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import { cartReducer, initializeState } from "./CartReducer";

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, null, initializeState);
  const [isCartShown, setIsCartShown] = useState(false);

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  const addItem = (id, number) => {
    const count = number ? number : 1;
    dispatch({ type: "ADD_CART_ITEM", id, count });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", id });
  };

  const { cartItems, totalItems, totalAmount } = state;

  const ctx = {
    isCartShown,
    showCart,
    hideCart,
    cartItems,
    totalItems,
    totalAmount,
    addItem,
    removeItem,
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
