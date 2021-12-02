import AppLayout from "../components/Applayout";
import { CssBaseline } from "@mui/material";
import { ReportProvider } from "../contexts/ReportContext";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <AppLayout>
        <CssBaseline />
        <ReportProvider>
          <Component {...pageProps} />
        </ReportProvider>
      </AppLayout>
    </UserProvider>
  );
}

export default MyApp;
