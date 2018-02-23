import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';
import {addPatch} from '../../actions';

class AddPatchScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
        };
    }

    handleOnPress = (synthId, patchId, name, description) => {
        this.props.onPress(synthId, patchId, name, description);
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
                <Button color={colors.mainColor} title="Save" onPress={() => this.handleOnPress(this.props.synthId, this.props.patchId, this.state.name, this.state.description)} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    patchId: state.patches.index === null ? 0 : state.patches.index,
    synthId: state.ui.selectedSynth,
});


const mapDispatchToProps = dispatch => ({
    onPress: (synthId, patchId, name, description) =>
        dispatch(addPatch(synthId, patchId, name, description)),
});

AddPatchScreen.propTypes = {
    onPress: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
    synthId: PropTypes.number.isRequired,
    patchId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPatchScreen);

