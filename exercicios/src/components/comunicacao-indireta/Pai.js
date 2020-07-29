/*
   Aqui faremos uma comunicação indireta que o elemento filho se comunica com o 
   elemento api e vice-versa
*/
import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

import Style from '../../styles/default';

export default (props) => {
    const [num, setNum] = useState();

    function showNumber(number) {
        setNum(number);
    }

    return (
        <>
            <Text style={Style.text20}>{num}</Text>
            <Filho
                min={1}
                max={60}
                funcao={showNumber}
            />
        </>
    )
}