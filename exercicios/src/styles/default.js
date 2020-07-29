/* 
    Esse arquivo exporta a estilização do aplicativo
    mas poderia também ser criado no proprio arquivo do App.js ou do componente
*/
import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Main: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text15: {
        fontSize: 15,
        textAlign: 'center'
    },

    text20: {
        fontSize: 20,
        textAlign: 'center'
    },

    text32: {
        fontSize: 32,
        textAlign: 'center'
    }
});