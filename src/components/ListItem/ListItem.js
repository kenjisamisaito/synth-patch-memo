import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = props => (
    <TouchableOpacity onPress={props.onPressItem}>
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    </TouchableOpacity>
);

ListItem.propTypes = {
    onPressItem: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ListItem;
