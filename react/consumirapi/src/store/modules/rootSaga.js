import { all } from 'redux-saga/effects';

import exemplo from './example/sagas';

export default function* rootSaga() {
  return yield all([exemplo]);
}
