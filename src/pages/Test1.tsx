import { useTranslation } from "react-i18next";

const Test1 = () => {
  const { t } = useTranslation();
  return <h1>{t("pages.test-1.text")}</h1>;
};

export default Test1;
