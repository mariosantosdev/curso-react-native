/*
    Este arquivo exporta uma frase dizendo qual valor é referente
    ao parametro maior, e qual valor é referente ao parametro
    menor.
*/
import React from 'react';
import { Text } from 'react-native';

import Style from '../styles/default';

export default MinMax = (props) => (
    <Text style={Style.text20}>O valor {props.maior} é maior que o valor {props.menor}</Text>
);