import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    Button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        fontSize: 40,
        borderWidth: 3,
        borderColor: '#303030',
        backgroundColor: '#1a1a1a',
        color: '#f6f6f6',
        textAlign: "center"
    },

    OperationButton: {
        color: '#e84118',
    },

    ButtonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    ButtonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});