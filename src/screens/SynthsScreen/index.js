import React from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import SwipeList from '../../components/SwipeList';
import Footer from '../../components/Footer';
import { selectSynth, removeSynth } from '../../actions';

const mapStateToProps = state => ({
    synths: state.synths.list,
});

const mapDispatchToProps = dispatch => ({
    onSelect: id => dispatch(selectSynth(id)),
    onDeleteItem: item => dispatch(removeSynth(item)),
});

const SynthsScreen = props => (
    <View style={styles.container}>
        <SwipeList
          items={props.synths}
          navigation={props.navigation}
          onSelect={props.onSelect}
          onDeleteItem={props.onDeleteItem}
          onSelectNavigationRoute="Patches"
        />
        <Footer
          navigation={props.navigation}
          buttonTitle="Add synth"
          buttonNavigation="AddSynth"
        />
    </View>
);

SynthsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    synths: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SynthsScreen);
