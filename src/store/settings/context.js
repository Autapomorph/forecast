import { createContext } from 'react';

import { defaultUnitsFormat } from '../../config/settings';

/* eslint-disable-next-line import/prefer-default-export */
export const UnitsFormatContext = createContext({
  currentUnitsFormat: defaultUnitsFormat,
});
