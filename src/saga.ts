import { take, takeEvery, put, call, all, fork } from 'redux-saga/effects';
import { get } from './request';

const github = 'https://api.github.com/users/karuta0825/repos';

function* init() {
  while (true) {
    try {
      yield take('FETCH');
      const { data } = yield call(get, github);
      //      console.log(data);
      yield put({ type: 'FETCHED' });
    } catch (e) {}
  }
}

export default function* rootSagas() {
  yield all([fork(init)]);
}
