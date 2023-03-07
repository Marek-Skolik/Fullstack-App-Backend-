import { combineReducers, legacy_createStore as createStore} from 'redux'
import initialState from './initialState.js';

const reducer = combineReducers({
  });

const store = createStore(
    reducer,
    initialState
);

export default store;