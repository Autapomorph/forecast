export interface IWindFormat {
  windBearing: number;
  windSpeed: number;
  windCardDir: string | null;
  windIcon: string;
}

export interface IWindFormatShort {
  bearing: number;
  speed: number;
  cardDir: string | null;
  icon: string;
}
