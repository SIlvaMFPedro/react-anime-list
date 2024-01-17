import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchOvaAnime, filterAnime: filterAnimeOva, sortAnime: sortAnimeOva, reducer } = generateReducer('ovaAnime', 'ova');

export { fetchOvaAnime, filterAnimeOva, sortAnimeOva };

export default reducer;