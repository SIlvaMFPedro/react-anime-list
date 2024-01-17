import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import getAnime from "./apiHandling";

const generateReducer = (name, type) => {

    const fetchAnime = createAsyncThunk(
        `${name}/fetchAnime`,
        async () => {
            const response = await getAnime(type);
            return response;
        },
    );

    const initialState = {
        data: [],
        filteredData: [],
        status: 'iddle',
    };

    const filterAnime = createAction(`${name}/filterAnime`);

    const sortAnime = createAction(`${name}/sortAnime`);

    const reducer = createReducer(initialState, (builder) => {
        builder.addCase(fetchAnime.fulfilled, (state, action) => ({
            data: action.payload,
            filteredData: action.payload,
            status: 'completed',
        }));
        builder.addCase(filterAnime, (state, action) => ({
            ...state,
            filteredData: action.payload === 'All' ? state.data: state.data.filter((anime) => {
                // Filter data based on anime genre
                for (let i = 0; i < anime.genres.length; i += 1){
                    const genre = anime.genres[i];
                    if (genre.name === action.payload){
                        return true;
                    }
                }
                return false;
            }),
        }));
        builder.addCase(sortAnime, (state, action) => ({
            ...state,
            filteredData: action.payload === 'All' ? state.data : ( () => {
                const sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1;
                if (action.payload === 'Popular') {
                    return state.data.slice().sort(sortByKey('popularity'));
                }
                else if (action.payload === 'Favorite'){
                    return state.data.slice().sort(sortByKey('favorites'));
                }
                else if (action.payload === 'Score'){
                    return state.data.slice().sort(sortByKey('score'));
                }
                else if (action.payload === 'Episodes'){
                    return state.data.slice().sort(sortByKey('episodes'));
                }
                else {
                    return state.data;
                }
            }),
        }));
    });

    return { sortAnime, filterAnime, fetchAnime, reducer };
};

export default generateReducer;