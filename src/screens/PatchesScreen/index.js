import React from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import PatchList from './components/PatchList';
import Footer from '../../components/Footer';
import { selectPatch } from '../../actions';

const getPatchesForTheSelectedSynth = (patchIds, patches) =>
    patches.filter(p => patchIds.includes(p.id));

const mapStateToProps = state => ({
    patches: getPatchesForTheSelectedSynth(state.synths.find(s =>
        s.id === state.ui.selectedSynth).patches, state.patches),
});

const mapDispatchToProps = dispatch => ({
    onSelectPatch: patch => dispatch(selectPatch(patch)),
});

const PatchesScreen = props => (
    <View style={styles.container}>
        <PatchList
          patches={props.patches}
          navigation={props.navigation}
          onSelectPatch={props.onSelectPatch}
        />
        <Footer
          navigation={props.navigation}
          buttonTitle="New Patch"
          buttonNavigation="NewPatch"
        />
    </View>
);

PatchesScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    patches: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectPatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatchesScreen);
