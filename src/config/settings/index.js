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
    pressure: {
      title: 'hPa',
      symbol: 'гПа',
    },
  },
  METRIC: {
    title: 'metric',
    temp: {
      title: 'celsius',
      symbol: '℃',
    },
    pressure: {
      title: 'mmHg',
      symbol: ' мм',
    },
  },
  IMPERIAL: {
    title: 'imperial',
    temp: {
      title: 'fahrenheit',
      symbol: '℉',
    },
    pressure: {
      title: 'inHg',
      symbol: '"',
    },
  },
};

export const defaultUnitsFormat = unitsFormats.METRIC;
