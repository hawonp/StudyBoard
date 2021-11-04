import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@mui/material/Container";
import ProfileCard from "../components/ProfileCard";

export default function Detail() {
    return (
        <div className={styles.container}>
            <Head>
                <title>StudyBoard</title>

            </Head>

            <div style={{display: 'flex'}}>
                <div className={styles.container}>
                    <Container >

                    </Container>
                </div>
            </div>
            <ProfileCard/>
        </div>
    )
}

