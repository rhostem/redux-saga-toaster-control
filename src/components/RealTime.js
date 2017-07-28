// @flow
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import * as StreamActions from '../actions/stream'
import { connect } from 'react-redux'
import { Map } from 'immutable'

const Message = ({ match }) =>
  <p>
    <code>
      {JSON.stringify(match)}
    </code>
  </p>

const RealTime = ({ fetchStream }) => {
  return (
    <div>
      <h2>RealTime</h2>
      <div>
        <Link to="/real-time/test">/real-time/param-test</Link>

        <Switch>
          <Route path="/real-time/:id" component={Message} />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state: { stream: Map }, ownProps) => {
  return {
    streamItems: state.stream.data.get('items'),
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  fetchStream: params => {
    dispatch(StreamActions.fetchStream(params))
  },
})

const RealTimeContainer = connect(mapStateToProps, mapDispatchToProps)(RealTime)

export default RealTimeContainer
