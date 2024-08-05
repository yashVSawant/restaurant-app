import React from "react";
import ReactDOM from "react-dom"
import classes from './Modal.module.css';

const BackDrop = ()=>{
    return <div className={classes.backdrop}/>
}
const ModalOverlay = (props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const PortalElement = document.getElementById('portal_root')

const Modal = (props)=>{ 
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop/>,PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
        </React.Fragment>
        
    )
}

export default Modal;