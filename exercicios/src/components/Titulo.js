/*
    Nesta aula é explicado a fragmentação de componentes,
    poder exportar componentes sem precisar usar views
*/

import React from 'react';
import { Text } from 'react-native';

import Style from '../styles/default';

export default (props) => {
    return (
        <React.Fragment>
            <Text style={Style.text20}>{props.primario}</Text>
            <Text style={Style.text15}>{props.secundario}</Text>
        </React.Fragment>
    )
}