import "./App.css";
import { useTranslation } from "react-i18next";

import { Test } from "./components/Test";
import LanguageSwitcher from "./i18n/LanguageSwitcher";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Test />
      <LanguageSwitcher />
      <div>
        <h1>{t("hello")}</h1>
        <p>{t("world")}</p>
        <p>{t("navbar.home")}</p>
        <p>{t("navbar.about")}</p>
      </div>
    </div>
  );
}

export default App;
