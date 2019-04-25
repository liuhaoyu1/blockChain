import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as ActionsTypes from '../redux/actions/actionTypes';

function* memberAdd({type, payload}) {
    console.log('payload',payload)
    yield put({type: ActionsTypes.SUCCESS_MEMBER_ADD,payload})
}


function* rootSaga() {
    yield takeLatest(ActionsTypes.REQUEST_MEMBER_ADD, memberAdd);
}

export default rootSaga;