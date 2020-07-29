import i18next from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import deLocales from "../locales/de/translations.json"

import enLocales from "../locales/en/translations.json"

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    resources: {
      de: {
        translations: deLocales,
      },
      en: {
        translations: enLocales,
      },
    },
    keySeparator: false,
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    // eslint-disable-next-line no-undef
    debug: false,
    react: {
      wait: true,
    },
  })

i18next.languages = ["en", "us"]

export default i18next
