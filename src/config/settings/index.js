export const languages = {
  EN: 'en',
  RU: 'ru',
};

export const defaultLanguage = languages.RU;

export const unitsFormats = {
  STANDART: {
    title: 'standart',
    temp: {
      title: 'kelvin;',
      symbol: 'K',
    },
  },
  METRIC: {
    title: 'metric',
    temp: {
      title: 'celsius',
      symbol: '℃',
    },
  },
  IMPERIAL: {
    title: 'imperial',
    temp: {
      title: 'fahrenheit',
      symbol: '℉',
    },
  },
};

export const defaultUnitsFormat = unitsFormats.METRIC;
