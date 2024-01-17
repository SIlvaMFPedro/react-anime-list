import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../store/pageDetails/pageDetails";

import './Filter.css';

const Filter = (props) => {
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.pageDetails);
    const { setMenu, label } = props;

    const onChangeHandlerFilter = (event) => {
        dispatch(changeFilter(event.target.value));
        setMenu(false);
    }


    return (
        <label htmlFor="filter">
            <p>{label}</p>
            <select onChange={onChangeHandlerFilter} name="filter" id="filter" value={filter}>
                <option value="All">All</option>
                <option value="Popular">Popular</option>
                <option value="Favorite">Favorite</option>
                <option value="Score">Score</option>
                <option value="Episodes">Episodes</option>
            </select>
        </label>
    );
};

Filter.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Filter;