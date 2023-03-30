import React from 'react'
import { useTranslation } from 'react-i18next'
import CopyIcon from '../../components/CopyIcon'
import GithubIcon from '../../components/GithubIcon'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import CalendarSection from './components/CalendarSection'
import Nav from '../../components/Nav'
import {
  Container,
  Wrapper,
  Title,
  Description,
  GithubIconWrapper,
  InfoWrapper,
  Installation,
  InstallationText
} from './Header.styled'

const installationText:string = 'yarn add zaman'
export const Header = () => {
  const { t, i18n } = useTranslation(['header'])
  const [copy] = useCopyToClipboard()

  return (
    <Container>
      <Nav />
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
