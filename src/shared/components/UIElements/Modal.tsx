import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  onCancel: () => void;
  onSubmit?: (event: React.FormEvent) => void;
  header?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
}

const ModalOverlay = React.forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const content = (
      <div
        ref={ref}
        className={`modal ${props.className || ""}`}
        style={props.style}
      >
        <header className={`modal__header ${props.headerClass || ""}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`modal__content ${props.contentClass || ""}`}>
            {props.children}
          </div>
          <footer className={`modal__footer ${props.footerClass || ""}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    );

    const modalRoot = document.getElementById("modal-hook");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(content, modalRoot);
  }
);

const Modal: React.FC<ModalProps> = (props) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay {...props} ref={nodeRef} />
      </CSSTransition>
    </>
  );
};

export default Modal;
