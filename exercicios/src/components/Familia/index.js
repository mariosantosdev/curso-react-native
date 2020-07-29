/*
    Nessa aula usamos os childrens de um componente
    utilizando o props.children
*/
import React from 'react';
import { Text } from 'react-native';

import Style from '../../styles/default';

export default (props) => {
    return (
        <>
            <Text style={Style.text15}>Membros da Família</Text>
            {props.children}
        </>
    )
}