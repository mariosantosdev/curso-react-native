/*
    Neste desafio será passado para o componente 2 numeros
    e o desafio é gerar um numero aleatorio entre esses 2 valores
    e exibir o valor gerado na tela
*/
import React from 'react';
import { Text } from 'react-native';

import Style from '../styles/default';

export default ({min, max}) => {

    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <Text style={Style.text20}>O valor aleatorio é: {Random(min, max)}</Text>
    );
}


// RESPOSTA DO DESAFIO

export const Resposta = ({min, max}) => {

    const delta = (max - min) + 1;
    const random = parseInt(Math.random() * delta) + min;

    return (
        <Text style={Style.text20}>O valor aleatorio é: {random}</Text>
    );
}