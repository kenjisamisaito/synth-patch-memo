import React from 'react';
import {View, Button} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';
import {saveImage} from '../../actions';

class AddPictureScreen extends React.PureComponent {
/*     constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
        };
    } */

    handleOnPress = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.props.saveImage(this.props.patchId, data.uri);
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                  ref={(camera) => { this.camera = camera; }}
                  style={styles.preview}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.off}
                  captureTarget="disk"
                  permissionDialogTitle="Permission to use camera"
                  permissionDialogMessage="We need your permission to use your camera phone"
                />
                <Button color={colors.mainColor} title="Take a pic" onPress={this.handleOnPress} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    patchId: state.ui.selectedPatch,
});

const mapDispatchToProps = dispatch => ({
    saveImage: (id, image) => dispatch(saveImage(id, image)),
});

AddPictureScreen.propTypes = {
    patchId: PropTypes.number.isRequired,
    saveImage: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPictureScreen);

