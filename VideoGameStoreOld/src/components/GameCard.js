import React from 'react'
import { Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const styles = {
  cardContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}

const GameList = ({ game }) => (
  <Card style={styles.cardContainer}>
    <Link to={`/${game.id}`} style={styles.link}>
      <Typography variant='h5'>{game.title}</Typography>
      <Typography variant='body1'>{game.genre}</Typography>
      <Typography variant='body1'>{game.date}</Typography>
    </Link>
  </Card>
)

export default GameList
