import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  width: ${props => props.width || '200px'};
  border: none;
  color: white;
  background: ${props => props.theme.secoundary.main};
  vertical-align: middle;
  cursor: pointer;
`
export default Button
