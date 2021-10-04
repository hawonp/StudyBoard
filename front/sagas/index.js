// saga 이펙트이다 all fork take call etc..
// fork 는 비동기 함수 역활 call 은 동기함수 호출
// call이랑 fork 의 차이점은 결과갑을 받아와서 기다려 주느냐 아니냐
import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import postSaga from './post';

// saga가 제너레이터이다
export default function* rootSaga() {
  // all 은 배열안에 한방에 다 실행해준다
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}
