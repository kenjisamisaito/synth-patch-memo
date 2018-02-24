import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.listBackground,
    },
    innerContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: colors.mainColor,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    description: {
        fontSize: 15,
    },
});
