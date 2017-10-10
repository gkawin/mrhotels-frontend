import styled, { css } from 'styled-components'
import { colors, fontSize } from 'mh-design'

const Button = styled.button`
  padding: 10px 20px;
  font-size: ${fontSize.L};
  font-weight: 600;
  width: ${props => props.width || '200px'};
  border: none;
  border-radius: 5px;
  outline: none;
  color: white;
  background: ${props => props.theme.secoundary.main};
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => props.theme.secoundary.dark};
  }
  ${props => props.secoundary && secoundary}
  ${props => props.danger && danger}
`

const secoundary = css`
  border: 1px solid ${props => props.theme.secoundary.main};
  background: white;
  color: ${props => props.theme.secoundary.main};
  &:hover {
    background: ${props => props.theme.secoundary.main};
    color: white;
  }
`

const danger = css`
  border: 1px solid ${props => props.theme.primary.dark};
  background: white;
  color: ${props => props.theme.primary.dark};
  &:hover {
    color: white;
    background: ${props => props.theme.primary.dark};
  }
`

export default Button
