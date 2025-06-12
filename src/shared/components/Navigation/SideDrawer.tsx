import type React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

import "./SideDrawer.css";

interface SideDrawerProps {
  children: React.ReactNode;
  show?: boolean;
  onClick?: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  show = false,
  onClick,
}) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside ref={nodeRef} className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  const drawerHook = document.getElementById("drawer-hook");
  if (!drawerHook) return null;

  return ReactDOM.createPortal(content, drawerHook);
};

export default SideDrawer;
