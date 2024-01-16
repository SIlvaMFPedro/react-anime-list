import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import MenuSettings from "../MenuSettings/MenuSettings";
import HeaderSelect from "../HeaderSelect/HeaderSelect";
import useWindowDimensions from "../../utils/utils";

import { SocialMedia } from "../SocialMedia/SocialMedia";
import './Header.css';

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const { currentPage } = useSelector((state) => state.pageDetails);
    const { width } = useWindowDimensions();

    const imgUrl = require(`../../assets/images/MAL-icon.png`);
    
    const clickHandler = () => {
        setMenuActive(true);
    };

    return (
        <nav>
            <Link to="/">
                <IoIosArrowBack fill="#fff"/>
            </Link>
            <img src={imgUrl} height="28px" width="28px" alt="" title="View at MyAnimeList.net"/>
            <h1>{currentPage}</h1>
            { width < 1024 ? (
                <div>
                    <button onClick={clickHandler} type="button" data-testid="settings">
                        <IoMdSettings fill="#fff"/>
                    </button>
                </div>
            ) : <HeaderSelect />}
            { (menuActive && width < 1024) && <MenuSettings setMenu={setMenuActive}/>}
        </nav>
    );
};

export default Header;