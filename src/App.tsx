import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, ThemeProvider } from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useAppSelector } from "./hooks/storeHooks";
import { getTheme } from "./features/themes";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const appTheme = useAppSelector((state) => state.options.appTheme);
  return (
    <>
      <ThemeProvider theme={getTheme(appTheme)}>
        <Grid
          sx={{ minHeight: "100%" }}
          container
          direction="column"
          alignItems="stretch"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
            mb={4}
          >
            <Routes>
              {AppRoutes().map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
