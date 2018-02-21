/* import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers'; */

/*
const synths =
    [
        {
            id: 1,
            name: 'Roland SH101',
            description: 'Bad ass bass machine',
            patches: [1, 2, 3],
        },
        {
            id: 2,
            name: 'Korg MS-20',
            description: 'Bells and whistles',
            patches: [4, 5, 6],
        },
        {
            id: 3,
            name: 'Korg Polysix',
            description: 'Warmth in a wooden box',
            patches: [7, 8, 9],
        },
        {
            id: 4,
            name: 'Ding dong',
            description: 'Ping pong',
            patches: [7, 8, 9],
        },
    ];

const patches =
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
    ];
 */

/*
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
 */

import * as storage from 'redux-storage';

// Import redux and all your reducers as usual
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import * as reducers from '../reducers';

// We need to wrap the base reducer, as this is the place where the loaded
// state will be injected.
//
// Note: The reducer does nothing special! It just listens for the LOAD
//       action and merge in the provided state :)
// Note: A custom merger function can be passed as second argument
const reducer = storage.reducer(combineReducers(reducers));

// Now it's time to decide which storage engine should be used
//
// Note: The arguments to `createEngine` are different for every engine!

const engine = createEngine('my-save-key');

// And with the engine we can create our middleware function. The middleware
// is responsible for calling `engine.save` with the current state afer
// every dispatched action.
//
// Note: You can provide a list of action types as second argument, those
//       actions will be filtered and WON'T trigger calls to `engine.save`!
const middleware = storage.createMiddleware(engine);

// As everything is prepared, we can go ahead and combine all parts as usual
const createStoreWithMiddleware = applyMiddleware(middleware, logger, thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

// At this stage the whole system is in place and every action will trigger
// a save operation.
//
// BUT (!) an existing old state HAS NOT been restored yet! It's up to you to
// decide when this should happen. Most of the times you can/should do this
// right after the store object has been created.

// To load the previous state we create a loader function with our prepared
// engine. The result is a function that can be used on any store object you
// have at hand :)
const load = storage.createLoader(engine);
load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.
load(store)
    .then(newState => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));
