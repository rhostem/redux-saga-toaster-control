import * as Types from '../../actions/types'
import { delay } from 'redux-saga'
import { all, put, takeLatest } from 'redux-saga/effects'

export function* fetchStream() {
  try {
    const result = yield Promise.resolve('fetch stream result array')
    yield takeLatest(Types.FETCH_STREAM, result)
    yield delay(1000)
    yield put({ type: Types.FETCH_STREAM_SUCCESS })
  } catch (e) {
    yield put({ type: Types.FETCH_STREAM_FAILED, error: e })
  }
}

export default function* stream() {
  yield all([fetchStream()])
}
