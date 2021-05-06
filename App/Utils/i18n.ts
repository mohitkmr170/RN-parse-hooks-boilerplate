import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../Translations/en.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

/**
 * The method we'll use instead of a regular string
 * ex - string("Welcome {{name}} to our localized app!")
 * @param name: string - A path to the locale string in the JSON file.
 * @param params: object - Parameters we could use in the localized string
 */
export function localeString(name: string, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
