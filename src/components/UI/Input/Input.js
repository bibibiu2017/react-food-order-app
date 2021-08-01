import PropTypes from "prop-types";
import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input value={props.input.value} {...props.input} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.oneOf(["text", "email", "password", "date", "number"]),
  }),
};

export default Input;
