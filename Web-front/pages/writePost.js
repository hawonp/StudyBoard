import Head from 'next/head'
import * as React from 'react';
import {PostCard} from "../components/PostCard";


export default function WritePost() {
    return (
        <div>
            <Head><title>StudyBoard</title></Head>

            <PostCard />

        </div>
    )
}

