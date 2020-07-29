/*
    Nessa aula foi criado um contador visual simples para pode usar os estados
    useState
*/

import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

import Style from '../styles/default';

export default ({ inicial = 0 }) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + 1);
    const dec = () => setNumero(numero - 1);

    return (
        <>
            <Text style={Style.text20}>{numero}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button title="+" onPress={inc} />
                <Button title="-" onPress={dec} />
            </View>
        </>
    )
}