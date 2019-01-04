import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isProd, isDev } from '~/utils';
import rootReducer from './rootReducer';

const composeEnhancers = isProd ? compose : composeWithDevTools;

const middlewares = [thunk];
if (isDev) {
  middlewares.push(
    createLogger({
      collapsed: true,
      duration: true,
    }),
  );
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
export default store;
