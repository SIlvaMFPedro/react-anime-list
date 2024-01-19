import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import MenuSettings from "../MenuSettings/MenuSettings";
import HeaderSelect from "../HeaderSelect/HeaderSelect";
import useWindowDimensions from "../../utils/utils";

import { SocialMedia } from "../SocialMedia/SocialMedia";

// import './Header.css';
import '../../styles/scss/Header.scss';

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const { currentPage } = useSelector((state) => state.pageDetails);
    const { width } = useWindowDimensions();

    // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const imgUrl = require(`../../assets/images/MAL-icon.png`);
    
    const clickHandler = () => {
        setMenuActive(true);
    };

    return (
        <nav>
            <Link to="/">
                <IoIosArrowBack fill="#fff"/>
            </Link>
            // @ts-expect-error TS(2322): Type '{ children: Element[]; class: string; }' is ... Remove this comment to see the full error message
            <div class="header">
                <img src={imgUrl} alt="logo"/>
                <h1>{currentPage}</h1>
            </div>
            { width < 1024 ? (
                <div>
                    <button onClick={clickHandler} type="button" data-testid="settings">
                        <IoMdSettings fill="#fff"/>
                    </button>
                </div>
            ) : <HeaderSelect/>}
            { (menuActive && width < 1024) && <MenuSettings setMenu={setMenuActive}/>}
        </nav>
    );
};

export default Header;