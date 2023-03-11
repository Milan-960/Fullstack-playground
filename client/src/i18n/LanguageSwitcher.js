import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}

export default LanguageSwitcher;
