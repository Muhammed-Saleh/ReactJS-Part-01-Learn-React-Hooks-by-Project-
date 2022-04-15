import React, { useState } from "react";
import styles from "./FilterInput.module.css";

const Filter = ({filteration}) => {
    const [filterState, setStateFilter] = useState("");
    const filterHandler = (e) => {
        const name = e.target.value
        setStateFilter(name);
        filteration(name);
    }
    return (
        <div className = {styles.mp}>
            <input 
            type="text" 
            placeholder='filter by name' 
            value = {filterState} 
            onChange = {filterHandler}
            />
        </div>
    );
}

export default Filter;