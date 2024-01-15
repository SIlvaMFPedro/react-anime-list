import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import Filter from "../Filter/Filter";
import './MainContent.css';
import { Button, Menu, Fade } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { Star as StarIcon } from "@mui/icons-material";
import { LiveTv as LiveTvIcon } from "@mui/icons-material";
import { CalendarMonth as CalendarMonthIcon } from "@mui/icons-material";

function MainContent(props){
    const [state, setState] = React.useState(null);

    const open = Boolean(state);

    const handleClick = (event) => {
        setState(event.currentTarget);
    }
    const handleClose = (event) => {
        setState(null);
    }

    const fetchFilter = (name) => {
        props.handleFilter(name);
    }

    const filters = [
        {name: "popular", query: "bypopularity", icon: <FavoriteIcon/>},
        {name: "upcoming", query: "upcoming", icon: <CalendarMonthIcon/>},
        {name: "favorite", query: "favorite", icon: <StarIcon/>},
        {name: "airing", query: "airing", icon: <LiveTvIcon/>},
    ];

    return (
        <main>
            <div className="main--head">
                <form className="search--box" onSubmit={props.handleSearch}>
                    <Button className="filter--anime" id="fade-button" 
                            aria-controls={open ? "fade--menu": undefined} aria-haspopup="true" aria-expanded={open ? "true": undefined} 
                            onClick={handleClick} variant="contained">
                            Filter Anime
                    </Button>
                    <Menu id="fade-menu" MenuListProps={{"aria-labelledby": "fade-button"}} anchorEl={state} open={open} onClose={handleClose} TransitionComponent={Fade}>
                        {filters.map((filter) => {
                            return (
                                <Filter fetchFilter={fetchFilter} filter={filter} handleClose={handleClose}/>
                            );
                        })}
                    </Menu>
                    <input type="search" placeholder="Search for an anime" required value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
                </form>
            </div>
            <div className="anime--list">
                {props && 
                    props.animeList?.map((anime) => (
                        <AnimeCard anime={anime} key={anime.mal_id}/>
                    ))}
            </div>
        </main>
    );

}

export default MainContent;