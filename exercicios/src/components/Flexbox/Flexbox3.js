/*
   Nessa aula utilizamos pela terceira vez o flexbox
   Vimos o `flexDirection` para definir quais sao os eixos
   e vimos o "baseline" da propriedade `alignItems`
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
   return (
      <View style={style.Flexbox}>
         <Quadrado tamanho={20} cor="#dd22cc" />
         <Quadrado tamanho={30} cor="#8312ed" />
         <Quadrado tamanho={40} cor="#36c9a7" />
         <Quadrado tamanho={50} cor="#5463c9" />
      </View>
   )
}

const style = StyleSheet.create({
   Flexbox: {
      flexDirection: "row",
      alignItems: 'baseline',
      justifyContent: 'space-evenly',
      width: '100%',
      height: 350,
      backgroundColor: '#000'
   }
});