import styled from '@emotion/styled'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
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
export const SupportWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
export const ChangeLang = styled.p`
  font-family: 'Open Sans', -apple-system, serif;
  cursor: pointer;
  color: black;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`
