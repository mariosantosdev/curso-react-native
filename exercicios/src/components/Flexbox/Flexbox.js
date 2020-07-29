/*
   Nessa aula utilizamos pela primeira vez o flexbox
   Vimos o `justifyContent` para definir aonde os items vao 
   se organizar no eixo principal
*/
import React from 'react';
import { View, StyleSheet } from 'react-native';
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
      flexGrow: 1,
      justifyContent: 'space-evenly',
      backgroundColor: '#000'
   }
});