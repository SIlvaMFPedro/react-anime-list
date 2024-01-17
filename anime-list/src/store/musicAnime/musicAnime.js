import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchMusicAnime, filterAnime: filterAnimeMusic, sortAnime: sortAnimeMusic, reducer } = generateReducer('musicAnime', 'music');

export { fetchMusicAnime, filterAnimeMusic, sortAnimeMusic };

export default reducer;