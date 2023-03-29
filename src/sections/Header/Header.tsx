import React from 'react'
import { useTranslation } from 'react-i18next'
import CopyIcon from '../../components/CopyIcon'
import GithubIcon from '../../components/GithubIcon'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import CalendarSection from './components/CalendarSection'
import {
  ChangeLang,
  Container, Description,
  GithubIconWrapper,
  InfoWrapper,
  Installation,
  InstallationText, Link, Menu,
  Nav, Support,
  Title,
  Wrapper
} from './Header.styled'

const installationText:string = 'yarn add zaman'
export const Header = () => {
  const { t, i18n } = useTranslation(['header'])
  const [copy] = useCopyToClipboard()

  const changeLanguage = () => {
    const lng = i18n.language === 'fa' ? 'en' : 'fa'
    i18n.changeLanguage(lng)
      .then(() => {
        document.body.dir = i18n.dir()
      })
  }
  return (
    <Container>
      <Nav>
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
      </Nav>
      <Wrapper>
        <InfoWrapper>
          <Title>
            {t('title')}
          </Title>
          <Installation onClick={() => copy(installationText)}>
            <InstallationText>
              <CopyIcon />
              <p>{installationText}</p>
            </InstallationText>
            <GithubIconWrapper href="https://github.com/rzkhosroshahi/zaman" target="_blank">
              <GithubIcon />
            </GithubIconWrapper>
          </Installation>
          <Description>
            {t('description')}
          </Description>
        </InfoWrapper>
        <CalendarSection key={i18n.language} />
      </Wrapper>
    </Container>
  )
}

export default Header
