import { useTranslation } from "react-i18next";

export const Visual = ({ description }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center h-screen p-3 w-full py-3">
      <p className="py-2"> {description}</p>

      <h1>{t("text")}</h1>
    </div>
  );
};
