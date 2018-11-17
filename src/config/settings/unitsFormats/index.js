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
    speed: {
      title: 'м/с',
      symbol: 'м/с',
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
    speed: {
      title: 'м/с',
      symbol: 'м/с',
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
    speed: {
      title: 'уз',
      symbol: 'уз',
    },
  },
};

export const defaultUnitsFormat = unitsFormats.METRIC;
export const availableUnitsFormats = [unitsFormats.METRIC, unitsFormats.IMPERIAL];
