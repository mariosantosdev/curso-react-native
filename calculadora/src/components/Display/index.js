import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

export default props => {
    return (
        <View style={styles.Display}>
            <Text style={styles.Text} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}