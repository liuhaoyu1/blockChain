import { call, put, takeLatest } from 'redux-saga/effects';

import * as ActionsTypes from '../redux/actions/actionTypes';

function* member_add({type, payload}) {
    yield put({type: 'SUCCESS_MEMBER_ADD'})
}

export default function* rootSaga() {
    yield takeLatest(ActionsTypes.REQUEST_MEMBER_ADD, member_add)
}