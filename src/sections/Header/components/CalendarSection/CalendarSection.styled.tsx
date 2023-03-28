import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: none;
  position: relative;
  top: 70px;
  
  &:after {
    position: absolute;
    top: -25px;
    left: -25px;
    content: " ";
    display: block;
    width: 370px;
    height: 420px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    z-index: 1;
  }
  
  @media only screen and (min-width: 768px) {
    display: block
  }
`
export const PatternBack = styled.div`
  position: absolute;
  width: 287px;
  height: 273px;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: color;
  background-color: ${props => props.theme.accentColor};
  background-blend-mode: luminosity;
  top: -60px;
  right: -70px;
`
export const PatternBack2 = styled.div`
  position: absolute;
  width: 310px;
  height: 311px;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: color;
  background-color: ${props => props.theme.accentColor};
  background-blend-mode: luminosity;
  bottom: 45px;
  left: -80px;
`
export const MockDatePicker = styled.div`
  width: 320px;
  height: 372px;
  background-color: #fff;
`
