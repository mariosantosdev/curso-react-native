/*
    Nesta aula exibimos produtos de uma lista atraves do componente
    FlatList do proprio react-native
*/
import React from 'react';
import { FlatList, Text } from 'react-native';

import Style from '../../styles/default';
import produtos from './produtos';

export default (props) => {
    return (
        <>
            <Text style={Style.text32}>Lista de produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({ item }) => {
                    return <Text style={Style.text20}>{item.nome} - R$ {item.preco}</Text>
                }}
            />
        </>
    )
}