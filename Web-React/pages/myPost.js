import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function MyPost() {
    return (
        <div className={styles.container}>
            <Head>
                <title>StudyBoard</title>

            </Head>

            My Post
        </div>
    )
}

