import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import CartContext from "../../../state/Context/CartContext/CartContext";
import classes from "./Header.module.css";
import HeaderButtonCart from "./HeaderButton/HeaderButtonCart";

const Header = (props) => {
  const cartCtx = React.useContext(CartContext);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButtonCart onClick={cartCtx.showCart}>Cart</HeaderButtonCart>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt={"Table full of delicious food"} />
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {};

export default Header;
