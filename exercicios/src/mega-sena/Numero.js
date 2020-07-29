import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ num }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>{num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#0A0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    }
});