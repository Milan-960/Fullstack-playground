import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { EN } from "./locales/en.js";
import { FR } from "./locales/fr.js";

const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
};

// here we are loading trans from local server
const addLocalTranslation = (language) => {
  const localTranslations = resources[language].translation;
  i18n.addResourceBundle(
    language,
    "translation",
    localTranslations,
    true,
    true
  );
};

const loadTranslation = async (language) => {
  try {
    // here we are loading trans from nodejs server
    const response = await fetch(`http://localhost:2002/lang/${language}.json`);
    const data = await response.json();
    console.log(`Loaded ${language}.json`, data);
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const initializeI18n = async (language) => {
  try {
    const serverTranslations = await loadTranslation(language);
    i18n.use(initReactI18next).init({
      resources: {
        [language]: {
          translation: serverTranslations,
        },
      },
      lng: language,
      fallbackLng: "en",
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
    });
    addLocalTranslation(language);
  } catch (error) {
    console.error(error);
  }
};

const switchLanguage = async (language) => {
  try {
    const serverTranslations = await loadTranslation(language);
    i18n.changeLanguage(language);
    i18n.addResourceBundle(
      language,
      "translation",
      serverTranslations,
      true,
      true
    );
    if (!resources[language]) {
      const localTranslations = EN;
      const mergedTranslations = {
        ...localTranslations,
        ...serverTranslations,
      };
      resources[language] = { translation: mergedTranslations };
      addLocalTranslation(language);
    } else {
      addLocalTranslation(language);
    }
  } catch (error) {
    console.error(error);
  }
};

initializeI18n("en"); // Load default language from server

export { i18n, switchLanguage };

// //* this the finel code
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import { EN } from "./locales/en.js";
// import { FR } from "./locales/fr.js";

// const resources = {
//   en: {
//     translation: EN,
//   },
//   fr: {
//     translation: FR,
//   },
// };

// const addLocalTranslation = (language) => {
//   const localTranslations = resources[language].translation;
//   i18n.addResourceBundle(
//     language,
//     "translation",
//     localTranslations,
//     true,
//     true
//   );
// };

// const loadTranslation = async (language) => {
//   try {
//     const response = await fetch(`http://localhost:2002/lang/${language}.json`);
//     const data = await response.json();
//     addLocalTranslation(language);
//     console.log(`Loaded ${language}.json`, data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return {};
//   }
// };

// const initializeI18n = async (language) => {
//   try {
//     const serverTranslations = await loadTranslation(language);
//     i18n.use(initReactI18next).init({
//       resources: {
//         [language]: {
//           translation: serverTranslations,
//         },
//       },
//       lng: language,
//       fallbackLng: "en",
//       defaultNS: "translation",
//       interpolation: {
//         escapeValue: false,
//       },
//       returnNull: false,
//     });
//     addLocalTranslation(language);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const switchLanguage = async (language) => {
//   try {
//     const serverTranslations = await loadTranslation(language);
//     i18n.changeLanguage(language);
//     i18n.addResourceBundle(
//       language,
//       "translation",
//       serverTranslations,
//       true,
//       true
//     );
//     if (!resources[language]) {
//       const localTranslations = EN;
//       const mergedTranslations = {
//         ...localTranslations,
//         ...serverTranslations,
//       };
//       resources[language] = { translation: mergedTranslations };
//       addLocalTranslation(language);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// initializeI18n("en"); // Load default language from server

// export { i18n, switchLanguage };
