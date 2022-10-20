import axios from "axios";
import React, { createContext, useState } from "react";

export const AnimeContext = createContext();

const Context = ({ children }) => {
    
    const [index, setIndex] = useState(1);
    const [darkTheme, setDarkTheme] = useState(true);
    const [error, setError] = useState('');

    const fetchAnimeCategories = async (id) => {
        try{
            const { data } = await axios.get(`https://api.jikan.moe/v4/genre/anime?filter=${id}`);
            setIndex(1);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    const fetchTopAnime = async () => {
        try{
            const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing`);
            setIndex(1);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    const fetchTopManga = async () => {
        try{
            const { data } = await axios.get(`https://api.jikan.moe/v4/top/manga?filter=airing`);
            setIndex(1);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    const SearchAnime = async (inputText) => {
        try{
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${inputText}`);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    return (
        <AnimeContext.Provider 
            value={{
                index,
                setIndex,
                darkTheme,
                setDarkTheme,
                fetchAnimeCategories,
                fetchTopAnime,
                fetchTopManga,
                SearchAnime,
                error,
                setError
            }}
        >
            {children}
        </AnimeContext.Provider>
    );
};

export default Context;