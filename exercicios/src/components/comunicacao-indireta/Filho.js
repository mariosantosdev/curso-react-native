/*
   Aqui faremos uma comunicação indireta que o elemento filho se comunica com o 
   elemento api e vice-versa
*/
import React from 'react';
import { Button } from 'react-native';


export default (props) => {

   function randomNumber(min, max) {
      const delta = (max - min) + 1;
      return parseInt(Math.random() * delta) + min;
   }

   return (
      <>
         <Button
            title="Executar"
            onPress={() => {
               const n = randomNumber(props.min, props.max);
               props.funcao(n);
            }}
         />
      </>
   )
}