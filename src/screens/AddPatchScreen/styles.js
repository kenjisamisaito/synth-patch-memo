import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.mainColor,
    },
    input: {
        height: 40,
    },
    label: {
        color: colors.textColorDark,
    },
    button: {
        color: colors.mainColor,
    },
});

