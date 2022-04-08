import React from 'react'
import './App.css';

const App = () => {
    const names = [
        { 
            name: "Muhammad",
            age: 33,
            address: "Alraml Bakoos",
            Phone: "02222222222",
        },
        { 
            name: "Ahmed",
            age: 63,
            address: "Alraml Bakoos",
            Phone:"0256655555",
        },
        { 
            name: "Hema",
            age: 30,
            address: "Alraml Bakoos",
            phone:"0296666666",
        },

    ];

    const cards = names.map(({ name, age, address, phone }, idx) => {
        return <div className="cardWrapper" key={idx}>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>address: {address}</div>
            <div>Phone: {phone}</div>
        </div>
    });
    return <div className='mainContainer'>{cards}</div>;
};

export default App