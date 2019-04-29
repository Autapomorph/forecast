import { createContext } from 'react';

import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { IUnitsFormatContext } from './types';

// eslint-disable-next-line import/prefer-default-export
export const UnitsFormatContext = createContext<IUnitsFormatContext>(defaultUnitsFormat);
