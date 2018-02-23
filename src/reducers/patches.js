import { ADD_PATCH, REMOVE_PATCH, ADD_IMAGE } from '../actions';

/* const initialPatches =
    [
        {
            id: 1,
            name: 'Dreamy1',
            description: 'Sleeping beauty',
            images: [
                'file:///data/user/0/com.synth_patch_memo/files/7ce015ab-2b03-4fea-a287-ac6a1eb7f33c.jpg',
                'file:///data/user/0/com.synth_patch_memo/files/3695ad48-b636-4ada-b5fe-7af2a2cb5d0c.jpg',
            ],
        },
        {
            id: 2,
            name: 'Gloomy1',
            description: 'Darkness in the blindess',
            images: [],
        },
        {
            id: 3,
            name: 'Dirty1',
            description: 'Fuzzy and dizzy',
            images: [],
        },
        {
            id: 4,
            name: 'Dreamy2',
            description: 'Sleeping beauty',
            images: [],
        },
        {
            id: 5,
            name: 'Gloomy2',
            description: 'Darkness in the blindess',
            images: [],
        },
        {
            id: 6,
            name: 'Dirty2',
            description: 'Fuzzy and dizzy',
            images: [],
        },
        {
            id: 7,
            name: 'Dreamy3',
            description: 'Sleeping beauty',
            images: [],
        },
        {
            id: 8,
            name: 'Gloomy3',
            description: 'Darkness in the blindess',
            images: [],
        },
        {
            id: 9,
            name: 'Dirty3',
            description: 'Fuzzy and dizzy',
            images: [],
        },
    ]; */

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

function patches(state = {index: 0}, action) {
    switch (action.type) {
        case ADD_PATCH: {
/*             // Set id
            let index = 0;
            if (state.index !== undefined) {
                index = state.index + 1;
            }

            const {patch} = action;
            patch.id = index;
 */

            if (state.list !== undefined) {
                return {...state, list: state.list.concat(action.patch), index: state.index + 1};
            }
            return {...state, list: [action.patch], index: state.index + 1 };
        }
        case REMOVE_PATCH:
            // return state.filter(patch => patch.id !== action.id);
            break;
        case ADD_IMAGE:
            return {...state, list: updateImagesInArray(state.list, action)};
        default:
            return state;
    }
}

export default patches;

