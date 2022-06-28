//import
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

//used to call an i18n to change the languages.
i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "th",
    fallbackLng: "th",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
