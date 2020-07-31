import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Botao from '../components/Botao'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'

const Stack = createStackNavigator()

export default props => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="TelaA">
                {props => (
                    <Botao {...props} avancar="TelaB" data='_001'>
                        <TelaA />
                    </Botao>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaB">
                {props => (
                    <Botao {...props} avancar="TelaC" voltar>
                        <TelaB {...props} />
                    </Botao>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaC">
                {props => (
                    <Botao {...props} push="TelaC">
                        <TelaC {...props} />
                    </Botao>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}