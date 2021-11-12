import AppLayout from "../components/Applayout";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <CssBaseline />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
