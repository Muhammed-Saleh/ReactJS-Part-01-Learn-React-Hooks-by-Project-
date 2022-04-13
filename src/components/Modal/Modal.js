import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Form from "../Layout/Form";

import styles from "./Modal.module.css";

const Backdrop = ({close, show}) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick= {close}>  </div> 
};

const OverLay = ({show}) => {
return (
    <div className={`${styles.overLay} ${show ? styles.showOverLay : null}`}>
        <form>
            <Form.Controller className={styles.contral}>
                <label htmlFor="name">Name</label>
                <input type="name" placeholder="Enter name" />
            </Form.Controller>
        </form>
    </div>
);};            


const Modal  = ({show, closeModal}) => {
    return(
            <Fragment>
                { ReactDOM.createPortal(
                    <Fragment>
                    <Backdrop close={closeModal} show={show}/>
                    <OverLay show={show}/>
                    </Fragment>, document.getElementById('modal')
                )}
            </Fragment>
    );
};
 
export default Modal;