import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import NoResults from "../NoResults/NoResults";
import './MainContent.css';


function MainContent(props: $TSFixMe){

    // console.log(props);
   
    return <>
        <div className="anime--search">
            <form className="search--box" onSubmit={props.handleSearch}>
                <input type="search" placeholder="Search for an anime" required value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
            </form>
        </div>
        <ul className="anime--list">
            {props ?
                props.animeList.map((anime: $TSFixMe) => <li key={anime.mal_id} className="anime--card">
                    <AnimeCard 
                        id={anime.mal_id}
                        imgUrl={anime.images.webp.large_image_url}
                        title={anime.title}

                        // @ts-expect-error TS(2322) FIXME: Type '{ id: any; imgUrl: any; title: any; titleJap... Remove this comment to see the full error message
                        titleJapanese={anime.title_japanese}
                        score={anime.score}
                        year={anime.year}
                        genres={anime.genres}
                        type={anime.type}
                    />
                </li>) 

            // @ts-expect-error TS(2786) FIXME: 'NoResults' cannot be used as a JSX component.
            : <li><NoResults/></li>}
        </ul>  
    </>;

}

export default MainContent;