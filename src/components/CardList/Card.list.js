import React from 'react';
import Card from '../Card/Card';

const CardList = ( {namesList, deleteFunc} ) => {
    console.log(namesList);
    const cards = namesList.map(({id, ...otherProps}) => {
       return <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc} />
    });
    return <div>{cards}</div>
} 
 
export default CardList;