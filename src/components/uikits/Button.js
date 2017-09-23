import styled from 'styled-components'
import { colors } from 'mh-design'

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  width: ${props => props.width || '200px'};
  border: none;
  color: white;
  background: ${colors.$blue900};
  vertical-align: middle;
  cursor: pointer;
`
