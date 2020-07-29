import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from 'react-native';

export default ({ valor, newNum }) => {
    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity
                style={style.buttonAdd}
                onPress={() => newNum(valor + 1)}
            >
                <Text style={{ color: '#fff' }}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonRemove}
                onPress={() => newNum(valor - 1)}
            >
                <Text style={{ color: '#fff' }}>Remover</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    buttonAdd: {
        marginHorizontal: 2,
        padding: 5,
        backgroundColor: 'rgb(0, 100, 0)',
    },

    buttonRemove: {
        marginHorizontal: 2,
        padding: 5,
        backgroundColor: 'rgb(100, 0, 0)',
    }
});