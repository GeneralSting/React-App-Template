import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Typography align="center" p={0.4} variant="h5" id="footer-text">
      <a
        href={t("footer.copyrightLink")}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {t("footer.copyright")}
      </a>{" "}
    </Typography>
  );
};

export default Footer;
