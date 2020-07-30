import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import params from './src/utils/params'
import { createMinedBoard, cloneBoard, hadExplosion, openField, showMines, wonGame, invertFlag, flagUsed } from './src/services/logic'
import MineField from './src/components/MineField'
import Header from './src/components/Header'

import LevelSelector from './src/screens/LevelSelector'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showModal: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('GAME OVER', 'Você foi DETONADO !')
    }

    if (won) {
      Alert.alert('PARABÉNS', 'Você passou por todo o campo !')
    }

    this.setState({ board, lost, won })
  }

  onFlaggedField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('PARABÉNS', 'Você passou por todo o campo !')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelector
          isVisible={this.state.showModal}
          onLevelSelected={this.onLevelSelected}
          onClose={() => this.setState({ showModal: false })}
        />
        <Header
          sizeScreen={`${params.getRowsAmount()}x${params.getColumnsAmount()}`}
          flagsLeft={this.minesAmount() - flagUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showModal: true })}
        />
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onFlaggedField={this.onFlaggedField} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center"
  },

  board: {
    alignItems: "center",
    backgroundColor: '#AAA'
  }
})