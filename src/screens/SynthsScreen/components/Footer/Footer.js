import React from 'react';
import {View, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Footer = props => (
    <View style={styles.container}>
        <Button style={styles.button} title="Add synth" onPress={() => props.navigation.navigate('AddSynth')} />
    </View>
);

Footer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default Footer;
