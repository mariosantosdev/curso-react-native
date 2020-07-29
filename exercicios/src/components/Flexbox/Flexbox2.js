/*
   Nessa aula utilizamos pela segunda vez o flexbox
   Vimos o `alignItems` para definir aonde os items vao 
   se organizar no eixo cruzado
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
   return (
      <View style={style.Flexbox}>
         <Quadrado cor="#dd22cc" />
         <Quadrado cor="#8312ed" />
         <Quadrado cor="#36c9a7" />
         <Quadrado cor="#5463c9" />
      </View>
   )
}

const style = StyleSheet.create({
   Flexbox: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#000'
   }
});