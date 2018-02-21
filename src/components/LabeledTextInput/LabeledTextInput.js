import React from 'react';

import {View, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '../../config/colors';

const LabeledTextInput = props => (
    <View style={styles.container}>
        <Text style={styles.labelName}>{props.label}</Text>
        <TextInput
          style={styles.inputName}
          autoCorrect={props.autoCorrect}
          autoFocus={props.autoFocus}
          underlineColorAndroid={colors.mainColor}
          selectionColor={colors.mainColor}
        />
    </View>
);

LabeledTextInput.propTypes = {
    autoCorrect: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
};

export default LabeledTextInput;
