/*
    Essa aula é apenas para mostrar o sistema operacional
    que está sendo usado no aplicativo
*/

import React from 'react';
import { Platform, Text } from 'react-native';

import Style from '../styles/default';

export default (props) => {

    if (Platform.OS == 'android') {
        return <Text style={Style.text32}>Android</Text>
    } else if (Platform.OS == 'ios') {
        return <Text style={Style.text32}>IOS</Text>
    } else {
        return <Text style={Style.text32}>Eita !!</Text>
    }
}