import React, { useState } from 'react';
import Display from './Display';
import Botoes from './Botoes';

export default (props) => {
    const [num, setNum] = useState(0);

    return (
        <>
            <Display valor={num} />
            <Botoes valor={num} newNum={setNum} />
        </>
    )
}
