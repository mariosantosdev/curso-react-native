import { StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        borderColor: '#a4b0be',
        borderBottomWidth: 1,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    desc: {
        color: commonStyles.colors.mainText,
        fontFamily: commonStyles.fontRegular,
        fontSize: 17
    },
    date: {
        color: commonStyles.colors.subText,
        fontFamily: commonStyles.fontRegular,
        fontSize: 13
    },
    checkContainer: { width: '20%', alignItems: 'center', justifyContent: 'center' },
    rightComponent: {
        backgroundColor: '#C00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    leftComponent: {
        flex: 1,
        backgroundColor: '#C00',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    textExclude:{
        fontFamily: commonStyles.fontRegular,
        fontSize: 20,
        color: '#fff',
        margin: 10
    }
});

export default styles