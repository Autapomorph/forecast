import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import MainLayout from './components/layouts/Main';
import Loader from './components/common/messages/Loader';
import store, { persistor } from './store';
import './config/settings/i18n';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <MainLayout />
    </PersistGate>
  </Provider>
);

export default App;
