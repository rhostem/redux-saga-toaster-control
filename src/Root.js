// @flow
import React from 'react'
import AppRoutes from './AppRoutes'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
