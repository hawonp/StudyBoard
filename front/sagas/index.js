// saga 이펙트이다 all fork take call etc..
//fork 는 비동기 함수 역활 call 은 동기함수 호출
// call이랑 fork 의 차이점은 결과갑을 받아와서 기다려 주느냐 아니냐
import { all, fork, take, call, put } from 'redux-saga/effects'
import axios from 'axios';


function logInAPI(data){
    return axios.post('/api/login', data)
}

function* logIn(action){
    try{
        const result = yield call(logInAPI, action.data)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (e) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: e.response.data,
        })
    }
}

// 로그인아웃 API
function logOutAPI(){
    return axios.post('/api/logout')
}

function* logOut(){
    try{
        const result = yield call(logOutAPI)
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (e) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: e.response.data,
        })
    }
}

function addPostAPI(data){
    return axios.post('/api/post', data)
}

function* addPost(action){
    try{
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (e) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: e.response.data,
        })
    }
}

function* watchLogin(){
    yield take('LOG_IN_REQUEST', logIn);
}
function* watchLogout(){
    yield take('LOG_OUT', logOut);
}
function* watchAddPost(){
    yield take('LOG_POST', addPost);
}

//saga가 제너레이터이다
export default function* rootSaga() {
    //all 은 배열안에 한방에 다 실행해준다
    yield all([
        //fork는 함수를 실행해준다
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost),
    ]);
}