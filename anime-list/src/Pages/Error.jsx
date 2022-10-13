import React from "react";
import { useNavigate } from 'react-router-dom';

import classes from '../Styles/Pages/NoMatch.module.scss';

export default function Error() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <div className={classes.error}>
            <h4>The page you requested is not available!</h4>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}