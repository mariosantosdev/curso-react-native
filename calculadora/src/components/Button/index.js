import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import styles from './style';

export default props => {
    const styleButton = [styles.Button]
    if (props.double) styleButton.push(styles.ButtonDouble)
    if (props.triple) styleButton.push(styles.ButtonTriple)
    if (props.operation) styleButton.push(styles.OperationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}