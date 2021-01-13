import { combineReducers, createStore } from 'redux';
import { dialogsReducer, profileReducer, findUsersReducer } from './reducers';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profile: profileReducer,
    findUsers: findUsersReducer,
});

const store = createStore(reducers);

export default store;
