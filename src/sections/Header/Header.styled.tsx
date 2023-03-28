import styled from '@emotion/styled'

export const Container = styled.header`
  min-height: 100vh;
  padding-top: 64px;
  padding-right: 40px;
  padding-left: 40px;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
`
export const Link = styled.a`
  color: black;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
`
export const Support = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  padding: 4px 12px;
  background-color: black;
  transition: background-color 0.2s;
  color: white;
  
  &:hover {
    background-color: #333;
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: 130px;
  justify-content: flex-start;

  @media only screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`
export const InfoWrapper = styled.div`
  max-width: 456px;
`
export const Title = styled.h1`
  font-size: 96px;
`
export const Installation = styled.div`
  cursor: pointer;
  direction: ltr;
  display: flex;
  align-items: center;
  gap: 16px;
`
export const InstallationText = styled.div`
  direction: ltr;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 24px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  width: 365px;
  height: 72px;
  border: 1px solid #DEDEDE;
`
export const GithubIconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  background-color: black;
  transition: background-color 0.2s;
  color: white;

  &:hover {
    background-color: #333;
  }
`
export const ChangeLang = styled.p`
  cursor: pointer;
`

export const Description = styled.p`
  body[dir=ltr] & {
    line-height: 1.5;
  }
`
