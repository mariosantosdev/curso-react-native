/*
    Agora conhecemos os componentes controlados, e o
    basico do ciclo de eventos e UI do TextInput
*/
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Style from '../styles/default';

export default (props) => {
    const [nome, setNome] = useState('')
    return (
        <View style={Style.Main}>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                onChangeText={(text) => setNome(text)}
            />
        </View>
    )
}