/* import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers'; */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import mainReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = createStore(persistedReducer, undefined, applyMiddleware(logger, thunk));
export const persistor = persistStore(store);

