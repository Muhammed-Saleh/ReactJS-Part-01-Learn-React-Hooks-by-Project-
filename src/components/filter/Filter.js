import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
    const [filter, setStateFilter] = useState("");
    const filterHandler = (e) => {
        const name = e.target.value
        setStateFilter(name);
        if( filter.length > 5 )
            alert();
        console.log(filter);
    }
    return (
        <div className = {styles.mp}>
            <input type="text" placeholder='filter by name' value = {filter} onChange = {filterHandler}/>
        </div>
    );
}

export default Filter;