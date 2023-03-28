import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fa from './translations/fa'
import en from './translations/en'

const iranTimeZone: boolean = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Tehran'
const defaultLang = iranTimeZone ? 'fa' : 'en'
const lng = localStorage.getItem('i18nextLng') || defaultLang

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fa,
      en
    },
    lng,
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false
    }
  })
