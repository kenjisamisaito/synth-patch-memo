
import { ADD_SYNTH, REMOVE_SYNTH } from '../actions';

function synths(state = null, action) {
    switch (action.type) {
        case ADD_SYNTH:
            // Adds new synth object to the array of synths.
            return state.concat(action.synth);
        case REMOVE_SYNTH:
            // Filters the synth to be removed from the array of synths.
            return state.synths.filter(synth => synth.id !== action.id);
        default:
            return state;
    }
}

export default synths;

