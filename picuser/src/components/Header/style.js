import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../utils/styles'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        borderRadius: 20
    },
    title: {
        marginLeft: 20,
        color: colors.text.primary,
        fontFamily: fonts.poppinsBold,
        fontSize: 32
    }
});

export default styles