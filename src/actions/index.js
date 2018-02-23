import RNFS from 'react-native-fs';


// action types
export const ADD_SYNTH = 'ADD_SYNTH';
export const REMOVE_SYNTH = 'REMOVE_SYNTH';
export const SELECT_SYNTH = 'SELECT_SYNTH';

export const ADD_PATCH_TO_SYNTH = 'ADD_PATCH_TO_SYNTH';

export const ADD_PATCH_IMAGE = 'ADD_PATCH_IMAGE';
export const REMOVE_PATCH_IMAGE = 'REMOVE_PATCH_IMAGE';

export const ADD_PATCH = 'ADD_PATCH';
export const REMOVE_PATCH = 'REMOVE_PATCH';

export const SELECT_PATCH = 'SELECT_PATCH';

export const ADD_IMAGE = 'ADD_IMAGES';

export function addSynth(name, description) {
    return ({
        type: ADD_SYNTH,
        synth:
        {
            id: null,
            name,
            description,
            patches: [],
        },
    });
}

export const removeSynth = id => ({
    type: REMOVE_SYNTH,
    id,     
});

export function savePatch(id, name, description) {
    return ({
        type: ADD_PATCH,
        patch: {
            id,
            name,
            description,
            images: [],
        },
    });
}

export function addPatchToSynth(synthId, patchId) {
    return ({
        type: ADD_PATCH_TO_SYNTH,
        synthId,
        patchId,
    });
}

export function addPatch(synthid, patchId, name, description) {
    return function action(dispatch) {
        dispatch(savePatch(patchId, name, description));
        dispatch(addPatchToSynth(synthid, patchId));
    };
}

export function removePatch(id) {
    return {type: REMOVE_PATCH, id};
}

export function selectSynth(id) {
    return {type: SELECT_SYNTH, id};
}

export function selectPatch(id) {
    return {type: SELECT_PATCH, id};
}

export function addImage(id, image) {
    return {type: ADD_IMAGE, id, image};
}

export function addImageError(err) {
    return {type: 'ERROR', error: err};
}

export function saveImage(id, image) {
    return function action(dispatch) {
        const imagePath = 'file://'.concat(RNFS.DocumentDirectoryPath, image.substring(image.lastIndexOf('/')));
        return RNFS.moveFile(image, imagePath).then(
            () => dispatch(addImage(id, imagePath)),
            err => dispatch(addImageError(err)),
        );
    };
}

