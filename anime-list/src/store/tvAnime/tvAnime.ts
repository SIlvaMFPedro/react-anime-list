import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchTvAnime, filterAnime: filterAnimeTv, reducer } = generateReducer('tvAnime', 'tv');

export { fetchTvAnime, filterAnimeTv };

export default reducer;