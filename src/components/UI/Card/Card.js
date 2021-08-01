import PropTypes from "prop-types";
import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, ...props }) => {
  return <div className={`${classes.card} ${props.className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Card;
