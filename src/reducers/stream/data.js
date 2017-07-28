// @flow
import * as AcionTypes from '../../actions/stream/types'
import { Map, List } from 'immutable'

const initialState = Map({
  items: List(),
})

const stream = (state: Map = initialState, action: Object) => {
  switch (action.type) {
    case AcionTypes.FETCH_STREAM:
      const items = state.get('items')
      return state.set('items', items.push({}))

    default:
      return state
  }
}

export default stream
