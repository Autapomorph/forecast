import { Resource } from 'i18next';

import { Locales } from 'models';
import translationEN from './en/translation.json';
import translationRU from './ru/translation.json';

export const resources: Resource = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

const locales: Locales = {
  en: {
    title: 'English',
    code: 'en-US',
  },
  ru: {
    title: 'Русский',
    code: 'ru-RU',
  },
};

export default locales;
