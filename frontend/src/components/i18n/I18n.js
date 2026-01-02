import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello Welcome !",
          logo: "English",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue !",
          logo: "French",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है",
          logo: "Hindi",
        },
      },
    },
  });
//LanguageDetector is the middleware detect swith the language
