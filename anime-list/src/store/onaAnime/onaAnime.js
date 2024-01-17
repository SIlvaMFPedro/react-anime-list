import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchOnaAnime, filterAnime: filterAnimeOna, sortAnime: sortAnimeOna, reducer } = generateReducer('onaAnime', 'ona');

export { fetchOnaAnime, filterAnimeOna, sortAnimeOna};

export default reducer;