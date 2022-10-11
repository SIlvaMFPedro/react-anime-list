import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { MOBILE_VIEW } from "../Constants/index";
import styles from '../Styles/Components/LandscapeCarousel.module.scss';
import tagIcon from '../Assets/tag.svg';
import leftArrowIcon from '../Assets/left-arrow.png';
import rightArrowIcon from '../Assets/right-arrow.png';
import fetchAPI from '../API/index';


export default function LandscapeCarousel({ endPoint }) {

    const windowViewType = useSelector((state) => state.windowViewType);
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);
    const [anime, setAnime] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAPI(endPoint.url);
            setAnime(data[endPoint.path] ? data[endPoint.path] : []);
        }
        fetchData();
    }, [endPoint.url, endPoint.path]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((prevState) => {
                let currentIndex = 0;
                currentIndex = (prevState + 1 < anime.length) ? prevState + 1 : 0;
                return currentIndex;
            });
        }, 5000);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anime, currentIndex]);

    function changeIndex(dir) {
        setCurrentIndex((prevState) => {
            let currentIndex = 0;
            if (dir === "left"){
                currentIndex = (prevState - 1 > 0) ? prevState - 1 : anime.length - 1;
            }
            else if (dir === "right"){
                currentIndex = (prevState + 1 < anime.length) ? prevState + 1 : 0;
            }
            return currentIndex;
        });
    }

    function onClickHandler(id) {
        history.push(`/anime/${id}`);
    }

    if (anime.length === 0){
        return null;
    }

    return (
        <div key={anime[currentIndex].mal_id} className={styles.landscapeCarousel} onMouseEnter={() => { setShowNav(true) }} onMouseLeave={() => { setShowNav(false) }}>
            {showNav && <button className={`${styles.leftbtn} ${styles.btn}`} onClick={() => { changeIndex("left") }} >
                <img className={styles.arrow} src={leftArrowIcon} alt="Left Arrow" /></button>}

            <img className={styles.poster} src={anime[currentIndex].image_url} alt="test" />
            <div className={styles.textContent} onClick={() => { onClickHandler(anime[currentIndex].mal_id) }}>
                <h3 className={styles.title}>{anime[currentIndex].title}</h3>
                <p className={styles.synopsis}>
                    {anime[currentIndex].synopsis.length > (windowViewType === MOBILE_VIEW ? 200 : 350) ?
                        `${anime[currentIndex].synopsis.slice(0, (windowViewType === MOBILE_VIEW ? 200 : 350))}...` :
                        anime[currentIndex].synopsis}
                </p>
                <p className={styles.genre}>
                    <img src={tagIcon} alt="tag" /> &nbsp;
                    {anime[currentIndex].genres.map((ele, index) => {
                        return <span key={index}>{`${ele.name}, `}</span>;
                    })}
                    {anime[currentIndex].explicit_genres.map((ele, index) => {
                        return <span key={index}>{`${ele.name}, `}</span>;
                    })}
                    Anime
                </p>
            </div>

            {showNav && <button className={`${styles.rightbtn} ${styles.btn}`} onClick={() => { changeIndex("right") }} >
                <img className={styles.arrow} src={rightArrowIcon} alt="Right Arrow" /></button>}
        </div>
    );
}