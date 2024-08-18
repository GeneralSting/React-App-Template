import { useTranslation } from "react-i18next";

const Test2 = () => {
  const { t } = useTranslation();
  return <h1>{t("pages.test-2.text")}</h1>;
};

export default Test2;
