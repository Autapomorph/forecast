import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/macro';

import MainLayout from 'components/layouts/Main';
import Loader from 'components/common/messages/Loader';
import store, { persistor } from 'store';
import ToggleModeContext from 'context/toggleMode';
import ModalContext from 'context/settingsModal';
import useMode from 'utils/hooks/useMode';
import Helmet from './Helmet';
import 'config/i18n';

import { GlobalStyles } from './styles';
import { light, dark } from './config/themes';

const App = (): React.ReactElement => {
  const [mode, toggleMode] = useMode();
  const theme = mode === 'dark' ? dark : light;

  const [isOpen, setIsOpen] = useState(false);
  const modalContext = { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ToggleModeContext.Provider value={toggleMode}>
            <Helmet />
            <GlobalStyles />
            <ModalContext.Provider value={modalContext}>
              <MainLayout />
            </ModalContext.Provider>
          </ToggleModeContext.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
