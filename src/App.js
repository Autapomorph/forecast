import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import moment from 'moment';
import 'moment/locale/ru';

import store, { persistor } from './store';

import MainLayout from './components/layouts/Main';
import Loader from './components/common/Loader';

moment.locale('ru-RU');

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <MainLayout />
    </PersistGate>
  </Provider>
);

export default App;
