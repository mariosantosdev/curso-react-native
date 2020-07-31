import React from 'react'
import { View, Text } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const param = props.route.params || ''
    return (
        <TextoCentral fundo='#6c5ce7' cor='#eee'>Tela B {param}</TextoCentral>
    )
}