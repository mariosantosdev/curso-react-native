import React from 'react'
import { View, Text, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title="Ir Para TelaA"
                    onPress={() => {
                        props.navigation.jumpTo('TelaA')
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral fundo='#fd79a8' cor='#eee'>Tela Especial</TextoCentral>
            </View>
        </View>
    )
}