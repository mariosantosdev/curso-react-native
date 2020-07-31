import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/Ionicons'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaTab from '../screens/TelaTab'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'TelaA':
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                            break;
                        case 'TelaB':
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                            break;
                        case 'Especial':
                            iconName = focused ? 'settings' : 'settings-outline';
                            break;
                        default:
                            break;
                    }

                    return <Icons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#2d3436',
                inactiveTintColor: 'rgba(0, 0, 0, 1)',
                labelStyle: { fontSize: 17 },
                tabStyle: {marginTop: 12}
            }}
        >
            <Tab.Screen name="TelaB" options={{title: 'User'}} component={TelaA} />
            <Tab.Screen name="TelaA" options={{title: 'Home'}} component={TelaB} />
            <Tab.Screen name="Especial" options={{title: 'Settings'}} component={TelaTab} />
        </Tab.Navigator>
    )
}
