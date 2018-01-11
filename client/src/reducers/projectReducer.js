import { FETCH_PROJECT_BY_ID, ASSIGN_PROJECT_TO_USER } from '../actions/types';

export default function (state = { intial: {} }, action) {
    //console.log('projects reducer: action recieved:======', action);
    switch (action.type) {
        case FETCH_PROJECT_BY_ID:
            return action.payload.data
        case ASSIGN_PROJECT_TO_USER:
            return action.payload.data
        default:
            return state;
    }
}