import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './dictionaries/ru.json';
import en from './dictionaries/en.json';

const resources = {
  ru: {
    translations: ru,
  },
  en: {
    translations: en,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  resources,
  lng: 'ru',
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
