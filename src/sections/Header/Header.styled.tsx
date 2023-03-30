import styled from '@emotion/styled'

export const Container = styled.header`
  min-height: 100vh;
  padding-top: 44px;
  padding-right: 40px;
  padding-left: 40px;
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
  padding: 24px 0 24px 12px;
  gap: 24px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  height: 72px;
  border: 1px solid #DEDEDE;
  flex-grow: 1;
  
  @media only screen and (min-width: 768px) {
    flex-grow: unset;
    width: 365px;
    padding: 24px;
  }
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

export const Description = styled.p`
  body[dir=ltr] & {
    line-height: 1.5;
  }
`
