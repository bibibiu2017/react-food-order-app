import PropTypes from "prop-types";
import * as React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = React.forwardRef(({ children, ...props }, ref) => {
  const [show, setShow] = React.useState(props.show);

  React.useImperativeHandle(ref, () => ({
    hideModal() {
      setShow(false);
      props.onModalClosed();
    },
  }));

  React.useEffect(() => {
    setShow(props.show);
  }, [props]);

  const backDropOnClickHandler = () => {
    ref.current.hideModal();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={backDropOnClickHandler} show={show} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay show={show}> {children} </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
});

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModalClosed: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
