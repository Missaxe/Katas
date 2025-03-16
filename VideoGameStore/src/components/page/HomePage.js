import React from 'react'
import { TextField } from '@mui/material'
import GameList from '../GameList'
import { fetchGames } from '~/src/api/review'

export default function HomePage () {
  const [games, setGames] = React.useState([])

  React.useEffect(() => {
    fetchGames().then((res) => {
      setGames(res)
    })
  }, [])

  return (
    <div>
      <TextField label='Search Games' variant='outlined' fullWidth />
      <div>No Games Found</div>
      <GameList games={games} />
    </div>
  )
}
