import AppLayout from '../components/Applayout';
import { CssBaseline } from '@mui/material';
import { ReportProvider } from '../contexts/ReportContext';

function MyApp({ Component, pageProps }) {
    return (
        <AppLayout>
            <CssBaseline />
            <ReportProvider>
                <Component {...pageProps} />
            </ReportProvider>
        </AppLayout>
    );
}

export default MyApp;
