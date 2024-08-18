import { useTranslation } from "react-i18next";
import { Test1, Test2 } from "../pages";
import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";
import { useMemo } from "react";
import { NOT_FOUND_PATH, ROOT_PATH, TEST_1_PATH, TEST_2_PATH } from "./urlPaths";

const AppRoutes = (): AppRoute[] => {
  const { t } = useTranslation();

  const appRoutes = useMemo(
    () => [
      {
        path: ROOT_PATH,
        element: <Welcome />,
      },
      {
        path: TEST_1_PATH,
        name: t("pages.test-1.routeName"),
        element: <Test1 />,
      },
      {
        path: TEST_2_PATH,
        name: t("pages.test-2.routeName"),
        element: <Test2 />,
      },
      {
        path: NOT_FOUND_PATH,
        element: <PageNotFound />,
      },
    ],
    [t]
  );

  return appRoutes;
};

export default AppRoutes;
