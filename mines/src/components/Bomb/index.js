import React from 'react'
import { View } from 'react-native'
import styles from './style'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coreBomb} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
        </View>
    )
}