import React from 'react'
import { View, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import styles from './style'

export default props => {
    let view = null
    if(props.comments){
        view = props.comments.map((item, index) => {
            return (
                <View style={styles.commentContainer} key={index}>
                    <Gravatar style={styles.avatar} options={{ email: item.email, secure: true }} />
                    <View style={styles.content}>
                        <Text style={[styles.text, styles.textAuthor]}>{item.author}</Text>
                        <Text style={[styles.text, styles.textComment]}>{item.comment}</Text>
                    </View>
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            {view}
        </View>
    )
}