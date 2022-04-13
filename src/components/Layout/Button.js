import React from 'react';
import styles from './Layout.module.css';

const Button = (props) => {
    return <button 
    style = {{marginRight: "20px"}}
    onClick={() => props.onClick}
    className={styles.button}
    >
       {props.children}
    </button>
;
}
 
export default Button;