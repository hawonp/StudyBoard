import styles from '../../styles/Home.module.css'
import Link from "next/link";
import ProfileCard from "../../components/ProfileCard";
import Container from "@mui/material/Container";
import * as React from "react";
import EditProfile from "../../components/EditProfile";

export default function UpdateProfile() {
    return (
        <div style={{display: 'flex'}}>
            <div className={styles.container}>
                <Container >

                    <EditProfile />

                </Container>
            </div>
            <ProfileCard/>
        </div>
    )
}

