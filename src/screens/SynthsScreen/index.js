import React from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import SynthList from './components/SynthList';
import Footer from './components/Footer';
import { selectSynth, removeSynth } from '../../actions';

const mapStateToProps = state => ({
    synths: state.synths.list,
});

const mapDispatchToProps = dispatch => ({
    onSelectSynth: id => dispatch(selectSynth(id)),
    onDeleteItem: id => dispatch(removeSynth(id)),
});

const SynthsScreen = props => (
    <View style={styles.container}>
        <SynthList
          synths={props.synths}
          navigation={props.navigation}
          onSelectSynth={props.onSelectSynth}
          onDeleteItem={props.onDeleteItem}
        />
        <Footer navigation={props.navigation} />
    </View>
);

SynthsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    synths: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectSynth: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SynthsScreen);
