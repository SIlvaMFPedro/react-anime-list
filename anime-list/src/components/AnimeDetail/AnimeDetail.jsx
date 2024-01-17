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
        setAnime(result.data);
      }

      async function fetchCharacters() {
        const result = await getAnimeCharactersById(id);
        setCharacters(result.data);
      }

      fetchAnime();
      fetchCharacters();

      dispatch(changePage(title));
    }, [dispatch, id, title]);

    return (
      (anime.title ? (
        <div className="anime--details">
          <div className="anime--info">
            <div className="image--container">
              <img src={anime.images.webp.large_image_url} alt={anime.title} />
            </div>
            <div className="anime--description">
              <h2>{anime.title}</h2>
              <h3>{anime.title_japanese}</h3>
              <ul className="row genres">
                {anime.genres.map((genre) => (
                  <li key={nanoid()} className="box genre-box">{genre.name}</li>
                ))}
              </ul>
              <a href={anime.url} target="_blank" rel="noreferrer">
                <img src={imgUrl} height="28px" width="28px" alt="" title="View at MyAnimeList.net"/>
              </a>
            </div>
          </div>
          <h3 className="title"> Trailer </h3>
          {anime.trailer.embed_url ? (
            <div className="trailer--section">
              <div align="center">
                <iframe
                  id="inLineFrameExample"
                  title="YouTube Video Player"
                  style={{width: 1000, height: 500, border:0}}
                  src={anime.trailer.embed_url.replace('&autoplay=1', '')}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : <p>{'We couldn\'t find any link. Sorry :('}</p>}
          <h3 className="title"> Characters </h3>
          {characters.length > 0 ? (
            <div className="character--section">
              <h1 className="title">Characters</h1>
              <div className="character">
                {characters.map((item) => {
                  return (
                    <div className="character--item" key={item.character.mal_id}>
                      <span>{item.character.name}</span>
                      <div>
                        <img
                          width="150"
                          height="200"
                          src={item.character.images.jpg.image_url}
                          alt=""
                        ></img>
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
                {`Year: ${anime.year ? anime.year : 'Not Specified'}`}
              </p>
              <p className="box details--box">
                {`Episodes: ${anime.episodes ? anime.episodes : 'Not Specified'}`}
              </p>
              <p className="box details--box">
                {`Duration: ${anime.duration ? anime.duration : 'Not Specified'}`}
              </p>
              <p className="box details--box">{`Status: ${anime.status ? anime.status : 'Not Specified'}`}</p>
            </div>
            <div className="synopsis">
              <h3 className="title"> Synopsis </h3>
              <p className="synopsis">{anime.synopsis}</p>
            </div>
            <div className="more-info">
              <h3 className="title"> More Information </h3>
              <p className="box details--box">{`Rating: ${anime.rating ? anime.rating : 'Not Specified'}`}</p>
              <p className="box details--box">{`Score: ${anime.score}`}</p>
              <p className="box details--box">{`Season: ${anime.season ? anime.season : 'Not Specified'}`}</p>
            </div>
            <div className="producers">
              <h3 className="title"> Producers </h3>
              <ul className="row genres">
                {anime.producers.map((producer) => (
                  <li key={nanoid()} className="box">{producer.name}</li>
                ))}
              </ul>
            </div>
            <div className="studios">
              <h3 className="title"> Studios </h3>
              <ul className="row genres">
                {anime.studios.map((studio) => (
                  <li key={nanoid()} className="box">{studio.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : <LoadingPage />
      )
    );
};

export default AnimeDetail;