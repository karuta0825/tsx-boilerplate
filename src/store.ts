import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { counterReducer } from './reducer';

// いや〜そういうことか。はまったわ。危険危険。
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
// export { store };

export function configureStore(initState?: any) {
  const store = createStore(counterReducer, initState, applyMiddleware(thunk));
  return store;
}
