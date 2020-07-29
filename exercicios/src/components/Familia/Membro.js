/*
    Nessa aula usamos os childrens de um componente
    utilizando o props.children
*/
import React from 'react';
import { Text } from 'react-native';

import Style from '../../styles/default';

export default ({ nome, sobrenome }) => {
   return (
      <>
         <Text style={Style.text20}>{nome} {sobrenome}</Text>
      </>
   )
}