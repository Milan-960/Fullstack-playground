import "./App.css";
import { useTranslation } from "react-i18next";

import { Test } from "./components/Test";
import LanguageSwitcher from "./i18n/LanguageSwitcher";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <LanguageSwitcher />
      <Test />
      <div>
        <h3>This Trans is coming from server and local</h3>
        <p>{t("hello")}</p>
        <p>{t("world")}</p>
        <p>{t("navbar.home")}</p>
        <p>{t("navbar.about")}</p>
      </div>
    </div>
  );
}

export default App;
