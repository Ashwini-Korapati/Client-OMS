
import { createStore } from 'redux';
import jobReducer from '../Redux/Reducers'

const store = createStore(jobReducer);

export default store;
