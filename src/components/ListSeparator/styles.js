import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
    },
    separator: {
        flex: 1,
        flexDirection: 'row',
        height: 1,
        backgroundColor: colors.mainColor,
    },
});
