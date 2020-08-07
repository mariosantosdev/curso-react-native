import React from 'react'
import { Text, View, TouchableOpacity as Touch } from 'react-native'
import { Gravatar } from 'react-native-gravatar';
import { connect } from 'react-redux'

import styles from './style'

const Header = props => {
    const email = props.user.email ? props.user.email : 'example@picuser.com'

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.title}>Inicio</Text>
                <Touch onPress={() => props.jumpTo('Profile')} activeOpacity={1}>
                    <Gravatar style={styles.avatar} options={{ email, secure: true }} />
                </Touch>
            </View>
        </View>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Header)