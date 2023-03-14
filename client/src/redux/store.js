import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import advertReducer from './advertRedux.js';
import initialState from './initialState.js';
import requestReducer from './requestRedux.js';
import adsRedux from './adsRedux.js';

const subreducers = {
  advertisers: advertReducer,
  request: requestReducer,
  announcements: adsRedux
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