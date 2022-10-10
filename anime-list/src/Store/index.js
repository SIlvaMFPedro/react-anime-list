import {configureStore} from 'redux';
import REDUX_REDUCER from './reducer';

const store = configureStore(REDUX_REDUCER);

export default store;
