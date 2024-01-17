import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchMovieAnime, filterAnime: filterAnimeMovie, sortAnime: sortAnimeMovie, reducer } = generateReducer('movieAnime', 'movie');

export { fetchMovieAnime, filterAnimeMovie, sortAnimeMovie };

export default reducer;