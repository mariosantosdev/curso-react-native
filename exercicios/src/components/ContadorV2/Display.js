import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default ({ valor }) => {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.texto}>{valor}</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010010'
    },

    texto: {
        textAlign: "center",
        fontSize: 32,
        color: '#fff'
    }
});