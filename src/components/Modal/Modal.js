import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

const Backdrop = () => {
    return <div className={styles.backDrop}>  </div> 
};

const OverLay = () => {
    return <div className={styles.overLay}>  </div> 
};

const Modal  = ({show}) => {
    return (
        show && (
            <Fragment>
                { ReactDOM.createPortal(
                    <Fragment>
                    <Backdrop />
                    <OverLay />
                    </Fragment>, document.getElementById('modal')
                )}
            </Fragment>
        )
    );
};
 
export default Modal;