import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return <Typography variant="h3">{t("pages.root.hello")}</Typography>;
};

export default Welcome;
