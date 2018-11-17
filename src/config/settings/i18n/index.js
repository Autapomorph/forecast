import i18n from 'i18next';
import langDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import resources from './locales';

i18n
  .use(langDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: 'en',
    load: 'languageOnly',
    detection: {
      lookupLocalStorage: 'lang',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
