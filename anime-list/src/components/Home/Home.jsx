import { useEffect, useState } from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import './Home.css';

function Home() {
    // Setup app state variables
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [popularAnime, setPopularAnime] = useState([]);
    const [search, setSearch] = useState("");


    // Setup JIKAN API calls
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

    // Setup event listener handlers
    const handleSearch = (event) => {
        event.preventDefault();
        fetchAnime(search);
        
    };

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

    return (
        <div className="App">
            <Header />
            <div className="content--wrap">
                <Sidebar topAnime={topAnime} popularAnime={popularAnime}/>
                <MainContent handleSearch={handleSearch} handleFilter={handleFilter} search={search} setSearch={setSearch} animeList={animeList}/>
            </div>
        </div>
    );
}

export default Home;