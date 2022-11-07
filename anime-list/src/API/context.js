import axios from "axios";
import React, { createContext, useState } from "react";

export const AnimeContext = createContext();

const Context = ({ children }) => {
    const [index, setIndex] = useState(1);
    const [darkTheme, setDarkTheme] = useState(true);
    const [error, setError] = useState('');

    const fetchAnimeCategories = async (id) => {
        const { data } = await axios.get(`https://api.jikan.moe/v4/genres/anime?filter=${id}`);
        // console.log(data);
        setIndex(1);
        return data;
    };

    const fetchTopAnime = async () => {
        try {
            const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing`);
            setIndex(1);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    const fetchTopManga = async () => {
        try {
            const { data } = await axios.get(`https://api.jikan.moe/v4/top/manga?filter=airing`);
            setIndex(1);
            return data;
        } catch (error) {
            setError(error);
        }
    };

    const SearchAnime = async (inputText) => {
        try {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${inputText}`);
            // console.log(data.data);
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