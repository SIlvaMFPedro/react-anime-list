import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { changeType } from "../../store/pageDetails/pageDetails";

const Type = (props: $TSFixMe) => {
    const dispatch = useDispatch();
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { type } = useSelector((state) => state.pageDetails);
    const { setMenu, label } = props;

    const onChangeHandlerType = (event: $TSFixMe) => {
        dispatch(changeType(event.target.value));
        setMenu(false);
    };

    return (
        <label htmlFor="type">
            <p>{label}</p>
            <select onChange={onChangeHandlerType} name="type" id="type" value={type} data-testid="typeSelect">
                <option value="tvAnime">Tv</option>
                <option value="movieAnime">Movie</option>
                <option value="ovaAnime">Ova</option>
                <option value="onaAnime">Ona</option>
                <option value="musicAnime">Music</option>
            </select>
        </label>
    );
};

Type.propTypes = {
    setMenu: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Type;