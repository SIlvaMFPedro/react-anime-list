import generateReducer from '../utils/reducerGenerator';

const { fetchAnime: fetchTvAnime, filterAnime: filterAnimeTv, sortAnime: sortAnimeTv, reducer } = generateReducer('tvAnime', 'tv');

export { fetchTvAnime, filterAnimeTv, sortAnimeTv };

export default reducer;