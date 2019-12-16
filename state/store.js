import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './root-saga';

const exampleInitialState = undefined;

export function makeStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';
  let store;

  if (isClient) {
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}
