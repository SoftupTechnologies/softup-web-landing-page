import i18next from "i18next"

import locales from "../locales/de/translations.json"

import locales0 from "../locales/en/translations.json"

i18next.init({
  fallbackLng: "en",
  resources: {
    de: {
      translations: locales,
    },
    en: {
      translations: locales0,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  // eslint-disable-next-line no-undef
  debug: "development" === process.env.NODE_ENV,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["de", "en"]

export default i18next
