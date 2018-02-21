import {SELECT_SYNTH, SELECT_PATCH} from '../actions';

const initialState = {
    selectedSynth: null,
    selectedPatch: null,
};

const ui = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SYNTH:
            return { ...state, selectedSynth: action.id};
        case SELECT_PATCH:
            return {...state, selectedPatch: action.id};
        default:
            return state;
    }
};

export default ui;
