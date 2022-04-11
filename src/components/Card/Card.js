import React from 'react';
import styles from './Card.module.css';

const Card = ({ id, name, age, address, phone, type, deleteFunc }) => {
    return (    
       <div 
       className={styles.cardWrapper}
       style = {{backgroundColor: type === "boy" ? "skyblue" : "pink"}}
        >
           
       <div>name: {name}</div>
       <div>age: {age}</div>
       <div>address: {address}</div>
       <div>Phone: {phone}</div>
       <div 
       className={styles.deleteBtn} 
       onClick={(event) => deleteFunc(event, id)}>
           x
       </div>

       </div>
    );
}
 
export default Card;