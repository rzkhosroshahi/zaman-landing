import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '@emotion/react'
import Header from './sections/Header'
import './App.css'

function App () {
  const { i18n } = useTranslation()
  document.body.dir = i18n.dir()

  const theme = {
    accentColor: '#0F62FE'
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
