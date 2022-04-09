import React from 'react';
import  styles from './Card.module.css';

const Card = ( {namesList, type, deleteFunc} ) => {
    const cards = namesList.map(({ name, age, address, phone }, idx) => {
        return <div 
                className={styles.cardWrapper}
                key={idx} 
                style = {{backgroundColor: type === "men" ? "skyblue" : "pink"}}>
                
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>address: {address}</div>
            <div>Phone: {phone}</div>
            <div 
            className={styles.deleteBtn} 
            onClick={(event) => deleteFunc(event, idx)}>
                x
            </div>
        </div>
    });
    return <div>{cards}</div>
} 

//  const Card = ( {namesList, color} ) => {
//     return (
//         <div>    
//               { namesList.map(({ name, age, address, phone }, idx) => {
//             return <div className="cardWrapper" key={idx} style = {{backgroundColor:color}}>
//                         <div>name: {name}</div>
//                         <div>age: {age}</div>
//                         <div>address: {address}</div>
//                         <div>Phone: {phone}</div>
//                     </div>
//                 })}
//         </div>
//     );
// };


export default Card;