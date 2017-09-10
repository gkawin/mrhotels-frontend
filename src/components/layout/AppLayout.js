import styled from 'styled-components'

const font = {
  size: {
    base: '16px'
  }
}

export const TopNav = styled.div`

`

export default styled.section`
  position: absolute;
  top: ${props => props.topbar ? props.topbar.height : 0};
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${font.size.base}
  ${props => props.background && `
    background-color: ${props.background};
  `}
`
