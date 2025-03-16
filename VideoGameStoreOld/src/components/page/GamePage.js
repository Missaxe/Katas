import React from 'react'
import { Paper, Typography } from '@mui/material'
import { fetchGame } from '~/src/api/review'

const styles = {
  cardContainer: {
    padding: 10,
    flexGrow: 1
  }
}

export default function GamePage () {
  const [game, setGame] = React.useState({})

  const id = 'fixme'

  React.useEffect(() => {
    fetchGame(id).then((res) => {
      setGame(res)
    })
  }, [])

  return (
    <Paper style={styles.cardContainer}>
      <Typography variant='h5'>{game.title}</Typography>
      <Typography variant='body1'><b>Genre</b> : {game.genre}</Typography>
      <Typography variant='body1'><b>Sortie France</b> : {game.date}</Typography>
      <Typography variant='body1'><b>Description</b>: {game.description}</Typography>
    </Paper>
  )
}
