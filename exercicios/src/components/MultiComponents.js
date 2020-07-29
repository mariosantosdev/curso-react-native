/* 
    Esse arquivo exporta varios componentes de apenas um arquivo
*/
import React from 'react';
import { Text } from 'react-native';
import Style from '../styles/default';

// No import NÃO precisa colocar o mesmo nome do componente que está sendo exportado
export default Comp = () => (
    <Text style={Style.text20}>Componente Core</Text>
)

// No import PRECISA colocar o mesmo nome do componente que está sendo exportado
const Comp1 = () => (
    <Text>Componente #01</Text>
)

// No import PRECISA colocar o mesmo nome do componente que está sendo exportado
const Comp2 = () => (
    <Text>Componente #02</Text>
)

export { Comp1, Comp2 }