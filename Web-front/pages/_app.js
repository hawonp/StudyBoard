// MUI imports
import { CssBaseline } from "@mui/material";

// package imports
import { UserProvider } from "@auth0/nextjs-auth0";
import AppLayout from "../components/base_layout/AppLayout";

// base app page
function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <AppLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </AppLayout>
    </UserProvider>
  );
} // functional component closure

export default MyApp;
