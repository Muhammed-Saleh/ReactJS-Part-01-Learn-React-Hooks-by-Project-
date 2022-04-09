import React, { useState } from 'react'
import Card from '../Card/Card';
import './App.css';

const App = () => {
    const [cardToggle, setCardToggle] = useState(false);
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

        // const deleteOperation = state.filter((el, idx) => idx !== clickedIdx ) 
        // setState(deleteOperation);
        // console.log(state);
    };  

    // const toggleHundler = () => {
    //     setCardToggle(!cardToggle)
    //     console.log('clicked'); 
    // }

    return ( 
        <div className="mainContainer">
            <h2>Boys Data</h2>
            <button 
            style = {{marginBottom: "20px"}}
            onClick={() => setCardToggle(!cardToggle)}>
                {cardToggle ? "Hide Cards" : "Show Cards"}
            </button>
            <div className={cardToggle ? "show" : "hide"}>
                <Card namesList={state}  type="men" deleteFunc = {deleteHandler} />
            </div>
        </div>
    );    
};

export default App;