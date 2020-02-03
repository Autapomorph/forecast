import { createContext } from 'react';

import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { UnitsFormatContext as TUnitsFormatContext } from './types/unitsFormat';

export const UnitsFormatContext = createContext<TUnitsFormatContext>(defaultUnitsFormat);
