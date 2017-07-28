// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import './styles' // inject global style
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import store, { history } from './store'

const withRouteUpdate = WrappedComponent => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return () => {
    scrollToTop()
    return <WrappedComponent />
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={withRouteUpdate(App)} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
