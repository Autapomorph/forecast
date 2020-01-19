declare namespace DarkSkyAPI {
  export default class DarkSky {
    public constructor(apiKey: string);

    public compression(compression: boolean): DarkSky;

    public coordinates(coord: Coordinates): DarkSky;

    public exclude(exclude: string | string[]): DarkSky;

    public extendHourly(extendHourly: boolean): DarkSky;

    public get(): Promise<ResponseObject>;

    public language(language: string): DarkSky;

    public latitude(latitude: number | string): DarkSky;

    public longitude(longitude: number | string): DarkSky;

    public options(options: Options): DarkSky;

    public time(time: string): DarkSky;

    public timeout(ms: number): DarkSky;

    public units(units: string): DarkSky;

    // eslint-disable-next-line no-underscore-dangle
    private _generateReqUrl(): boolean;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static truthyOrZero(value: any): boolean;
  }

  interface Options {
    latitude: number | string;
    longitude: number | string;
    time?: string;
    timeout?: number;
    language?: SupportedLanguage;
    units?: UnitType;
    exclude?: RootField | RootField[];
    extendHourly?: boolean;
    compression?: boolean;
  }

  interface Coordinates {
    lat: number | string;
    lng: number | string;
  }

  interface RequestObject {
    latitude: number;
    longitude: number;
    time?: number | string;
    lang?: SupportedLanguage;
    units?: UnitType;
    exclude?: RootField[];
  }

  interface ResponseObject {
    latitude: number;
    longitude: number;
    timezone: string;
    offset?: number; // deprecated
    currently?: CurrentlyResponse;
    minutely?: DataBlockObject;
    hourly?: HourlyBlockObject;
    daily?: DailyBlockObject;
    alerts?: AlertObject[];
    flags?: FlagsObject;
  }

  interface CurrentlyResponse extends DataPointObject {
    temperature?: number;
    nearestStormBearing?: number;
    nearestStormDistance?: number;
  }

  interface HourlyBlockObject {
    data: HourlyResponse[];
    icon?: Icon;
    summary?: string;
  }

  interface DailyBlockObject {
    data: DailyResponse[];
    icon?: Icon;
    summary?: string;
  }

  interface DataBlockObject {
    data: DataPointObject[];
    icon?: Icon;
    summary?: string;
  }

  interface AlertObject {
    title: string;
    regions: string[];
    severity: Severity;
    time: number;
    expires: number;
    description: string;
    uri: string;
  }

  interface FlagsObject {
    sources: string[];
    units: UnitType;
    'nearest-station': number;
    'darksky-unavailable'?: boolean;
  }

  interface DataPointObject {
    time: number;
    summary?: string;
    icon?: Icon;
    precipIntensity?: number;
    precipProbability?: number;
    precipType?: PrecipType;
    dewPoint?: number;
    humidity?: number;
    pressure?: number;
    windSpeed?: number;
    windGust?: number;
    windBearing?: number;
    cloudCover?: number;
    uvIndex?: number;
    visibility?: number;
    ozone?: number;
  }

  interface HourlyResponse extends DataPointObject {
    apparentTemperature: number;
    precipAccumulation?: number;
    temperature?: number;
  }

  interface DailyResponse extends DataPointObject {
    apparentTemperatureMin?: number;
    apparentTemperatureMinTime?: number;
    apparentTemperatureMax?: number;
    apparentTemperatureMaxTime?: number;
    sunriseTime?: number;
    moonPhase?: number;
    precipAccumulation?: number;
    precipIntensityMax?: number;
    precipIntensityMaxTime?: number;
    sunsetTime?: number;
    temperatureHigh?: number;
    temperatureHighTime?: number;
    temperatureLow?: number;
    temperatureLowTime?: number;
    temperatureMin?: number;
    temperatureMinTime?: number;
    temperatureMax?: number;
    temperatureMaxTime?: number;
    uvIndexTime?: number;
    windGustTime?: number;
  }

  type RootField = 'currently' | 'minutely' | 'hourly' | 'daily' | 'alerts' | 'flags';

  type Severity = 'advisory' | 'watch' | 'warning';

  type PrecipType = 'rain' | 'snow' | 'sleet';

  type UnitType = 'auto' | 'ca' | 'uk2' | 'us' | 'si';

  type Icon =
    | 'clear-day'
    | 'clear-night'
    | 'rain'
    | 'snow'
    | 'sleet'
    | 'wind'
    | 'fog'
    | 'cloudy'
    | 'partly-cloudy-day'
    | 'partly-cloudy-night'
    | 'hail'
    | 'thunderstorm'
    | 'tornado';

  type SupportedLanguage =
    | 'ar' // Arabic
    | 'az' // Azerbaijani
    | 'be' // Belarusian
    | 'bg' // Bulgarian
    | 'bn' // Bengali
    | 'bs' // Bosnian
    | 'ca' // Catalan
    | 'cs' // Czech
    | 'da' // Danish
    | 'de' // German
    | 'el' // Greek
    | 'en' // English (which is the default)
    | 'eo' // Esperanto
    | 'es' // Spanish
    | 'et' // Estonian
    | 'fi' // Finnish
    | 'fr' // French
    | 'he' // Hebrew
    | 'hi' // Hindi
    | 'hr' // Croatian
    | 'hu' // Hungarian
    | 'id' // Indonesian
    | 'is' // Icelandic
    | 'it' // Italian
    | 'ja' // Japanese
    | 'ka' // Georgian
    | 'kn' // Kannada
    | 'ko' // Korean
    | 'kw' // Cornish
    | 'lv' // Latvian
    | 'ml' // Malayam
    | 'mr' // Marathi
    | 'nb' // Norwegian Bokmål
    | 'nl' // Dutch
    | 'no' // Norwegian Bokmål (alias for nb)
    | 'pa' // Punjabi
    | 'pl' // Polish
    | 'pt' // Portuguese
    | 'ro' // Romanian
    | 'ru' // Russian
    | 'sk' // Slovak
    | 'sl' // Slovenian
    | 'sr' // Serbian
    | 'sv' // Swedish
    | 'ta' // Tamil
    | 'te' // Telugu
    | 'tet' // Tetum
    | 'tr' // Turkish
    | 'uk' // Ukrainian
    | 'ur' // Urdu
    | 'x-pig-latin' // Igpay Atinlay
    | 'zh' // simplified Chinese
    | 'zh-tw'; // traditional Chinese
}

declare module 'dark-sky' {
  export = DarkSkyAPI;
}
