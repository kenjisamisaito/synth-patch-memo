import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from '../../../../components/ListItem';
import ListSeparator from '../../../../components/ListSeparator';

// SynthList contains all the synths.

class SynthList extends React.PureComponent {
    handleOnPress = (id) => {
        this.props.onSelectSynth(id);
        this.props.navigation.navigate('Patches');
    }

    render() {
        return (
            <FlatList
              data={this.props.synths}
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
};

export default SynthList;

