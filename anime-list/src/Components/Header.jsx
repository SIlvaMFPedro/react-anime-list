import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenuStatus } from "../Store/action";
import { DESKTOP_VIEW } from "../Constants/index";
import menuOpenIcon from "../Assets/menu.svg";
import menuCloseIcon from "../Assets/close.svg";
import SearchBar from "./SearchBar";
import styles from "../Styles/Components/Header.module.scss";

export default function Header() {
    
    const dispatch = useDispatch();
    const [showLogo, setShowLogo] = useState(true);
    const windowViewType = useSelector((state) => state.windowViewType);
    const isMenuOpen = useSelector((state) => state.isMenuOpen);

    function menuHandler(status){
        dispatch(setMenuStatus(status));
    }

    return (
        <Fragment>
            <Link className={styles.logo} to="/" style={showLogo ? {} : { display: 'none' }}>Anime List</Link>
            <div className={styles.section}>
                <SearchBar setShowLogo={setShowLogo} />
                {(windowViewType !== DESKTOP_VIEW) &&
                    (isMenuOpen ? 
                    <img className={styles.menuIcon} onClick={() => { menuHandler(false) }} src={menuCloseIcon} alt='menuClose' /> 
                    : <img className={styles.menuIcon} onClick={() => { menuHandler(true) }} src={menuOpenIcon} alt='menuOpen' />)}
            </div>
      </Fragment>
    );

}