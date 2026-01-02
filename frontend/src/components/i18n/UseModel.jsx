import { useState } from "react";
import { useTranslation } from "react-i18next";

const UseModel = () => {
  const [activeLang, setActiveLang] = useState("English");
  const { t, i18n } = useTranslation();

  const changeButon = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  const buttonClass = (lang) =>
    `px-4 py-2 rounded-md border transition
     ${activeLang === lang ? "bg-red-500 text-white" : "bg-white text-black"}`;

  return (
    <div className="flex gap-3">
      {t("logo")}
      <button className={buttonClass("en")} onClick={() => changeButon("en")}>
        English
      </button>

      <button className={buttonClass("fr")} onClick={() => changeButon("fr")}>
        French
      </button>

      <button className={buttonClass("hi")} onClick={() => changeButon("hi")}>
        Hindi
      </button>

      <h1>{t("greeting")}</h1>
    </div>
  );
};

export default UseModel;
