// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as actions from '../actions/name';

type Props = {}
type State = {}

class Home extends React.Component {
  props: Props
  state: State

  static defaultProps = {}

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Home</div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  // name: state.reducer.name,
})

const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators(
    Object.assign(
      {},
      // actions,
    ),
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
