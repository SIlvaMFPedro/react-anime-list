import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchOvaAnime, filterAnime: filterAnimeOva, reducer } = generateReducer('ovaAnime', 'ova');

export { fetchOvaAnime, filterAnimeOva };

export default reducer;