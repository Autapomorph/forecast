import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { isDev } from 'utils';
import rootReducer from './rootReducer';

const middlewares: Middleware[] = [thunk];
if (isDev) {
  middlewares.push(
    createLogger({
      collapsed: true,
      duration: true,
    }),
  );
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
export default store;
