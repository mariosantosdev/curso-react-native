import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import Field from '../Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return (
                <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} onFlag={() => props.onFlaggedField(r, c)} />
            )
        })
        return (
            <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>
        )
    })
    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}