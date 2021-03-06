import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    separator: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
        backgroundColor: colors.listBackground,
    },
});
