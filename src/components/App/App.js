import React, { useState } from 'react'
import Card from '../Card/Card';
import styles from './App.module.css';

const App = () => {
    const [state, setState] = useState(
        [
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
    
        ]);

    const deleteHandler = (e, clickedIdx) => {

        setState((prevState) => {
            return prevState.filter((el, idx) => idx !== clickedIdx);
        })

        console.log("inside", state);

        // const deleteOperation = state.filter((el, idx) => idx !== clickedIdx ) 
        // setState(deleteOperation);
        // console.log(state);
    };  
        console.log("outSide", state);


    return ( 
        <div className={styles.mainContainer}>
            <h2>Boys Data</h2>
            <Card namesList={state}  type="men" deleteFunc = {deleteHandler} />
        </div>
    );    
};

export default App;