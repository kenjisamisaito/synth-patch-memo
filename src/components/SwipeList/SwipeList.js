import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import Swipeout from 'react-native-swipeout';
import ListItem from '../ListItem';
import ListSeparator from '../ListSeparator';
import styles from './styles';

class SwipeList extends React.Component {
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
        this.props.onSelect(id);
        this.setState({selectedRow: 999});
        this.props.navigation.navigate(this.props.onSelectNavigationRoute);
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
                  data={this.props.items}
                  renderItem={item => this.renderListItem(item.item)}
                  extraData={this.state.selectedRow}
                  keyExtractor={item => item.id.toString()}
                  ItemSeparatorComponent={ListSeparator}
                />
            </View>
        );
    }
}

SwipeList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onSelectNavigationRoute: PropTypes.string.isRequired,
};

export default SwipeList;

