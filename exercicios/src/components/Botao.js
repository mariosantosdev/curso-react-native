/*
    Este turial exporta botoes com funções simples
*/
import React from 'react';
import { Button, View } from 'react-native';

import Style from '../styles/default';

export default (props) => {
    function showWarn() {
        console.warn(props.message);
    }

    return (
        <View style={Style.Main}>
            <Button
                title="Warn"
                color="rgb(255, 100, 0)"
                onPress={showWarn}
            />
            <Button
                title="Error"
                color="rgb(255, 0, 0)"
                onPress={() => console.error(props.message)}
            />
        </View>
    )
}