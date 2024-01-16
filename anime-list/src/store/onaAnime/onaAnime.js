import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchOnaAnime, filterAnime: filterAnimeOna, reducer } = generateReducer('onaAnime', 'ona');

export { fetchOnaAnime, filterAnimeOna };

export default reducer;