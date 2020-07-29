import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Style
import Style from './styles/default';

// Components
import HelloWorld from './components/Hello';
import Core, { Comp1, Comp2 } from './components/MultiComponents';
import MinMax from './components/MaiorMenor';
import Desafio01, {Resposta} from './components/Desafio1';

export default () => {
    // Aula 01 (13) - Primeiro Componente
        // return (
        //     <SafeAreaView>
        //         <HelloWorld />
        //     </SafeAreaView>
        // )

    // Aula 02 (16) - Multi Componentes
        // return(
        //     <SafeAreaView>
        //         <Core />
        //         <Comp1 />
        //         <Comp2 />
        //     </SafeAreaView>
        // )

    // Aula 03 (17) - Estilização
        // return(
        //     <SafeAreaView style={Style.Main}>
        //         <Core />
        //     </SafeAreaView>
        // )

    // Aula 04 (19) - Componente com Maior/Menor
        // return(
        //     <SafeAreaView>
        //         <MinMax menor={5} maior={10} />
        //     </SafeAreaView>
        // )

    // Desafio 01 (20) - Gerar número aleatorio
        // return(
        //     <SafeAreaView>
        //         <Desafio01 min={5} max={15} />
        //     </SafeAreaView>
        // )
    
    return(
        <SafeAreaView>
            <Core />
        </SafeAreaView>
    )
}