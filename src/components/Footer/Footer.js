import React from 'react';
import {View, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Footer = props => (
    <View style={styles.container}>
        <Button
          style={styles.button}
          title={props.buttonTitle}
          onPress={() => props.navigation.navigate(props.buttonNavigation)}
        />
    </View>
);

Footer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    buttonTitle: PropTypes.string.isRequired,
    buttonNavigation: PropTypes.string.isRequired,
};

export default Footer;
