import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';
import {addSynth} from '../../actions';

class AddSynthScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
        };
    }

    handleOnPress = (name, description) => {
        this.props.onPress(name, description);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                  onChangeText={value => this.setState({name: value})}
                  style={styles.input}
                  autoCorrect={false}
                  autoFocus={true}
                  underlineColorAndroid={colors.mainColor}
                  selectionColor={colors.mainColor}
                />

                <Text style={styles.label}>Description:</Text>
                <TextInput
                  onChangeText={value => this.setState({description: value})}
                  style={styles.input}
                  autoCorrect={false}
                  underlineColorAndroid={colors.mainColor}
                  selectionColor={colors.mainColor}
                />
                <Button color={colors.mainColor} title="Save" onPress={() => this.handleOnPress(this.state.name, this.state.description)} />
            </View>
        );
    }
}

    const mapDispatchToProps = dispatch => ({
        onPress: (name, description) => dispatch(addSynth(name, description)),
    });

AddSynthScreen.propTypes = {
    onPress: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(null, mapDispatchToProps)(AddSynthScreen);

