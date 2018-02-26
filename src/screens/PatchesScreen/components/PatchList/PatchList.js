import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import Swipeout from 'react-native-swipeout';
import ListItem from '../../../../components/ListItem';
import ListSeparator from '../../../../components/ListSeparator';
import styles from './styles';

class PatchList extends React.PureComponent {
    onSwipeClose = (item, rowId, direction) => {
        if (item.id === this.state.selectedRow && typeof direction !== 'undefined') {
            this.setState({selectedRow: null});
        }
    }

    onSwipeOpen = (item) => {
        this.setState({selectedRow: item.id});
    }

    handleOnPress = (id) => {
        this.props.onSelectPatch(id);
        this.props.navigation.navigate('Patch');
    }

    renderListItem = (item) => {
        const settings = {
            autoClose: true,
            close: this.state.selectedRow !== item.id,
            onClose: (sectionId, rowId, direction) => this.onSwipeClose(item, rowId, direction),
            onOpen: () => this.onSwipeOpen(item),
/*             right: [{
                    onPress: () => this.props.onDeleteItem(item.id),
                    text: 'Delete',
                    backgroundColor: '#ff0000',
                },
            ], */
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
                  data={this.props.patches}
                  renderItem={({item}) => (
                      <ListItem
                        name={item.name}
                        description={item.description}
                        onPressItem={() => this.handleOnPress(item.id)}
                      />)
                  }
                  keyExtractor={item => item.id.toString()}
                  ItemSeparatorComponent={ListSeparator}
                />
            </View>

        );
    }
}

PatchList.propTypes = {
    patches: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    onSelectPatch: PropTypes.func.isRequired,
};

export default PatchList;

