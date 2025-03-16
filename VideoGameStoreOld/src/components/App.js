import React from 'react'
import { ThemeProvider, CssBaseline, Typography, Container } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import HomePage from '~/src/components/page/HomePage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30
  },
  title: {
    backgroundColor: '#AEAEC8',
    textAlign: 'center',
    color: '#535390',
    fontWeight: 'bold',
    marginBottom: 20,
    borderRadius: 3
  }
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<HomePage />} />
  </Route>
))

const theme = createTheme()

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth='md' style={styles.container}>
      <Typography variant='h4' style={styles.title}>JeuxKulte</Typography>
      <RouterProvider router={router} />
    </Container>
  </ThemeProvider>
)

export default App
