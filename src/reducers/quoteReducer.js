import * as type from '../actions/types';

export default function (state = null, action) {
    switch(action.type){
        case type.NEW_QUOTE:
            return action.payload;
        default:   
            return state;
    }
}
