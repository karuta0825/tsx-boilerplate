import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './reducer';
import rootSaga from './saga';

// いや〜そういうことか。はまったわ。危険危険。
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
// export { store };

export function configureStore(initState?: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(counterReducer, initState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
