import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Import fetching, filtering and sorting actions
import { fetchMovieAnime, filterAnimeMovie } from "../../store/movieAnime/movieAnime";
import { fetchMusicAnime, filterAnimeMusic } from "../../store/musicAnime/musicAnime";
import { fetchOnaAnime, filterAnimeOna } from "../../store/onaAnime/onaAnime";
import { fetchOvaAnime, filterAnimeOva } from "../../store/ovaAnime/ovaAnime";
import { fetchSpecialAnime, filterAnimeSpecial } from "../../store/specialAnime/specialAnime";
import { fetchTvAnime, filterAnimeTv } from "../../store/tvAnime/tvAnime";
import { changePage } from "../../store/pageDetails/pageDetails";
import { searchAnime } from "../../store/utils/apiHandling";
import Header from "../Header/Header";
import LoadingPage from "../LoadingPage/LoadingPage";
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
// import './Home.css';
import '../../styles/scss/Home.scss';

import silhouette from '../../assets/images/silhouette.svg'

function Home() {
    const dispatch = useDispatch();
    const { type, category, filter } = useSelector((state) => state.pageDetails);
    const { status, filteredData } = useSelector((state) => state[type]);
    
    // Setup app state variables
    const [animeList, setAnimeList] = useState([]);
    //const [topAnime, setTopAnime] = useState([]);
    //const [popularAnime, setPopularAnime] = useState([]);
    const [search, setSearch] = useState("");


    // Setup JIKAN API calls
    /**
    const getTopAnime = async () => {
        try{
            const top = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`).then((res) => res.json());
            setTopAnime(top.data?.slice(0, 5));
    
            // Initial load to set anime list to the top anime
            setAnimeList(top.data);
        }
        catch (error){
            console.log(error);
        }
    };

    const getPopularAnime = async () => {
        try{
            const popular = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`).then((res) => res.json());
            setPopularAnime(popular.data?.slice(0, 5));
        }
        catch(error){
            console.log(error);
        }
    };

    const getFilteredAnime = async(value) => {
        try{
            const filtered = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${value}`).then((res) => res.json());

            //Set anime list to filtered anime list
            setAnimeList(filtered.data);
        }
        catch(error){
            console.log(error);
        }
       

    };

    const fetchAnime = async(query) => {
        try{
            const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&sfw`).then((res) => res.json());
            //Set anime list to query result list
            setAnimeList(anime.data);
        }
        catch(error){
            console.log(error);
        }

    };
    */

    async function searchAnimeHandler(query) {
        try{
            const result = await searchAnime(query);
            
            setAnimeList(result);
        }
        catch(error){
            console.log(error);
        }
    }

    // Setup event listener handlers
    const handleSearch = (event) => {
        event.preventDefault();
        searchAnimeHandler(search);
        
    };

    /** 
    const handleFilter = (value) => {
        getFilteredAnime(value);
    };

    useEffect(() => {
        getTopAnime();
        //getPopularAnime();

        // with set timeouts of 3 seconds
        //setTimeout(() => {getTopAnime();}, 3000);
        setTimeout(() => {getPopularAnime();}, 3000);

    }, []);
    */

    useEffect(() => {
        dispatch(changePage('Home page'));

        async function handleChanges(){
            switch(type) {
                case 'movieAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchMovieAnime());
                    }
                    dispatch(filterAnimeMovie(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeMovie(filter));
                    }
                    */
                    break;
                }
                case 'musicAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchMusicAnime());
                    }
                    dispatch(filterAnimeMusic(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeMusic(filter));
                    }
                    */
                    break;
                }
                case 'onaAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchOnaAnime());
                    }
                    dispatch(filterAnimeOna(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeOna(filter));
                    }
                    */
                    break;
                }
                case 'ovaAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchOvaAnime());
                    }
                    dispatch(filterAnimeOva(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeOva(filter));
                    }
                    */
                    break;
                }
                case 'specialAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchSpecialAnime());
                    }
                    dispatch(filterAnimeSpecial(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeSpecial(filter));
                    }
                    */
                    break;
                }
                case 'tvAnime': {
                    if (status === 'iddle'){
                        await dispatch(fetchTvAnime());
                    }
                    dispatch(filterAnimeTv(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeTv(filter));
                    }
                    */
                    break;
                }
                default: {
                    if (status === 'iddle'){
                        await dispatch(fetchTvAnime());
                    }
                    dispatch(filterAnimeTv(category));
                    /*
                    if (status === 'completed'){
                        dispatch(sortAnimeTv(filter));
                    }
                    */
                }
            }
        }
        handleChanges();
    }, [type, category, filter, dispatch, status]);

    useEffect(() => {
        setAnimeList(filteredData);
    }, [filteredData]);

    useEffect(() => {

        async function sortAnimeData(filter) {
            const sortTypes = {
                Popular: 'popularity',
                Favorite: 'favorites',
                Score: 'score',
                Episodes: 'episodes'
            }

            const sortProperty = sortTypes[filter];
            if (status === 'completed'){
                const sortedAnimeData = [...filteredData].sort((a, b) => a[sortProperty] - b[sortProperty])
                setAnimeList(sortedAnimeData);
            }
            console.log(sortProperty);
        }

        // console.log(filter);
        sortAnimeData(filter);

    }, [filter, status, filteredData])

    return (
        <>
            { status === 'completed' ? (
                <>
                    <div className="container info">
                        <img className="silhouette" src={silhouette} alt= ""/>
                        <p>{`Type: ${type.match(/\w+(?=Anime)/g)}`}</p>
                        <p>{`Category: ${category}`}</p>
                        <p>{`Order: ${filter}`}</p>
                        <p>{`Results: ${filteredData.length}`}</p>
                    </div>
                    <MainContent handleSearch={handleSearch} search={search} setSearch={setSearch} animeList={animeList}/>
                </>
            ) : <LoadingPage/>}
        </>
    );
}

export default Home;