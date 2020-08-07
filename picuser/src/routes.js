import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import NewPostScreen from './screens/NewPostScreen';
import { colors } from './utils/styles';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const LoginOrAuth = () => (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Auth" component={LoginScreen} />
    </Stack.Navigator>
)

const Home = () => (
    <Stack.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Feed" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
)

const Default = props => {
    const onLogged = props.user.email ? "Home" : "Profile"

    return (
        <Tab.Navigator initialRouteName={onLogged} tabBarOptions={{ showLabel: false, activeTintColor: colors.blue.primary, inactiveTintColor: '#334354', tabStyle: { borderTopColor: '#7A8FA6', borderTopWidth: 1 } }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={30} />
                )
            }} />
            <Tab.Screen name="NewPost" component={NewPostScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="camera-plus" color={color} size={30} />
                )
            }} />
            <Tab.Screen name="Profile" component={LoginOrAuth} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="account" color={color} size={30} />
                )
            }} />
        </Tab.Navigator>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Default)