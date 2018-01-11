import { SUBMIT_PROFILE, FETCH_PROFILE, FETCH_USER_PROJECTS } from '../actions/types';

export default function (state = {intial: ""}, action) {
    //console.log('profile reducer: action recieved:======', action);
    switch (action.type) {
        case SUBMIT_PROFILE:
            return action.payload.data
        case FETCH_PROFILE:
            return action.payload.data 
        case FETCH_USER_PROJECTS:
            return action.payload.data 
        default:
            return state;
    }
}