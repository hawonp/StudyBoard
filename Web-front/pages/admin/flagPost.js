import * as React from "react";
import AdminNav from "../../components/AdminNav";
import AdminPostList from "../../components/AdminPostList";


export default function FlagPost() {

    return (
        <div style={{display: 'flex'}}>

            {/*Admin Navigation*/}
            <AdminNav />

            {/* Admin Report List*/}
            <AdminPostList />
        </div>


    )
}

