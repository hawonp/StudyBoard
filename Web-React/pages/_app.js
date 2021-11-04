import '../styles/globals.css'
import '../styles/profileCard.css'
import '../styles/writePost.css'
import AppLayout from '../components/Applayout'

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
