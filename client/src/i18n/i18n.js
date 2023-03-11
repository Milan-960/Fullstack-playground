import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN } from "./locales/en";
import { FR } from "./locales/fr";

// Load the translations
const loadTranslation = (language) => {
  fetch(`http://localhost:2002/lang/${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Loaded ${language}.json`, data);
      i18n.addResourceBundle(language, "translation", data, true, true);
    })
    .catch((error) => console.error(error));
};

// Load the default language and fallback language translations
loadTranslation("en");
loadTranslation("fr");

console.log("i18n", i18n);

// the resources is used to render trans files EN is the default
const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

// Switch the language
const switchLanguage = (language) => {
  loadTranslation(language); // Load translations for the new language
  i18n.changeLanguage(language);
};

export { i18n, switchLanguage };
