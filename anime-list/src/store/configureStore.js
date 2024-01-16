import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer as movieAnimeReducer } from './movieAnime/movieAnime';
import { reducer as musicAnimeReducer } from './musicAnime/musicAnime';
import { reducer as onaAnimeReducer } from './onaAnime/onaAnime';
import { reducer as ovaAnimeReducer } from './ovaAnime/ovaAnime';
import { reducer as specialAnimeReducer } from './specialAnime/specialAnime';
import { reducer as tvAnimeReducer } from './tvAnime/tvAnime';
import { reducer as pageDetailsReducer } from './pageDetails/pageDetails';



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