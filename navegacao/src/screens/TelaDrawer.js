import React from 'react'
import { View, Text, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral fundo='#e17055' cor='#eee'>Tela Especial</TextoCentral>
            </View>
        </View>
    )
}