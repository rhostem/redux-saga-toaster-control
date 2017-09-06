// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/layout/Header'
import { MainWidthHeaderSiderBar } from '../components/layout/Main'
import SideBar from '../components/layout/SideBar'
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
    return (
      <div>
        <Header />
        <SideBar />
        <MainWidthHeaderSiderBar>
          <h1>home</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            eligendi corrupti doloribus, ullam rerum praesentium atque eius
            cumque iure odio doloremque, maxime reiciendis voluptatem quasi
            nostrum recusandae hic earum. Reiciendis.
          </p>
        </MainWidthHeaderSiderBar>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  dataList: state.getIn(['data', 'list']),
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