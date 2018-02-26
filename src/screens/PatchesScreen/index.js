import React from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import SwipeList from '../../components/SwipeList';
import Footer from '../../components/Footer';
import { selectPatch, removePatch } from '../../actions';

const getPatchesForTheSelectedSynth = (patchIds, patches) => {
    if (patchIds !== undefined && patches !== undefined) {
        return patches.filter(p => patchIds.includes(p.id));
    }
    return [];
};

const mapStateToProps = state => ({
    patches: getPatchesForTheSelectedSynth(state.synths.list.find(s =>
        s.id === state.ui.selectedSynth).patches, state.patches.list),
});

const mapDispatchToProps = dispatch => ({
    onSelect: id => dispatch(selectPatch(id)),
    onDeleteItem: id => dispatch(removePatch(id)),
});

const PatchesScreen = props => (
    <View style={styles.container}>
        <SwipeList
          items={props.patches}
          navigation={props.navigation}
          onSelect={props.onSelect}
          onDeleteItem={props.onDeleteItem}
          onSelectNavigationRoute="Patch"
        />

        <Footer
          navigation={props.navigation}
          buttonTitle="Add patch"
          buttonNavigation="AddPatch"
        />
    </View>
);

PatchesScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    patches: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatchesScreen);
