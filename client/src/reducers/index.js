import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    //state keyword: to maintain state by reducer
    auth: authReducer,
    //from redux-form
    form: formReducer,
    profile: profileReducer,
    openProject: projectReducer
});