import React from "react";
import { useHistory } from 'react-router-dom';

import classes from '../Styles/Pages/NoMatch.module.scss';

export default function Error() {

    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <div className={classes.error}>
            <h4>The page you requested is not available!</h4>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}