const CHANGE_CATEGORY = 'anime-list/filtering/CHANCE_CATEGORY';
const CHANGE_TYPE = 'anime-list/filtering/CHANGE_TYPE';
const CHANGE_PAGE = 'anime-list/filtering/CHANGE_PAGE';

// Set initial page state details
const initialState = {
    category: 'All',
    type: 'tvAnime',
    currentPage: 'Home page',
};

const changeCategory = (category) => ({
    type: CHANGE_CATEGORY,
    payload: category,
});

const changeType = (type) => ({
    type: CHANGE_TYPE,
    payload: type,
});

const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page,
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CATEGORY: {
            return {...state, category: action.payload};
        }
        case CHANGE_TYPE: {
            return {...state, type: action.payload};
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.payload};
        }
        default:
            return state;
    }
};

export default reducer;

export { changeCategory, changeType, changePage };
