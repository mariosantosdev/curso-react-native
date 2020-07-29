/*
    Essa aula explica como podemos renderizar componentes
    com condições (utilizando if) de uma forma simples
*/

import React from 'react';
import { Text } from 'react-native';

import Style from '../styles/default';

export default ({ num = 0 }) => {
    return (
        <>
            <Text style={Style.text15}>O resultado é</Text>
            {num % 2 === 0
                ? <Text style={Style.text20}>Par</Text>
                : <Text style={Style.text20}>Ímpar</Text>
            }
        </>
    )
}