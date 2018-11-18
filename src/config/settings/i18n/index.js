import i18n from 'i18next';
import langDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import resources from './locales';
import removePropByKey from '../../../utils/common/removePropByKey';

i18n
  .use(langDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    // lng: 'en',
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

export const defaultLanguage = resources[i18n.languages[0]];
export const otherLanguages = Object.values(removePropByKey(resources, i18n.languages[0]));
export const sortedLanguages = [defaultLanguage, ...otherLanguages];
export { sortedLanguages as availableLanguages };
