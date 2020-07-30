import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default App = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  // Adiciona um novo digito ao display
  AddDigit = d => {
    const clearScreen = displayValue === '0' || clearDisplay // Valida as opções para limpar o display

    if (d === '.' && !clearScreen && displayValue.includes('.')) return // Valida se existe mais de 1 ponto no display

    const currentValue = clearScreen ? '' : displayValue // Armazena o valor atual no display
    const newDisplay = currentValue + d // Concatena o valordo display com o novo digito
    setDisplayValue(newDisplay) // Seta o valor ao display
    setClearDisplay(false) // Seta o limpar o display para false

    if (d !== '.') { // Se o digito NÃO for um ponto
      const newValue = parseFloat(newDisplay) // Armazena os novos valores em um float
      const myValues = [...values] // Clona os valores do estado
      myValues[current] = newValue // Seta um valor na posição atual do array
      setValues(myValues) // Seta os valor para o estado
    }
    //console.warn(values)
  }

  // Limpa a memoria da calculadora
  ClearMemory = () => {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  Operation = operat => {
    if (current === 0) {
      setOperation(operat)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = operat === '='
      const myValues = [...values]

      try {
        myValues[0] = eval(`${myValues[0]} ${operation} ${myValues[1]}`)
      } catch (error) {
        myValues[0] = values[0]
      }

      myValues[1] = 0

      setDisplayValue(`${myValues[0]}`)
      setOperation(equals ? null : operat)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(myValues)
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#e84118" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Display value={displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" onClick={ClearMemory} triple />
          <Button label="/" onClick={Operation} operation />
          <Button label="7" onClick={AddDigit} />
          <Button label="8" onClick={AddDigit} />
          <Button label="9" onClick={AddDigit} />
          <Button label="*" onClick={Operation} operation />
          <Button label="4" onClick={AddDigit} />
          <Button label="5" onClick={AddDigit} />
          <Button label="6" onClick={AddDigit} />
          <Button label="-" onClick={Operation} operation />
          <Button label="1" onClick={AddDigit} />
          <Button label="2" onClick={AddDigit} />
          <Button label="3" onClick={AddDigit} />
          <Button label="+" onClick={Operation} operation />
          <Button label="0" onClick={AddDigit} double />
          <Button label="." onClick={AddDigit} />
          <Button label="=" onClick={Operation} operation />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});