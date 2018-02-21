import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from '../../../../components/ListItem';
import ListSeparator from '../../../../components/ListSeparator';

// SynthList contains all the synths.


class PatchList extends React.PureComponent {
    handleOnPress = (id) => {
        this.props.onSelectPatch(id);
        this.props.navigation.navigate('Patch');
    }

    render() {
        return (
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

