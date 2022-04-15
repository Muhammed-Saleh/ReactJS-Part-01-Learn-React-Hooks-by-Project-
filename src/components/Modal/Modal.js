import React, { Fragment, useState } from "react";

import ReactDOM from 'react-dom';

import styles from "./Modal.module.css";

// const [formState, setformState] = useState({});


const Backdrop = ({close, show}) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick= {close}>  </div> 
};

const OverLay = ({ children , show }) => {
return (
    <div className={`${styles.overLay} ${show ? styles.showOverLay : null}`}>
        {children}
    </div>
);};            


const Modal  = ({ children ,show, closeModal}) => {
        return(
            <Fragment>
                { ReactDOM.createPortal(
                    <Fragment>
                    <Backdrop close={closeModal} show={show}/>
                    <OverLay show={show}>{children}</OverLay>
                    </Fragment>, document.getElementById('modal')
                )}
            </Fragment>
    );
};
 
export default Modal;