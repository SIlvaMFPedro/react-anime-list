import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchFilter } from "../Store/action";
import { useNavigate } from 'react-router-dom';
import { TABLET_VIEW, MOBILE_VIEW } from "../Constants/index";
import styles from "../Styles/Components/SearchBar.module.scss";
import searchIcon from "../Assets/search.svg";


export default function SearchBar({ setShowLogo }) {
    
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const windowViewType = useSelector((state) => state.windowViewType);
    const clearFilter = useSelector((state) => state.clearFilter);
    const genre = useSelector((state) => state.genreFilter);
    const rating = useSelector((state) => state.ratingFilter);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [searchBarMini, setSearchBarMini] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            searchBarMini ? setShowLogo(true) : setShowLogo(false);
        }, 50);
        
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchBarMini]);

    useEffect(() => {
        setSearchValue("");
        dispatch(updateSearchFilter(""));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearFilter]);

    function onChangeHandler(event){
        setSearchValue(event.target.value);
        dispatch(updateSearchFilter(searchValue));
        if ((windowViewType === TABLET_VIEW || windowViewType === MOBILE_VIEW) && !event.target.value && !searchBarMini){
            setSearchBarMini(true);
        }
        navigate(`/listing/search?q=${event.target.value}&genre=${genre.value}&rating=${rating.value}`);
    }

    function onClickHandler(){
        if (windowViewType === TABLET_VIEW || windowViewType === MOBILE_VIEW) {
            setSearchBarMini(false);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        }

    }

    function onBlurHandler(){
        ((windowViewType === TABLET_VIEW || windowViewType === MOBILE_VIEW) && !searchValue) && setSearchBarMini(true);

    }

    return (
        <div className={styles.searchBar}>
            <input 
              ref={inputRef} 
              className={styles.searchField} 
              type="text" 
              placeholder="Search for Animes"
              style={((windowViewType === TABLET_VIEW || windowViewType === MOBILE_VIEW) && searchBarMini) ? { width: '0px', padding: '0px'} : {}}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={searchValue}
              name="search"
              id="search"
              autoComplete="off"
            />
            <button tabIndex="-1" onClick={onClickHandler} className={styles.searchButton}><img src={searchIcon} alt="Search Icon"/></button>
        </div>
    );
}