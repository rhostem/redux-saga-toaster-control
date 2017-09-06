// @flow
import React /* Component */ from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../../styles'

const Aside = styled.aside`
  position: absolute;
  top: ${styles.size.headerHeight};
  left: 0;
  width: ${styles.size.sideBarWidth};
  min-height: 100vh;
  border-right: 1px solid #ccc;
  padding: 1rem;
`

const MenuList = styled.ul`padding: 0;`

const Menu = styled.li`list-style: none;`

const activeMenuStyle = {
  fontWeight: 'bold',
}

// type SideBarProps = {
// }

const SideBar = () => {
  return (
    <Aside>
      <MenuList>
        <Menu>
          <NavLink exact to="/" activeStyle={activeMenuStyle}>
            Home
          </NavLink>
        </Menu>
      </MenuList>
    </Aside>
  )
}

export default SideBar