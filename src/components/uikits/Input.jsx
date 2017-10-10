import styled from 'styled-components'
import { colors } from 'mh-design'

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 10px 20px 10px 15px;
  line-height: 20px;
  color: ${colors.$grey700};
  :focus {
    border: 2px solid ${props => props.theme.secoundary.main};
  }
  :disabled {
    border: 2px solid ${colors.$grey200};
    background-color: ${colors.$grey100};
    color: ${colors.$grey500};
  }
`

export default Input
