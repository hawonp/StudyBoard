import Head from 'next/head'
import * as React from "react";
import AdminNav from "../../components/AdminNav";
import AdminRepliesList from "../../components/AdminRepliesList";


export default function FlagReplies() {

    return (
        <div style={{display: 'flex'}}>

            {/*Admin Navigation*/}
            <AdminNav />

            {/*Admin Replies Report List*/}
            <AdminRepliesList />

        </div>


    )
}

