import React from 'react';
import Head from 'next/head'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import PostNavigation from "../components/PostNavigation";
import PaginationButton from "../components/Pagination";
import CardShow from "../components/CardShow";
import FilterButton from "../components/FilterButton";


//popover
const options = [
    'Edit',
    'Delete'
];


export default function Board() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div style={{display: 'flex'}}>
            <Container >
                <Head>
                    <title>StudyBoard</title>
                </Head>


                {/* Write Qeustion */}
                <PostNavigation />

                {/*filter*/}
                <div style={{ alignItems: 'center',backgroundColor: 'white',border:'0.1rem solid lightgray',borderRadius: '4px',
                    boxSizing: 'border-box', display: 'flex', marginBottom: '16px', padding: '10px 12px' }}>
                    <FilterButton />
                </div>

                <div >
                    {/*Pre view user post Card*/}
                    <CardShow />
                    <CardShow />
                </div>

                {/*pagnation*/}
                <div style={{ marginTop: '2rem' }}>
                    <PaginationButton />
                </div>
            </Container>

            <ProfileCard />
        </div>
    )
}

