import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import advertReducer from './advertRedux.js';
import initialState from './initialState.js';

const subreducers = {
  advert: advertReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
);

export default store;