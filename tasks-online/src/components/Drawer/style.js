import { StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        alignItems: 'center',
        padding: 10
    },
    infoUser: { marginHorizontal: 10 },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    text: {
        fontFamily: commonStyles.fontRegular,
        fontSize: 18
    },
    name: { color: '#000' },
    email: { fontSize: 15, color: commonStyles.colors.subText },
    logout: { fontSize: 20, fontFamily: commonStyles.fontBold, color: '#F0A01B'},
    logoutContent: { padding: 10, },
});

export default styles