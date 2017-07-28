// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/layout/Header'
import SideBar from './components/layout/SideBar'
import Main from './components/layout/Main'
import './styles'

class App extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  onUpdateHistory() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    // this.context.router.history.listen(history => {
    //   this.onUpdateHistory()
    // })
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Main />
      </div>
    )
  }
}

export default App
