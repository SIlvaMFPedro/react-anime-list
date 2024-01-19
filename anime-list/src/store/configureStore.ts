import { configureStore } from "@reduxjs/toolkit";

// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from "redux-logger";
import movieAnimeReducer from './movieAnime/movieAnime';
import musicAnimeReducer from './musicAnime/musicAnime';
import onaAnimeReducer  from './onaAnime/onaAnime';
import ovaAnimeReducer  from './ovaAnime/ovaAnime';
import specialAnimeReducer  from './specialAnime/specialAnime';
import tvAnimeReducer  from './tvAnime/tvAnime';
import pageDetailsReducer  from './pageDetails/pageDetails';



const store = configureStore({
    reducer: {
        movieAnime: movieAnimeReducer,
        musicAnime: musicAnimeReducer,
        onaAnime: onaAnimeReducer,
        ovaAnime: ovaAnimeReducer,
        specialAnime: specialAnimeReducer,
        tvAnime: tvAnimeReducer,
        pageDetails: pageDetailsReducer,
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(logger)),
});

export default store;