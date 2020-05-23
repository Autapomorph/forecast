import { useState, useLayoutEffect } from 'react';

const useMode = (): [string, () => void] => {
  const localStorageItem = 'mode';
  const [mode, setMode] = useState('light');

  const saveMode = (themeMode: string): void => {
    window.localStorage.setItem(localStorageItem, themeMode);
    setMode(themeMode);
  };

  useLayoutEffect(() => {
    const savedMode = window.localStorage.getItem(localStorageItem);

    if (savedMode) {
      saveMode(savedMode);
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      saveMode('dark');
    } else {
      saveMode('light');
    }
  }, []);

  const toggleMode = (): void => {
    switch (mode) {
      case 'light': {
        saveMode('dark');
        break;
      }

      case 'dark': {
        saveMode('light');
        break;
      }

      default: {
        saveMode('light');
      }
    }
  };

  return [mode, toggleMode];
};

export default useMode;
