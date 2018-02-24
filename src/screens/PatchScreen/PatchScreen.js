import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import FitImage from 'react-native-fit-image';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import Footer from '../../components/Footer';


const mapStateToProps = state => ({
    patch: state.patches.list.find(p => p.id === state.ui.selectedPatch),
});


const PatchScreen = props => (
    <View style={styles.container}>
        <View style={styles.container}>

            <FlatList
              style={styles.list}
              data={props.patch.images}
              keyExtractor={item => item.toString()}
              renderItem={({item}) => (
                  <View style={styles.imageContainer}>
                      <FitImage
                        style={styles.image}
                        source={{uri: item, isStatic: true}}
                      />
                  </View>
              )}
              ListHeaderComponent={() => (
                  <View style={styles.header}>
                      <Text style={styles.text}>
                          <Text style={styles.name}>{props.patch.name}</Text>
                          <Text> </Text>
                          {props.patch.description}
                      </Text>
                  </View>
              )}
              ListFooterComponent={() => (<View style={{height: 10}} />)}
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
