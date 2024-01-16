import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchMusicAnime, filterAnime: filterAnimeMusic, reducer } = generateReducer('musicAnime', 'music');

export { fetchMusicAnime, filterAnimeMusic };

export default reducer;