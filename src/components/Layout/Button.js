import React from 'react';
import styles from './Layout.module.css';

const Button = (props) => {
    return <button 
    style = {props.style}
    type = {`${props.type ? props.type : 'button'}`}
    onClick={props.onClick}
    className={styles.button}
    >
       {props.children}
    </button>

};
 
export default Button;