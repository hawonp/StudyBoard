import Head from 'next/head'
import AppLayout from '../components/Applayout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StudyBoard</title>

      </Head>

      <AppLayout>
        <div>
          <h1>welcome</h1>
        </div>
      </AppLayout>
      
    </div>
  )
}
