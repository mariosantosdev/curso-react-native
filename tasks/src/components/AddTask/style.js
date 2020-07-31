import { StyleSheet } from 'react-native'
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#eee',
    },
    title: {
        fontFamily: commonStyles.fontLight,
        fontSize: 20,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15
    },
    buttonsBar: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        margin: 20,
        marginRight: 30,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#3498db',
        alignItems: 'center'
    },
    buttonText: { color: '#fff', fontSize: 15, fontFamily: commonStyles.fontRegular },
    buttonCancel: { backgroundColor: '#B13B44' },
    buttonSuccess: { backgroundColor: '#3BB144' },
    input: {
        fontFamily: commonStyles.fontRegular,
        width: '90%',
        height: 40,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 6,
    },
});

export default styles