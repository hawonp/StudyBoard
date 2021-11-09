import Link from 'next/link';

import Container from "@mui/material/Container";
import ProfileCard from "../../components/ProfileCard";
import * as React from "react";
import ProfileInfo from "../../components/ProfileInfo";

export default function Profile() {
    return (
        <div style={{display: 'flex'}}>
            <div >
                <Container >
                    {/* Profile information */}
                    <ProfileInfo />

                </Container>
            </div>
            <ProfileCard/>
        </div>

    )
}

