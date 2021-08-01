import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../../state/Context/CartContext/CartContext";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButtonCart = (props) => {
  const cardCtx = useContext(CartContext);
  const [buttonClass, setButtonClass] = useState(classes.button);

  const { totalItems } = cardCtx;
  useEffect(() => {
    setButtonClass(`${classes.button} ${classes.bump}`);
    const timer = setTimeout(() => {
      setButtonClass(`${classes.button}`);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalItems]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

HeaderButtonCart.prototypes = {
  onClick: PropTypes.func.isRequired,
};
export default HeaderButtonCart;
