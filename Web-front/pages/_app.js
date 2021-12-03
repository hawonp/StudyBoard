// MUI imports
import { CssBaseline } from "@mui/material";

// package imports
import { UserProvider } from "@auth0/nextjs-auth0";
import { ReportProvider } from "../contexts/ReportContext";
import AppLayout from "../components/base_layout/AppLayout";

// base app page
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
