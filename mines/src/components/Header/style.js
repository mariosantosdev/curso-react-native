import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    sizeScreen: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    flagContainer: {
        flexDirection: "row"
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 5,
        marginLeft: 20

    },
    button: {
        backgroundColor: '#222',
        padding: 5,
        paddingHorizontal: 9
    },
    buttonLabel: {
        fontSize: 20,
        color: '#F22',
        fontWeight: "bold"
    },
});

export default styles