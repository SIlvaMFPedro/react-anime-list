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


// @ts-expect-error TS(2307) FIXME: Cannot find module '../../assets/images/silhouette... Remove this comment to see the full error message
import silhouette from '../../assets/images/silhouette.svg';

function Home() {
    const dispatch = useDispatch();

    // @ts-expect-error TS(2571) FIXME: Object is of type 'unknown'.
    const { type, category, filter } = useSelector((state) => state.pageDetails);

    // @ts-expect-error TS(2571) FIXME: Object is of type 'unknown'.
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

    async function searchAnimeHandler(query: $TSFixMe) {
        try{
            const result = await searchAnime(query);
            
            setAnimeList(result);
        }
        catch(error){
            console.log(error);
        }
    }

    // Setup event listener handlers
    const handleSearch = (event: $TSFixMe) => {
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

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchMovieAnime());
                    }
                    dispatch(filterAnimeMovie(category));
                    break;
                }
                case 'musicAnime': {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchMusicAnime());
                    }
                    dispatch(filterAnimeMusic(category));
                    break;
                }
                case 'onaAnime': {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchOnaAnime());
                    }
                    dispatch(filterAnimeOna(category));
                    break;
                }
                case 'ovaAnime': {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchOvaAnime());
                    }
                    dispatch(filterAnimeOva(category));
                    break;
                }
                case 'specialAnime': {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchSpecialAnime());
                    }
                    dispatch(filterAnimeSpecial(category));
                    break;
                }
                case 'tvAnime': {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchTvAnime());
                    }
                    dispatch(filterAnimeTv(category));
                    break;
                }
                default: {
                    if (status === 'iddle'){

                        // @ts-expect-error TS(2345) FIXME: Argument of type 'AsyncThunkAction<any[], void, As... Remove this comment to see the full error message
                        await dispatch(fetchTvAnime());
                    }
                    dispatch(filterAnimeTv(category));
                }
            }
        }
        handleChanges();
    }, [type, category, filter, dispatch, status]);

    useEffect(() => {
        setAnimeList(filteredData);
    }, [filteredData]);

    useEffect(() => {

        async function sortAnimeData(filter: $TSFixMe) {
            const sortTypes = {
                Popular: 'popularity',
                Favorite: 'favorites',
                Score: 'score',
                Episodes: 'episodes'
            }


            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            const sortProperty = sortTypes[filter];
            if (status === 'completed'){
                const sortedAnimeData = [...filteredData].sort((a, b) => a[sortProperty] < b[sortProperty] ? 1 : -1);

                // @ts-expect-error TS(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
                setAnimeList(sortedAnimeData);
            }
            console.log(sortProperty);
        }

        // console.log(filter);
        sortAnimeData(filter);

    }, [filter, status, filteredData])

    return <>
        { status === 'completed' ? (
            <>
                <div className="container info">
                    <img className="firstSilhouette" src={silhouette} alt= ""/>
                    <p>{`Type: ${type.match(/\w+(?=Anime)/g)}`}</p>
                    <p>{`Category: ${category}`}</p>
                    <p>{`Order: ${filter}`}</p>
                    <p>{`Results: ${filteredData.length}`}</p>
                    <img className="secondSilhouette" src={silhouette} alt= "" />
                </div>
                <MainContent handleSearch={handleSearch} search={search} setSearch={setSearch} animeList={animeList}/>
            </>
        // @ts-expect-error TS(2786) FIXME: 'LoadingPage' cannot be used as a JSX component.
        ) : <LoadingPage/>}
    </>;
}

export default Home;