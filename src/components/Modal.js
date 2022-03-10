import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, close, isOpen, isClosable = true, data = {} }) => {
  const ref = useRef();

  const handleClick = (e) => {
    if (isClosable && !ref.current?.contains(e.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  if (!isOpen) {
    return null;
  }

  const childWithProp = React.Children.map(children, (child) => {
    if (typeof child.type === "string") {
      return child;
    }
    return React.cloneElement(child, { close, data });
  });

  return createPortal(
    <div className="modal-cover">
      <div ref={ref}>
        <div className="modal-content">{childWithProp}</div>
      </div>
      <div className="overlay"></div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
