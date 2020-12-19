import { combineReducers, createStore } from 'redux';
import { dialogsReducer, profileReducer } from './reducers';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profile: profileReducer,
});

const store = createStore(reducers);

export default store;
