import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ProfileCard from '../components/ProfileCard';
import Container from '@mui/material/Container';
import PostNavigation from '../components/PostNavigation';
import PaginationButton from '../components/Pagination';
import CardShow from '../components/CardShow';
import FilterButton from '../components/FilterButton';

const PageNav = ({ style, children }) => {
    return (
        <div style={{ flex: 1, display: 'flex', flex: '1', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem', ...style }}>
            {' '}
            {children}{' '}
        </div>
    );
};

const FilterBox = ({ style, children }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                backgroundColor: 'white',
                border: '0.1rem solid lightgray',
                borderRadius: '4px',
                boxSizing: 'border-box',
                display: 'flex',
                marginBottom: '16px',
                padding: '10px 12px',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

//Importing and settings vars for axios parse
import axiosInstance from '../utils/routeUtil';
import { useMediaQuery } from '@mui/material';
const POST_FEED = '/feed/posts';

//popover
const options = ['Edit', 'Delete'];

export default function Board() {
    const [expanded, setExpanded] = useState(false);

    const isBig = useMediaQuery('(min-width:850px)');

    const [feedPage, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [feedOrder, setFeedOrder] = useState('newest');
    const [feedFilter, setFeedFilter] = useState('None');
    const [posts, setPosts] = useState([]);

    //Load posts when component mounts
    useEffect(() => {
        axiosInstance
            .get(POST_FEED, {
                params: {
                    page: feedPage,
                    order: feedOrder,
                    filter: feedFilter,
                },
            })
            .then((response) => {
                setPosts(JSON.parse(response.data)['posts']);
                setMaxPage(JSON.parse(response.data)['maxPageCount']);
            });
    }, []);

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
        <div style={{ display: 'flex' }}>
            <Container>
                <Head>
                    <title>StudyBoard</title>
                </Head>

                {/*{!isBig && <div style={{ width: isBig ? '300px' : '100%', height: '500px', backgroundColor: 'red' }} />}*/}
                {!isBig && <ProfileCard />}

                {/* Write Qeustion */}
                <PostNavigation />

                {/*filter*/}
                <FilterBox>
                    <FilterButton />
                </FilterBox>

                <div>
                    {/*Pre view user post Card*/}
                    {posts.map((post) => (
                        <CardShow key={post.post_id} post={post} />
                    ))}
                </div>

                {/*pagnation*/}
                <PageNav>
                    <PaginationButton />
                </PageNav>
            </Container>

            {/*{isBig && <div style={{ width: isBig ? '300px' : '100%', backgroundColor: 'red' }} />}*/}
            {isBig && <ProfileCard />}
        </div>
    );
}
