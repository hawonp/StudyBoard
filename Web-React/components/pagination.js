import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Pagination} from "@mui/material";
import React from "react";


export default function pagination() {
    return (
        <div className={styles.container}>
            <Head>
                <title>StudyBoard</title>

            </Head>

            <Pagination count={10} variant="outlined" color="primary" />

        </div>
    )
}

