import {localeString} from '../i18n';

export const LocaleString = {
  validators: {
    emailRequired: localeString('validators.emailRequired'),
    passwordRequired: localeString('validators.passwordRequired'),
  },
  placeHolders: {
    email: localeString('placeHolders.email'),
    password: localeString('placeHolders.password'),
  },
  landing: {
    landingScreen: localeString('landing.landingScreen'),
  },
  authLoading: {
    produce: localeString('authLoading.produce'),
    register: localeString('authLoading.register'),
    signIn: localeString('authLoading.signIn'),
  },
  login: {},
};
