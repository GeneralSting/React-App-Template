import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return <Typography variant="h3">{t("main.hello")}</Typography>;
};

export default Welcome;
