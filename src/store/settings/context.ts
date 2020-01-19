import { createContext } from 'react';

import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { UnitsFormatContext as TUnitsFormatContext } from './types';

export const UnitsFormatContext = createContext<TUnitsFormatContext>(defaultUnitsFormat);
