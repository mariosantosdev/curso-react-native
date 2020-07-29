/*
   Nessa aula só criamos alguns simples quadrados para a aula de flexbox
*/
import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
   const tamanho = props.tamanho || 50

   return (
      <View style={{
         width: tamanho,
         height: tamanho,
         backgroundColor: props.cor || '#000000'
      }} />
   )
}