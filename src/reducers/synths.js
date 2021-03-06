
import { ADD_SYNTH, ADD_PATCH_TO_SYNTH, REMOVE_SYNTH } from '../actions';


/* Synth object example:
    {
        id: 1,
        name: 'Roland SH101',
        description: 'Bad ass bass machine',
        patches: [1, 2, 3],
    },
*/

function synths(state = {index: 0, list: []}, action) {
    switch (action.type) {
        // addSynth(name, description)
        case ADD_SYNTH: {
            // Set synth id
            let index = 0;
            if (state.index !== undefined) {
                index = state.index + 1;
            }
            const {synth} = action;
            synth.id = index;

            if (state.list !== null) {
                return {...state, list: state.list.concat(synth), index};
            }
            return {...state, list: [action.synth], index };
        }
        // addPatchToSynth(synthId, patchId)
        case ADD_PATCH_TO_SYNTH: {
            const synthList = state.list.map(synth => (
                synth.id === action.synthId ?
                    {...synth, patches: synth.patches.concat(action.patchId)} : synth
                ));
            return {...state, list: synthList};
        }
        // removeSynth(id)
        case REMOVE_SYNTH: {
            const newList = state.list.filter(synth => synth.id !== action.id);
            if (newList) {
                return {...state, list: newList};
            }

            return {...state, list: []};
        }

        default:
            return state;
    }
}

export default synths;

