import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchSpecialAnime, filterAnime: filterAnimeSpecial, reducer } = generateReducer('specialAnime', 'special');

export { fetchSpecialAnime, filterAnimeSpecial };

export default reducer;