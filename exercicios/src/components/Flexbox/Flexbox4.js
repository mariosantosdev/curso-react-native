/*
   Nessa aula utilizamos pela quarta vez o flexbox
   Vimos o `flexGrow` na pratica, ocupando os tamanhos
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
    return (
        <View style={style.Flexbox}>
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    Flexbox: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },

    V1: {
        backgroundColor: '#dd22cc',
        flexGrow: 1
    },

    V2: {
        backgroundColor: '#36c9a7',
        flexGrow: 1
    }
});