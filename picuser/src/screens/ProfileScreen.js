import React, { useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native'

import { Gravatar } from 'react-native-gravatar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

import { logout, login } from '../store/actions/user.actions'
import { fonts, colors } from '../utils/styles'

const Profile = props => {
    const logout = async () => {
        await props.onLogout()

        props.navigation.navigate('Auth')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Gravatar style={styles.avatar} options={{ email: props.email, secure: true }} />
                </View>
                <View style={styles.headerContent}>
                    <Text style={[styles.text, styles.name]}>{props.name}</Text>
                    <Text style={[styles.text, styles.email]}>{props.email}</Text>
                </View>
                <View style={styles.rightHeader}>
                    <TouchableOpacity onPress={logout}>
                        <Icon name="logout" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.credits}>
                <Text style={[styles.text, styles.creditsText]}>Criado por</Text>
                <View style={styles.containerCredits}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => Linking.openURL('https://github.com/nvrsantos')}>
                            <Icon name="github" size={50} color={colors.text.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => Linking.openURL('https://www.linkedin.com/in/mariosantos-dev/')}>
                            <Icon name="linkedin" size={50} color={colors.text.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => Linking.openURL('https://www.instagram.com/nevr001/')}>
                            <Icon name="instagram" size={50} color={colors.text.secondary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        padding: 10,
    },
    rightHeader: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    leftHeader: {
        marginLeft: 20,
        marginTop: 20,
    },
    headerContent: {
        marginLeft: 20,
        marginTop: 20,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    text: {
        fontFamily: fonts.poppinsBold,
        fontSize: 20
    },
    name: { fontSize: 25 },
    email: { fontSize: 18, color: colors.text.subText },
    creditsText: { fontSize: 30, textAlign: 'center' },
    credits: {
        flex: 1,
        marginTop: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCredits: {
        flexDirection: 'row',
    },
    iconContainer: {
        margin: 10,
    },
    button: {
        backgroundColor: colors.blue.primary,
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        onLogged: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)