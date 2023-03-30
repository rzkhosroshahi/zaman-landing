import React from 'react'
import { ChangeLang, Link, Menu, Support, Wrapper } from './Nav.styled'
import { useTranslation } from 'react-i18next'

export const Nav = () => {
  const { t, i18n } = useTranslation(['header'])

  const changeLanguage = () => {
    const lng = i18n.language === 'fa' ? 'en' : 'fa'
    i18n.changeLanguage(lng)
      .then(() => {
        document.body.dir = i18n.dir()
      })
  }
  return (
    <Wrapper>
      <Menu>
        <Link href="https://github.com/rzkhosroshahi/zaman">
          {t('docs')}
        </Link>
        <ChangeLang onClick={changeLanguage}>
          {i18n.language === 'fa' ? t('en') : t('fa')}
        </ChangeLang>
      </Menu>
      <Support href="https://zarinp.al/rzkhosroshahi" target="_blank">
        {t('support')}
      </Support>
    </Wrapper>
  )
}

export default Nav
