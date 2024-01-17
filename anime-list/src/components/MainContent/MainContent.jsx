import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import NoResults from "../NoResults/NoResults";
import './MainContent.css';


function MainContent(props){
   
    return (
        <main>
            <div className="main--head">
                <form className="search--box" onSubmit={props.handleSearch}>
                    <input type="search" placeholder="Search for an anime" required value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
                </form>
            </div>
            <ul className="anime--list">
                {props && props.animeList.length > 0 ?
                    props.animeList.map((anime) => (
                        <li key={anime.mal_id} className="anime--card">
                            <AnimeCard 
                                id={anime.mal_id}
                                imgUrl={anime.images.webp.large_image_url}
                                title={anime.title}
                                titleJapanese={anime.title_japanese}
                                score={anime.score}
                                year={anime.year}
                                genres={anime.genres}
                                type={anime.type}
                            />
                        </li>
                    )) 
                : <li><NoResults/></li>}
            </ul>
        </main>
    );

}

export default MainContent;