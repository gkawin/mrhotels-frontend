import styled from 'styled-components'

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
    background: ${props => props.theme.primary.main};
  }
`
export default Button
