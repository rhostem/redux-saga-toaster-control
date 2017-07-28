import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import stream from './stream'

const rootReducer = combineReducers({
  router: routerReducer,
  stream,
})

export default rootReducer
