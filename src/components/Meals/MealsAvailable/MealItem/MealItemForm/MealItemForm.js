import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import CartContext from "../../../../../state/Context/CartContext/CartContext";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [items, setItems] = useState("1");
  const cartContext = useContext(CartContext);

  const onSubmitFormHandle = (event) => {
    event.preventDefault();
    cartContext.addItem(props.id, +items);
    setItems("1");
  };

  const onChangeHandler = (event) => {
    setItems(event.target.value);
  };

  return (
    <form onSubmit={onSubmitFormHandle} className={classes.form}>
      <Input
        label={"Label"}
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: items,
          onChange: onChangeHandler,
        }}
      />
      <button type={"submit"} onClick={onSubmitFormHandle}>
        + Add
      </button>
    </form>
  );
};

MealItemForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MealItemForm;
