import { combineReducers } from 'redux';

import profileReducer from './Profile/reducer';

export default combineReducers({
    profile: profileReducer,
})