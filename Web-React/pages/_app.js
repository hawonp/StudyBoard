import '../styles/globals.css'
import AppLayout from '../components/Applayout'
import "@fontsource/roboto";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
