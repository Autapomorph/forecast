/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from 'i18next';

export interface ILocale extends i18n.ResourceKey {
  title: string;
  code: string;
  translation: Record<string, any>;
}

export interface ILocales extends i18n.Resource {
  [language: string]: ILocale;
}
