import React from "react";
import './Filter.css';

const Filter = ({ fetchFilter, filter, handleClose }) => {
    return (
        <button 
            className="filter--button" 
            onClick={() => {
                handleClose();
                fetchFilter(`${filter.query}`);
            }}
        >
            {filter.icon}
            {filter.name}
        </button>
    );
};

export default Filter;