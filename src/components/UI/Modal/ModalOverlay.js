import PropTypes from "prop-types";

const ModalOverlay = (props) => {
  return props.show ? <div>{props.children}</div> : null;
};

ModalOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ModalOverlay;
