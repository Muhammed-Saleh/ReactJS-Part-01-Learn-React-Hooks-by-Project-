import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({filteration}) => {
    const [filter, setStateFilter] = useState("");
    const filterHandler = (e) => {
        const name = e.target.value
        setStateFilter(name);
        filteration(name);
    }
    return (
        <div className = {styles.mp}>
            <input type="text" placeholder='filter by name' value = {filter} onChange = {filterHandler}/>
        </div>
    );
}

export default Filter;