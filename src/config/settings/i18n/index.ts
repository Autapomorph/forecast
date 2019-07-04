import i18n from 'i18next';
import langDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { ILocale } from 'models';
import removePropByKey from 'utils/common/removePropByKey';
import locales, { resources } from './locales';

i18n
  .use(langDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    load: 'languageOnly',
    detection: {
      lookupLocalStorage: 'locale',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const defaultLanguage: ILocale = locales[i18n.languages[0]];
export const otherLanguages: ILocale[] = Object.values(removePropByKey(locales, i18n.languages[0]));
export const sortedLanguages: ILocale[] = [defaultLanguage, ...otherLanguages];
export { sortedLanguages as availableLanguages };
