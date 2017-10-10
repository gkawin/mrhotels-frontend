import styled, { css } from 'styled-components'
import { colors, fontSize } from 'mh-design'

const Button = styled.button`
  padding: 10px 20px;
  font-size: ${fontSize.L};
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
  ${props => props.warning && warning}
  ${props => props.danger && danger}
`

const secoundary = css`
  border: 1px solid ${props => props.theme.secoundary.main};
  background: white;
  color: black;
  &:hover {
    background: ${props => props.theme.secoundary.main};
    color: white;
  }
`

const warning = css`
  border: none;
  background: ${colors.$amber500};
  color: black;
  &:hover {
    background: ${colors.$amber300};
  }
`

const danger = css`
  border: none;
  background: ${colors.$red500};
  color: white;
  &:hover {
    background: ${colors.$red900};
  }
`

export default Button
