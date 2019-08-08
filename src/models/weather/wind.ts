export interface IWindFormat {
  bearing: number;
  speed: number;
  cardDir: string;
  icon: string;
}

// eslint-disable-next-line import/prefer-default-export
export enum WindCardDir {
  N = 'N',
  NNE = 'NNE',
  NE = 'NE',
  ENE = 'ENE',
  E = 'E',
  ESE = 'ESE',
  SE = 'SE',
  SSE = 'SSE',
  S = 'S',
  SSW = 'SSW',
  SW = 'SW',
  WSW = 'WSW',
  W = 'W',
  WNW = 'WNW',
  NW = 'NW',
  NNW = 'NNW',
}
