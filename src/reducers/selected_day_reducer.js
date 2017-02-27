import { CHOOSE_DAY } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case CHOOSE_DAY:
        return action.payload;
    }
    return state;
}