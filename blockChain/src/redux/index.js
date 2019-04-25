import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

export default store;
