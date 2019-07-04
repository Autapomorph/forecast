export interface ILocale {
  title: string;
  code: string;
}

export interface ILocales {
  [language: string]: ILocale;
}
