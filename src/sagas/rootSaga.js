import { all } from 'redux-saga/effects'
import stream from './stream'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([stream()])
}
