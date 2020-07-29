import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Style
import Style from './styles/default';

// Components
import HelloWorld from './components/Hello';
import Core, { Comp1, Comp2 } from './components/MultiComponents';
import MinMax from './components/MaiorMenor';
import Desafio01, { Resposta } from './components/Desafio1';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/comunicacao-indireta/Pai';
import Contador2 from './components/ContadorV2';
import Platform from './components/Platform';
import ParImpar from './components/ParImpar';
import Familia from './components/Familia';
import Membro from './components/Familia/Membro';
import Usuario from './components/Usuario';
import Produtos from './components/Produtos';
import Produtos2 from './components/ProdutosV2';
import Input from './components/Input';
import Quadrado from './components/Flexbox/Quadrado';
import Flexbox from './components/Flexbox/Flexbox';
import Flexbox2 from './components/Flexbox/Flexbox2';
import Flexbox3 from './components/Flexbox/Flexbox3';
import Flexbox4 from './components/Flexbox/Flexbox4';
import Mega from './mega-sena';

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
    //     <MinMax menor={5} maior={10} />
    // )

    // Desafio 01 (20) - Gerar número aleatorio
    // return(
    //     <Desafio01 min={5} max={15} />
    // )

    // Aula 05 (23) - React Fragment
    // return(
    // <Titulo primario="Cadastro Produto" secundario="Tela de cadastro do produto" />
    // )

    // Aula 06 (24) - Botões
    // return(
    //     <Botao message="Hello, World" />
    // )

    // Aula 07 (25) - Contador
    // return (
    //     <SafeAreaView style={Style.Main}>
    //         <Contador inicial={100} />
    //     </SafeAreaView>
    // )

    // Aula 08 (28) - Comunicação indireta
    // return(
    //     <SafeAreaView>
    //         <Pai />
    //     </SafeAreaView>
    // )

    // Aula 09 (29) - Contador melhorado
    // return(
    //     <Contador2 />
    // )

    // Aula 10 (30) - Platform
    // return(
    //     <Platform />
    // )

    // Aula 11 (31) - Renderização Condicional
    // return(
    //     <ParImpar num={5}/>
    // )

    // Aula 12 (33) - Props.Children
    // return(
    //     <Familia>
    //         <Membro nome="Mário" sobrenome="Santos" />
    //         <Membro nome="Ana" sobrenome="Flávia" />
    //     </Familia>
    // )

    // Aula 13 (34) - Renderização Condicional #2
    // return(
    //     <Usuario usuario={{nome: 'Mario', email: 'mariodev@nevr001.com'}} />
    // )

    // Aula 14 (35) - Renderização de Lista #01
    // return(
    //     <Produtos />
    // )

    // Aula 15 (36) - Renderização de Lista #02
    // return(
    //     <Produtos2 />
    // )

    // Aula 16 (37) - Componentes Controlados
    // return(
    //     <Input /> 
    // )

    // Aula 17 (40) - Quadrados
    // return(
    //     <SafeAreaView style={Style.Main}>
    //         <Quadrado cor="#A00" />
    //         <Quadrado cor="#0A0" />
    //         <Quadrado cor="#00A" />
    //     </SafeAreaView>
    // )

    // Aula 18 (41) - Flexbox 1
    // return(
    //     <SafeAreaView style={Style.Main}>
    //         <Flexbox />
    //     </SafeAreaView>
    // )

    // Aula 19 (42) - Flexbox 2
    // return(
    //     <SafeAreaView style={Style.Main}>
    //         <Flexbox2 />
    //     </SafeAreaView>
    // )

    // Aula 20 (43) - Flexbox 3
    // return(
    //     <SafeAreaView style={Style.Main}>
    //         <Flexbox3 />
    //     </SafeAreaView>
    // )

    // Aula 21 (44) - Flexbox 4
    // return(
    //     <SafeAreaView style={Style.Main}>
    //         <Flexbox4 />
    //     </SafeAreaView>
    // )

    // Aula 22 (45); 23 (46); 24 (47); 25 (49); 26 (51)  - Metodo render
    return (
        <SafeAreaView style={Style.Main}>
            <Mega numeros={10} />
        </SafeAreaView>
    )
}