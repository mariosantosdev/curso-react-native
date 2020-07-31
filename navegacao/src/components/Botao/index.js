import React from 'react'
import { View, Button } from 'react-native'

export default props => {
    console.log(props.numero)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {props.voltar
                    ? <Button
                        title="Voltar"
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                    : false
                }
                {props.avancar
                    ? <Button
                        title="Avançar"
                        onPress={() => {
                            props.navigation.navigate(props.avancar, props.data)
                        }}
                    />
                    : false
                }
                {props.push
                    ? <Button
                        title="Avançar"
                        onPress={() => {
                            props.navigation.push(props.push,)
                        }}
                    />
                    : false
                }
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
    )
}