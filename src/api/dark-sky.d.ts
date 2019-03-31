declare module 'dark-sky' {
  interface Options {
    latitude: number | string;
    longitude: number | string;
    time?: string;
    timeout?: number;
    language?: string;
    units?: string;
    exclude?: string | string[];
    extendHourly?: boolean;
    compression?: boolean;
  }

  interface Coordinates {
    lat: number | string;
    lng: number | string;
  }

  export default class DarkSky {
    public constructor(apiKey: string);

    public compression(compression: boolean): DarkSky;

    public coordinates(coord: Coordinates): DarkSky;

    public exclude(exclude: string | string[]): DarkSky;

    public extendHourly(extendHourly: boolean): DarkSky;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public get(): Promise<any>;

    public language(language: string): DarkSky;

    public latitude(latitude: number | string): DarkSky;

    public longitude(longitude: number | string): DarkSky;

    public options(options: Options): DarkSky;

    public time(time: string): DarkSky;

    public timeout(ms: number): DarkSky;

    public units(units: string): DarkSky;

    private _generateReqUrl(): boolean;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static truthyOrZero(value: any): boolean;
  }
}
