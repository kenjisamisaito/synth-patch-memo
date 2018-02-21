import { ADD_PATCH, REMOVE_PATCH, ADD_IMAGE } from '../actions';


    function updateImagesInArray(array, action) {
        return array.map((item) => {
            if (item.id !== action.id) {
                // Return unchanged.
                return item;
            }
            // Replace the original.
            return {
                ...item,
                images: [...item.images, action.image],
            };
        });
    }

function patches(state = null, action) {
    switch (action.type) {
        case ADD_PATCH:
            return { ...state, ...action.patch};
        case REMOVE_PATCH:
            return state.filter(patch => patch.id !== action.id);
        case ADD_IMAGE:
            return updateImagesInArray(state, action);
        default:
            return state;
    }
}

export default patches;

