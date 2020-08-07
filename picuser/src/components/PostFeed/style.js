import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/styles'

const styles = StyleSheet.create({
    loading: {backgroundColor: '#bbb', color: '#bbb'},
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    text: {
        fontFamily: fonts.poppins,
        color: colors.text.primary,
        fontSize: 18,
    },
    textName: { fontSize: 20 },
    textLocal: { fontSize: 15, color: colors.text.subText },
    textIcons: { color: '#334354', marginLeft: 5 },
    textDesc: { marginTop: 5, marginLeft: 20 },
    icons: { color: '#334354' },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 5,
        borderRadius: 10
    },
    bottom: {
        flexDirection: 'row'
    },
    iconBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 20
    }
});

export default styles