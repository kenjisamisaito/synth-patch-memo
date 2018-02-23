import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import Swipeout from 'react-native-swipeout';
import ListItem from '../../../../components/ListItem';
import ListSeparator from '../../../../components/ListSeparator';
import styles from './styles';

// SynthList contains all the synths.
class SynthList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRow: null,
        };
    }


    onSwipeClose = (item, rowId, direction) => {
        if (item.id === this.state.selectedRow && typeof direction !== 'undefined') {
            this.setState({selectedRow: null});
        }
    }

    onSwipeOpen = (item) => {
        this.setState({selectedRow: item.id});
    }

    handleOnPress = (id) => {
        this.props.onSelectSynth(id);
        this.setState({selectedRow: 999});
        this.props.navigation.navigate('Patches');
    }

    renderListItem = (item) => {
        const settings = {
            autoClose: true,
            close: this.state.selectedRow !== item.id,
            onClose: (sectionId, rowId, direction) => this.onSwipeClose(item, rowId, direction),
            onOpen: () => this.onSwipeOpen(item),
            right: [{
                    onPress: () => this.props.onDeleteItem(item.id),
                    text: 'Delete',
                    backgroundColor: '#ff0000',
                },
            ],
            rowId: item.id,
            sectionId: 1,
            // style: {backgroundColor: '#fff'},
        };

        return (
            <Swipeout {...settings} >
                <ListItem
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  onPressItem={() => this.handleOnPress(item.id)}
                />
            </Swipeout>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                  data={this.props.synths}
                  renderItem={item => this.renderListItem(item.item)}
                  extraData={this.state.selectedRow}
                  keyExtractor={item => item.id.toString()}
                  ItemSeparatorComponent={ListSeparator}
                />
            </View>
        );
    }
}

/* const SynthList = props => (
    <FlatList
      data={props.synths}
      renderItem={({item}) => (
          <SynthListItem
            id={item.id}
            name={item.name}
            description={item.description}
            onPressItem={id => onPress(id)}
          />)
        }
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={ListSeparator}
    />
); */

SynthList.propTypes = {
    synths: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    onSelectSynth: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default SynthList;

