import { createContext } from 'react';

const ModalContext = createContext({
  isOpen: false,
  open: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  close: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

export default ModalContext;
