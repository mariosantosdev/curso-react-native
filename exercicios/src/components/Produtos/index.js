/*
    Nesta aula iremos exibir listas de items
*/
import React from 'react';
import { Text, ListView } from 'react-native';

import Style from '../../styles/default';

import produtos from './produtos';

export default (props) => {

    function showList() {
        return produtos.map(p => {
            return <Text style={Style.text20} key={p.id}>{p.nome} - R$ {p.preco}</Text>
        })
    }

    return (
        <>
            <Text style={Style.text32}>Lista de produtos</Text>
            {showList()}
        </>
    )
}