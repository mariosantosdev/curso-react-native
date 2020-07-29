/*
    Nessa aula criamos um componente baseado em classes
    Aula 22 (45) - Vimos o metodo `render` feito para renderizar o JSX
    Aula 23 (46) - Vimos o metodo `this.props` feito para passar parametros para o componente baseado em classe
    Aula 24 (47) - Vimos o metodo `state` feito para passar usar estados em um componente baseado em classe
    Aula 25 (49) - Criamos a funcao para gerar os numeros e inserir no `state`
    Aula 26 (51) - Estilizamos os numeros gerados
*/

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Style from '../styles/default';
import Numero from './Numero';

export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.numeros,
        numeros: []
    }

    gerarNumero = nums => {
        const novo = parseInt(Math.random() * 60 + 1);
        return nums.includes(novo) ? this.gerarNumero : novo;
    }

    gerarNumeros = () => {
        const { qtdeNumeros } = this.state;
        const numeros = [];

        for (let i = 0; i < qtdeNumeros; i++) {
            numeros.push(this.gerarNumero(numeros));
        }
        numeros.sort((a, b) => a - b);

        this.setState({ numeros });
    }

    mostrarNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.text32}>Gerador Mega-Sena</Text>
                <TextInput
                    placeholder="Números para gerar"
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.setState({ qtdeNumeros: +qtde })}
                    keyboardType='numeric'
                    style={{
                        borderBottomWidth: 1,
                        textAlign: "center",
                        margin: 5,
                    }}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.mostrarNumeros()}
                </View>
            </>
        )
    }
}