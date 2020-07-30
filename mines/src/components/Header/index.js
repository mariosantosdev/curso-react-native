import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Flag from '../Flag'
import styles from './style'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.sizeScreen}>{props.sizeScreen}</Text>
            <View style={styles.flagContainer}>
                <TouchableOpacity style={styles.flagButton} onPress={props.onFlagPress}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}