import React, { useContext, useRef } from "react";
import CartContext from "../../state/Context/CartContext/CartContext";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const modalRef = useRef();
  const cartCtx = useContext(CartContext);

  return (
    <Modal
      show={cartCtx.isCartShown}
      onModalClosed={cartCtx.hideCart}
      ref={modalRef}
    >
      <div className={classes.modal}>
        <ul className={classes["cart-items"]}>
          {cartCtx.cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              totalItems={item.count}
              onAdd={cartCtx.addItem}
              onRemove={cartCtx.removeItem}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={cartCtx.hideCart}>
            Close
          </button>
          <button className={classes["button"]}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

Cart.propTypes = {};

export default Cart;
