// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import RealTime from '../RealTime'
import NotFound from '../NotFound'
import styled from 'styled-components'
import styles from '../../styles'

const MainWrap = styled.main`
  padding-top: ${styles.size.headerHeight};
  padding-left: ${styles.size.sideBarWidth};
`

const Main = () => {
  return (
    <MainWrap>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/real-time" component={RealTime} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainWrap>
  )
}

export default Main
