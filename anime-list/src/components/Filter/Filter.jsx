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
                <option value="Popular">Popular</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Favorite">Favorite</option>
                <option value="Airing">Airing</option>
            </select>
        </label>
    );
};

Filter.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Filter;