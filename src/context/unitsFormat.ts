import { createContext } from 'react';

import { defaultUnitsFormat } from 'config/unitsFormats';
import { UnitsFormatContext as TUnitsFormatContext } from 'store/settings/types/unitsFormat';

const UnitsFormatContext = createContext<TUnitsFormatContext>(defaultUnitsFormat);

export default UnitsFormatContext;
