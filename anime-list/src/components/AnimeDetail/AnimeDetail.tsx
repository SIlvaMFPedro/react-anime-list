import React, { useEffect, useState } from "react";
import { useParams, NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { getAnimeById, getAnimeCharactersById } from "../../store/utils/apiHandling";
import { changePage } from "../../store/pageDetails/pageDetails";
import LoadingPage from "../LoadingPage/LoadingPage";
import { ArrowBackIos as ArrowBackIosIcon } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
//import './AnimeDetail.css';
import '../../styles/scss/AnimeDetail.scss';

function AnimeDetail(){

    // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const imgUrl = require(`../../assets/images/MAL-icon.png`);

    const dispatch = useDispatch();
    const { title, id } = useParams();
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState({});

    /** 
    const fetchAnime = async (category) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${category}`).then((res) => res.json());
        setAnime(temp.data);
    }

    const fetchCharacters = async (anime) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`).then((res) => res.json());
        
        let sortedData = temp?.data.sort((a, b) => a.favorites < b.favorites ? 1 : -1);
        setCharacters(sortedData?.slice(0, 10));
    }
    */

    useEffect(() => {
      async function fetchAnime(){
        const result = await getAnimeById(id);
        setAnime(result);
      }

      async function fetchCharacters() {
        const result = await getAnimeCharactersById(id);
        setCharacters(result);
      }

      fetchAnime();
      fetchCharacters();

      dispatch(changePage(title));
    }, [dispatch, id, title]);

    // @ts-expect-error TS(2339): Property 'title' does not exist on type '{}'.
    return anime.title ? (
        <div className="anime--details">
          <div className="anime--info">
            <div className="image--container">
              // @ts-expect-error TS(2339): Property 'images' does not exist on type '{}'.
              <img src={anime.images.webp.large_image_url} alt={anime.title} />
            </div>
            <div className="anime--description">
              // @ts-expect-error TS(2339): Property 'title' does not exist on type '{}'.
              <h2>{anime.title}</h2>
              // @ts-expect-error TS(2339): Property 'title_japanese' does not exist on type '... Remove this comment to see the full error message
              <h3>{anime.title_japanese}</h3>
              <ul className="row genres">
                // @ts-expect-error TS(2339): Property 'genres' does not exist on type '{}'.
                {anime.genres.map((genre: $TSFixMe) => <li key={nanoid()} className="box genre-box">{genre.name}</li>)}
              </ul>
              <div className="anime--icon">
                // @ts-expect-error TS(2339): Property 'url' does not exist on type '{}'.
                <a href={anime.url} target="_blank" rel="noreferrer">
                  <img src={imgUrl} className="my--anime--icon" alt="" title="View at MyAnimeList.net"/>
                </a>
              </div>
            </div>
          </div>
          <h3 className="title"> Trailer </h3>
          // @ts-expect-error TS(2339): Property 'trailer' does not exist on type '{}'.
          {anime.trailer.embed_url ? (
            <div className="trailer--section">
              // @ts-expect-error TS(2322): Type '{ children: Element; align: string; }' is no... Remove this comment to see the full error message
              <div align="center">
                <iframe
                  id="inLineFrameExample"
                  title="YouTube Video Player"
                  style={{width: 1000, height: 500, border:0}}
                  // @ts-expect-error TS(2339): Property 'trailer' does not exist on type '{}'.
                  src={anime.trailer.embed_url.replace('&autoplay=1', '')}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : <p>{'We couldn\'t find any link. Sorry :('}</p>}
          <h3 className="title"> Characters </h3>
          // @ts-expect-error TS(2339): Property 'length' does not exist on type '{}'.
          {characters.length > 0 ? (
            <div className="character--section">
              <div className="character">
                // @ts-expect-error TS(2339): Property 'map' does not exist on type '{}'.
                {characters.map((item: $TSFixMe) => {
                  return (
                    <div className="character--item" key={item.character.mal_id}>
                      <div className="character--description">
                        <img
                          width="150"
                          height="200"
                          src={item.character.images.jpg.image_url}
                          className="character--photo"
                          alt=""
                        ></img>
                        <span className="character--name">{item.character.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : <p>{'We couldn\'t find any characters from the anime. Sorry :('}</p>}
          <div className="stats">
            <div className="airing">
              <h3 className="title"> Airing Information </h3>
              <p className="box details--box">
                // @ts-expect-error TS(2339): Property 'year' does not exist on type '{}'.
                {`Year: ${anime.year ? anime.year : 'Not Specified'}`}
              </p>
              <p className="box details--box">
                // @ts-expect-error TS(2339): Property 'episodes' does not exist on type '{}'.
                {`Episodes: ${anime.episodes ? anime.episodes : 'Not Specified'}`}
              </p>
              <p className="box details--box">
                // @ts-expect-error TS(2339): Property 'duration' does not exist on type '{}'.
                {`Duration: ${anime.duration ? anime.duration : 'Not Specified'}`}
              </p>
              // @ts-expect-error TS(2339): Property 'status' does not exist on type '{}'.
              <p className="box details--box">{`Status: ${anime.status ? anime.status : 'Not Specified'}`}</p>
            </div>
            <div className="synopsis">
              <h3 className="title"> Synopsis </h3>
              // @ts-expect-error TS(2339): Property 'synopsis' does not exist on type '{}'.
              <p className="synopsis">{anime.synopsis}</p>
            </div>
            <div className="more-info">
              <h3 className="title"> More Information </h3>
              // @ts-expect-error TS(2339): Property 'rating' does not exist on type '{}'.
              <p className="box details--box">{`Rating: ${anime.rating ? anime.rating : 'Not Specified'}`}</p>
              // @ts-expect-error TS(2339): Property 'score' does not exist on type '{}'.
              <p className="box details--box">{`Score: ${anime.score}`}</p>
              // @ts-expect-error TS(2339): Property 'season' does not exist on type '{}'.
              <p className="box details--box">{`Season: ${anime.season ? anime.season : 'Not Specified'}`}</p>
            </div>
            <div className="producers">
              <h3 className="title"> Producers </h3>
              <ul className="row genres">
                // @ts-expect-error TS(2339): Property 'producers' does not exist on type '{}'.
                {anime.producers.map((producer: $TSFixMe) => <li key={nanoid()} className="box">{producer.name}</li>)}
              </ul>
            </div>
            <div className="studios">
              <h3 className="title"> Studios </h3>
              <ul className="row genres">
                // @ts-expect-error TS(2339): Property 'studios' does not exist on type '{}'.
                {anime.studios.map((studio: $TSFixMe) => <li key={nanoid()} className="box">{studio.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      // @ts-expect-error TS(2786): 'LoadingPage' cannot be used as a JSX component.
      ) : <LoadingPage />;
};

export default AnimeDetail;