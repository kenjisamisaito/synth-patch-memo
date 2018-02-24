import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    imageContainer: {
        borderColor: colors.mainColor,
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        borderRadius: 20,
    },
    header: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'grey',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    text: {
        fontSize: 15,
        color: 'white',
    },
    list: {
        backgroundColor: colors.listBackground,
    },
});
