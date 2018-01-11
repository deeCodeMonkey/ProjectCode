import { FETCH_USER } from '../actions/types';

export default function (state = {}, action) {
    //console.log('auth reducer: action recieved:======', action);
    switch (action.type) {
        case FETCH_USER:
            //false means user not logged in
            return action.payload || false;
        default:
            return state;
    }
}