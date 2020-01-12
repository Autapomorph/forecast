import { createContext } from 'react';

import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { UnitsFormatContext as TUnitsFormatContext } from './types';

// eslint-disable-next-line import/prefer-default-export
export const UnitsFormatContext = createContext<TUnitsFormatContext>(defaultUnitsFormat);
