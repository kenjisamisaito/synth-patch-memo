import React from 'react';
import { Provider } from 'react-redux';
import {StackNavigator} from 'react-navigation';
import store from './store';


import colors from './config/colors';
import SynthsScreen from './screens/SynthsScreen';
import PatchesScreen from './screens/PatchesScreen';
import AddSynthScreen from './screens/AddSynthScreen';
import PatchScreen from './screens/PatchScreen';
import AddPictureScreen from './screens/AddPictureScreen';

const RootNavigator = StackNavigator(
    {
        AddSynth: {
            screen: AddSynthScreen,
            navigationOptions: {
                title: 'Add synth',
            },
        },
        Synths: {
            screen: SynthsScreen,
            navigationOptions: {
                title: 'Synths',
            },
        },
        Patches: {
            screen: PatchesScreen,
            navigationOptions: {
                title: 'Patches',
            },
        },
        Patch: {
            screen: PatchScreen,
            navigationOptions: {
                title: 'Patch',
            },
        },
        AddPicture: {
            screen: AddPictureScreen,
            navigationOptions: {
                title: 'Add picture',
            },
        },
    },
    {
        initialRouteName: 'Synths',
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.mainColor,
            },
        },
    },
);

const App = () => (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
);

export default App;
