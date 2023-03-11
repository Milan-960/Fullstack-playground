// import React from "react";
// import { useTranslation } from "react-i18next";

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   function handleLanguageChange(event) {
//     i18n.changeLanguage(event.target.value);
//   }

//   return (
//     <select onChange={handleLanguageChange}>
//       <option value="en">English</option>
//       <option value="fr">Français</option>
//     </select>
//   );
// }

// export default LanguageSwitcher;

// import React from "react";
// import { useTranslation } from "react-i18next";
// import { switchLanguage } from "./i18n";

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   function handleLanguageChange(event) {
//     const lang = event.target.value;
//     switchLanguage(lang);
//     i18n.changeLanguage(lang);
//   }

//   return (
//     <select onChange={handleLanguageChange} value={i18n.language}>
//       <option value="en">English</option>
//       <option value="fr">Français</option>
//     </select>
//   );
// }

// export default LanguageSwitcher;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { switchLanguage } from "./i18n";

function LanguageSwitcher() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = async (language) => {
    await switchLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>{t("English")}</button>
      <button onClick={() => handleLanguageChange("fr")}>{t("French")}</button>
      <p>
        {t("Current language")}: {currentLanguage}
      </p>
    </div>
  );
}

export default LanguageSwitcher;
