import React, { useState } from 'react'
import CardList from '../components/CardList/Card.list';
import Filter from '../components/filter/Filter';
import Button from '../components/Layout/Button';
import Modal from '../components/Modal/Modal';
import './App.css';

const App = () => {
    const [cardToggle, setCardToggle] = useState(true);
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [state, setState] = useState(
        [
            { 
                id: 1,
                name: "Muhammad",
                age: 33,
                address: "Alraml Bakoos",
                Phone: "02222222222",
                type: "boy"
            },
            {
                id: 2,
                name: "farah",
                age: 23,
                address: "Alraml Bakoos",
                Phone:"0256655555",
                type: "girl"

            },
            {
                id: 3,
                name: "Ahmed",
                age: 63,
                address: "Alraml Bakoos",
                Phone:"0256655555",
                type: "boy"

            },
            {
                id: 4,
                name: "Mariam",
                age: 30,
                address: "Alraml Bakoos",
                phone:"0296666666",
                type: "girl"
            },
    
        ]);

    const deleteHandler = (e, clickedId) => {

        setState((prevState) => {
            
            return prevState.filter((el, idx) => el.id !== clickedId);
        })

        // const deleteOperation = state.filter((el, idx) => idx !== clickedIdx ) 
        // setState(deleteOperation);
        // console.log(state);
    };  

    // const toggleHundler = () => {
    //     setCardToggle(!cardToggle)
    //     console.log('clicked'); 
    // }

    const filterNames = (name) => {
        console.log(name);
        setFilter(name);
    }

    const namesHandlers = () => {
        if(filter.length !== 0){
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    }

    return ( 
        <div className="mainContainer">
            <Modal show={showModal} closeModal={() => setShowModal(false)}/>
            <h2>List of Data</h2>
            <div style={{display:"flex", marginBottom: "10px"}}> 
            <Button onClick= {() => setCardToggle(!cardToggle)}>
                {cardToggle ? "Hide Cards" : "Show Cards"}
            </Button>
                {//<button 
                // style = {{marginRight: "20px"}}
                // className="button"
                // >
                // </button>
                }
                <button className="button" onClick={() => setShowModal(true)}>New Record</button>
            </div>
            <div className={cardToggle ? "show" : "hide"}>
                <Filter filteration = {filterNames} />
                <CardList namesList={namesHandlers()} deleteFunc = {deleteHandler} />
            </div>
        </div>
    );    
};

export default App;