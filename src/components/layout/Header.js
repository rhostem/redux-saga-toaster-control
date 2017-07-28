// @flow
import React from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import styles from '../../styles'

const HeaderBar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${styles.size.headerHeight};
  background-color: #222;
  color: white;
`
const LogoImage = styled.img`
  ${styles.centered.centeredY()} height: ${styles.typography.rhythm(1)};
  margin-left: ${styles.typography.rhythm(1)};
`

const Header = () => {
  return (
    <HeaderBar>
      <LogoImage src={logo} />
    </HeaderBar>
  )
}

export default Header
