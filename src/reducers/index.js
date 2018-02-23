import { combineReducers } from 'redux';
import synths from './synths';
import patches from './patches';
import ui from './ui';
// import addSynthReducer from '../screens/AddSynthScreen/reducer';

// This is the place to combine all the reducers of
// all the screens.

const mainReducer = combineReducers({
    synths,
    patches,
    ui,
});


export default mainReducer;
