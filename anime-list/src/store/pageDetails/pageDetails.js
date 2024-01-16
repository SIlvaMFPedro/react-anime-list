const CHANGE_CATEGORY = 'anime-list/filtering/CHANCE_CATEGORY';
const CHANGE_FILTER = 'anime-list/filtering/CHANGE_FILTER';
const CHANGE_TYPE = 'anime-list/filtering/CHANGE_TYPE';
const CHANGE_PAGE = 'anime-list/filtering/CHANGE_PAGE';

// Set initial page state details
const initialState = {
    category: 'All',
    filter: 'Top',
    type: 'tvAnime',
    currentPage: 'Home page',
};

const changeCategory = (category) => ({
    type: CHANGE_CATEGORY,
    payload: category,
});

const changeFilter = (filter) => ({
    type: CHANGE_FILTER,
    payload: filter,
});

const changeType = (type) => ({
    type: CHANGE_TYPE,
    payload: type,
})

const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page,
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CATEGORY: {
            return {...state, category: action.payload};
        }
        case CHANGE_FILTER: {
            return {...state, filter: action.payload};
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

export { changeCategory, changeFilter, changeType, changePage };
