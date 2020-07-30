import { StyleSheet } from 'react-native'
import params from '../../utils/params'

const styles = StyleSheet.create({
    field: {
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize
    },

    regular: {
        backgroundColor: '#999',
        borderTopColor: '#CCC',
        borderLeftColor: '#CCC',
        borderBottomColor: '#333',
        borderRightColor: '#333'
    },

    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },

    exploded: {
        backgroundColor: '#E00',
        borderColor: '#A00'
    }
});

export default styles