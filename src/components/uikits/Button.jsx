import styled, { css } from 'styled-components'
import { colors } from 'mh-design'

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  width: ${props => props.width || '200px'};
  border: none;
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
  background: ${colors.$red900};
  color: white;
  &:hover {
    background: #7f0000;
  }
`

export default Button
