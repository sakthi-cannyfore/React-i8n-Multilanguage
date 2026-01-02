import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello Welcome !",
          logo: "English",
          text: `Artificial Intelligence (AI) enables machines to learn from data, make decisions, and solve problems intelligently.
It is widely used in applications like healthcare, finance, automation, and smart assistants`,
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue !",
          text: `L’intelligence artificielle (IA) permet aux machines d’apprendre à partir des données, de prendre des décisions et de résoudre des problèmes intelligemment.
Elle est largement utilisée dans des domaines comme la santé, la finance, l’automatisation et les assistants intelligents.`,
          logo: "French",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है",
          logo: "Hindi",
          text: `कृत्रिम बुद्धिमत्ता (AI) मशीनों को डेटा से सीखने, निर्णय लेने और समस्याओं को समझदारी से हल करने में सक्षम बनाती है।
इसका उपयोग स्वास्थ्य, वित्त, स्वचालन और स्मार्ट सहायक जैसे क्षेत्रों में किया जाता है।`,
        },
      },
    },
  });
//LanguageDetector is the middleware detect swith the language
