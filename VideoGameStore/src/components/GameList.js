import React from 'react'
import { Paper } from '@mui/material'
import GameCard from './GameCard'

const styles = {
  gameContainer: {
    marginTop: 10,
    padding: 5
  }
}

const GameList = ({ games }) => (
  <Paper elevation={3} style={styles.gameContainer}>
    {games.map((game, key) => <GameCard key={key} game={game} />)}
  </Paper>
)

export default GameList
