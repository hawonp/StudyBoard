import {all, fork, call, put, throttle, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import {
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE, ADD_POST_REQUEST,  ADD_POST_SUCCESS,
} from '../reducers/post';


//addpost
function addPostAPI(data){
    return axios.post('/api/post', data)
}

function* addPost(action){
    try{
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
    } catch (e) {
        yield put({
            type: ADD_POST_FAILURE,
            data: e.response.data,
        })
    }
}

//커맨트
function addCommentAPI(data){
    return axios.post(`/api/post/${data.postId}/comment`, data)
}

function* addComment(action){
    try{
        const result = yield call(addCommentAPI, action.data)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        });
    } catch (e) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: e.response.data,
        })
    }
}

function* watchAddPost(){
    //몇초제안 하는거 throttle 2초 보안으로
    yield throttle(ADD_POST_REQUEST, addPost, 20000);
}

function* watchAddComment(){
    //몇초제안 하는거 throttle 2초 보안으로
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ])
}