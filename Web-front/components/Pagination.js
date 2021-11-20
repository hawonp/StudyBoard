import Head from 'next/head';
import { Pagination } from '@mui/material';
import React from 'react';

export default function PaginationButton({ maxPageCount }) {
    return (
        <div>
            <Head>
                <title>StudyBoard</title>
            </Head>

            <Pagination count={maxPageCount} color="primary" size="large" />
        </div>
    );
}
