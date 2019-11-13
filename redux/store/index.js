import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import reducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: true
});

const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const makeConfiguredStore = (reducer, initialState = exampleInitialState) =>
  createStore(reducer, initialState, composedEnhancers);

const exampleInitialState = undefined;

export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
  if (isServer) {
    initialState = initialState || { fromServer: "foo" };

    return makeConfiguredStore(reducer, initialState);
  } else {
    const persistConfig = {
      key: "nextjs",
      storage
    };
    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};
