import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import Footer from '../../components/Footer';


const mapStateToProps = state => ({
    patch: state.patches.find(p => p.id === state.ui.selectedPatch),
});


const PatchScreen = props => (
    <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.label}>Patch:</Text>
            <Text style={styles.text}>{props.patch.name}</Text>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.text}>{props.patch.description}</Text>
            <Text style={styles.label}>Images:</Text>
            <FlatList
              data={props.patch.images}
              renderItem={({item}) => (<Image source={{uri: item, isStatic: true}} style={styles.image} resizeMode="cover" />)}
              keyExtractor={item => item.toString()}
              removeClippedSubviews={true}
            />
        </View>
        <Footer navigation={props.navigation} buttonTitle="Add picture" buttonNavigation="AddPicture" />
    </View>
);

PatchScreen.propTypes = {
    patch: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect(mapStateToProps)(PatchScreen);
