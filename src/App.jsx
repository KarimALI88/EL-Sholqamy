import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Switch language
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // Set text direction
  };

  return (
    <div className="container">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
    </div>
  );
}

export default App;
