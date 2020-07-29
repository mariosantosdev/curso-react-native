/*
    Neste exemplo fazemos um outro tipo de renderização condicional
    verificamos se o campos usuario está sendo utilizado, se não 
    ele não exibe nenhum campo
*/
import React from 'react';
import { Text } from 'react-native';

import Style from '../styles/default';
import If from './If';

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text style={Style.text20}>Nome: {usuario.nome}</Text>
                <Text style={Style.text20}>Email: {usuario.email}</Text>
            </If>
        </>
    )
}