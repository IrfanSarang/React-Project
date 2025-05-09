import React, {ReactNode} from 'react'
import './SideDrawer.css'
import ReactDOM  from 'react-dom';
import {CSSTransition } from 'react-transition-group'

interface SideDrawerProps{
    children?: ReactNode;
    show?: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = props => {
   const content = 
   <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
    <aside className='side-drawer'>{props.children}</aside>
    </CSSTransition>
    
   return ReactDOM.createPortal(content, document.getElementById('drawer-hook')!);
}

export default SideDrawer
    