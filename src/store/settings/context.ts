import { createContext } from 'react';

import { defaultUnitsFormat } from '../../config/settings/unitsFormats';
import { IUnitsFormatContextProps } from './types';

/* eslint-disable-next-line import/prefer-default-export */
export const UnitsFormatContext = createContext<IUnitsFormatContextProps>({
  currentUnitsFormat: defaultUnitsFormat,
});
