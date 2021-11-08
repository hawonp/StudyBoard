import Head from 'next/head'
import {Pagination} from "@mui/material";
import React from "react";


export default function PaginationButton() {
    return (
        <div>
            <Head>
                <title>StudyBoard</title>

            </Head>

            <Pagination count={10} variant="outlined" color="primary" />

        </div>
    )
}

