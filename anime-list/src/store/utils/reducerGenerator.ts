import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import getAnime from "./apiHandling";

const generateReducer = (name: $TSFixMe, type: $TSFixMe) => {

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

    

    const reducer = createReducer(initialState, (builder) => {
        // @ts-expect-error TS(2769): No overload matches this call.
        builder.addCase(fetchAnime.fulfilled, (state, action) => ({
            data: action.payload,
            filteredData: action.payload,
            status: 'completed',
        }));
        builder.addCase(filterAnime, (state, action) => ({
            ...state,
            filteredData: action.payload === 'All' ? state.data: state.data.filter((anime) => {
                // Filter data based on anime genre
                // @ts-expect-error TS(2339): Property 'genres' does not exist on type 'never'.
                for (let i = 0; i < anime.genres.length; i += 1){
                    // @ts-expect-error TS(2339): Property 'genres' does not exist on type 'never'.
                    const genre = anime.genres[i];
                    if (genre.name === action.payload){
                        return true;
                    }
                }
                return false;
            }),
        }));
        
    });

    return { filterAnime, fetchAnime, reducer };
};

export default generateReducer;