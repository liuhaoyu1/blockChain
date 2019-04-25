import { fork, all } from 'redux-saga/effects';
import HomeSaga from './HomeSaga';

export default function* rootSaga() {
    yield fork(HomeSaga)
}