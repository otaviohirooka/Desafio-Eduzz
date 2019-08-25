import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import starWarsReducer from './Reducers';

const state = Redux.combineReducers({
    starWarsReducer: starWarsReducer
 });

const store = Redux.createStore(
    state,
    ReduxDevtools.composeWithDevTools()
);

export default store;