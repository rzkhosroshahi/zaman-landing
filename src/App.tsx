import React from 'react'
import './App.css'
import { Header } from './sections/Header'
import { useTranslation } from 'react-i18next'

function App () {
  const { i18n } = useTranslation()
  document.body.dir = i18n.dir()

  const changeLanguage = () => {
    const lng = i18n.language === 'fa' ? 'en' : 'fa'
    i18n.changeLanguage(lng)
      .then(() => {
        document.body.dir = i18n.dir()
      })
  }

  return (
    <div className="App">
      <button onClick={changeLanguage}>
        {i18n.language}
      </button>
      <Header />
    </div>
  )
}

export default App
