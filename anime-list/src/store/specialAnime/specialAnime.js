import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchSpecialAnime, filterAnime: filterAnimeSpecial, sortAnime: sortAnimeSpecial, reducer } = generateReducer('specialAnime', 'special');

export { fetchSpecialAnime, filterAnimeSpecial, sortAnimeSpecial };

export default reducer;