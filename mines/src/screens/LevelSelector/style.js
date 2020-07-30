import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
        width: 150,
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: { backgroundColor: '#090'},
    bgMedium: { backgroundColor: '#009'},
    bgHard: { backgroundColor: '#900'}
});

export default styles