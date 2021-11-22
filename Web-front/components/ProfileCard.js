import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import { Badge, CardMedia, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Grid from '@mui/material/Grid';
import React from 'react';
import Cookies from 'universal-cookie';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState, useEffect } from 'react';

//Importing and settings vars for axios parse
import axiosInstance from '../utils/routeUtil';
const users = '/users/';

const BoxWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                marginTop: '1.3rem',
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                boxShadow: '0 3px 110px lightgray',
                margin: '1.0rem auto 0',

                width: '14rem',
                display: 'flex',
                flexDirection: 'column',
                border: '0.1rem solid lightgray',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const HashtagWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                padding: '4px 15px',
                fontSize: '13px',
                color: '#ffffff',
                background: '#20247b',
                borderRadius: '3px',
                marginRight: '4px',
                marginBottom: '4px',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const IconWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                display: 'block',
                paddingTop: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const TagWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'start',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

export default function ProfileCard() {
    const [nickname, setNickname] = useState('');
    const cookies = new Cookies();
    const user_id = cookies.get('user_id');
    const id_token = cookies.get('user_token');
    const [tags, setTags] = useState([]);

    //Load posts when component mounts
    useEffect(() => {
        if (user_id == null || user_id == undefined || user_id == 'null') {
            console.log('User Id is null');
        } else {
            console.log('Crawling User Profile Data');
            axiosInstance
                .get(users + user_id, {
                    params: {
                        id_token: id_token,
                    },
                })
                .then((response) => {
                    console.log('response from backend' + response);
                    if (response['status'] == 200) {
                        const temp = response['data'];
                        const temp_json = JSON.parse(temp);
                        const user_nickname = temp_json.user.user_nickname;
                        const tag = temp_json.tags;
                        setNickname(user_nickname);
                        setTags(tag);
                        console.log(tag);
                    }
                })
                .catch((e) => {
                    const resp = e.response;
                    if (resp['status'] == 403) {
                        // TODO temp redirection
                        cookies.remove('user_token', { path: '/' });
                        cookies.remove('user_id', { path: '/' });
                        window.location.href = './error/403';
                    }
                });
        }
    }, []);

    return (
        <div>
            {user_id == undefined || user_id == 'null' ? (
                <></>
            ) : (
                <Grid item xs={2}>
                    <BoxWrapper>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/*프로필 아바타*/}

                            <div style={{ flex: 1, marginLeft: '1rem' }}>
                                {/*user name*/}
                                <h4>{nickname}</h4>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '0.8rem' }}>
                                {/*만약 수퍼유저가 아니면 안보이게 */}
                                <Link href="/admin/admin">
                                    <AdminPanelSettingsIcon sx={{ color: 'darkred' }} />
                                </Link>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', marginLeft: '1rem' }}>
                            <TagWrapper>
                                {tags.map((tag, i) => (
                                    <HashtagWrapper key={i}>{tag}</HashtagWrapper>
                                ))}
                            </TagWrapper>
                        </div>

                        {/*Link to My Post, Favorite, Notification*/}
                        <IconWrapper>
                            {/* 자기 자신이 쓴글들이 모이는곳*/}
                            <div style={{ display: 'inline-block' }}>
                                <IconButton aria-label="favorites" sx={{ borderRadius: '4px' }}>
                                    <Link href="/myPost">
                                        <DescriptionIcon />
                                    </Link>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>My Post</p>
                                </IconButton>
                            </div>

                            {/* 자기가 좋아하는걸 모이게 하는곳*/}
                            <div style={{ display: 'inline-block' }}>
                                <IconButton aria-label="favorites" sx={{ borderRadius: '4px' }}>
                                    <Link href="/favorite/favorite">
                                        <BookmarkIcon />
                                    </Link>
                                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Favorite</p>
                                </IconButton>
                            </div>
                        </IconWrapper>
                    </BoxWrapper>
                </Grid>
            )}
        </div>
    );
}
