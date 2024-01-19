import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import MenuSettings from "../MenuSettings/MenuSettings";
import HeaderSelect from "../HeaderSelect/HeaderSelect";
import useWindowDimensions from "../../utils/utils";

import { SocialMedia } from "../SocialMedia/SocialMedia";

import '../../styles/scss/Header.scss';

interface PageDetails {
    currentPage: string;
}

function Header(): JSX.Element {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const { currentPage }: PageDetails = useSelector((state: any) => state.pageDetails);
    const { width }: { width: number } = useWindowDimensions();

    const imgUrl: string = require(`../../assets/images/MAL-icon.png`);
    
    const clickHandler = (): void => {
        setMenuActive(true);
    };

    return (
        <nav>
            <Link to="/">
                <IoIosArrowBack fill="#fff"/>
            </Link>
            <div className="header">
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