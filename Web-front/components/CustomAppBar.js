import React from 'react';
import Link from 'next/link';
import { Container, Toolbar, Badge, Box, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomMenu from './CustomMenu';
import NavButton from './NavButton';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import Login from './Login';
import Logout from './Logout';
import Cookies from 'universal-cookie';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationList from '../components/NotificationList';

const HrWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                margin: '0px',
                flexShrink: '0',
                borderWidth: '0px 0px thin',
                borderStyle: 'solid',
                marginBottom: '10px',
                opacity: 1,
                borderColor: 'lightgray',
                ...style,
            }}
        >
            {' '}
            {children}{' '}
        </div>
    );
};

const ContainerWrapper = ({ style, children }) => {
    return <Container style={{ maxWidth: '1338px ', ...style }}> {children} </Container>;
};

export default function CustomAppBar() {
    const cookies = new Cookies();
    const user_id = cookies.get('user_token');
    console.log('App Bar:\nID_TOKEN= ', user_id);
    const isBig = useMediaQuery('(min-width:800px)');

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? '' : undefined;

    const menuThreeList = [
        {
            type: 'normal',
            title: 'Profile',
            onClick: () => {
                // alert("Profile");
                window.location.href = '/user/profile';
            },
        },
        // {
        //   type: 'special',
        //   component: <Logout />
        // },
    ];

    const menuList = [
        {
            type: 'normal',
            title: 'AskQuestion',
            onClick: () => {
                // alert("Profile");
                window.location.href = '/board';
            },
        },
        {
            type: 'normal',
            title: 'About',
            onClick: () => {
                // alert("Profile");
                window.location.href = '/about';
            },
        },
        {
            type: 'normal',
            title: 'Rank',
            onClick: () => {
                // alert("Profile");
                window.location.href = '/rank';
            },
        },
        {
            type: 'special',
            title: 'Profile',
            onClick: () => {
                // alert("Profile");
                window.location.href = '/user/profile';
            },
        },
    ];

    return (
        <ContainerWrapper>
            <Toolbar>
                <Link href={'/'}>
                    <img style={{ height: '4rem', display: 'flex', marginTop: '1.2rem' }} src="/images/StudyBoard-logo.png" alt="logo" />
                </Link>
                {isBig && (
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <NavButton to={'/board'} title={'AskQuestion'} />
                        <NavButton to={'/about'} title={'About'} sx={{ ml: 3 }} />
                        <NavButton to={'/rank'} title={'Rank'} sx={{ ml: 3 }} />
                    </Box>
                )}
                <Box sx={{ display: 'flex', flex: 1.0 }}>
                    <SearchBar />
                </Box>

                <div>{user_id == undefined || user_id == 'null' ? <Login /> : <Logout />}</div>
                <div>
                    {user_id == undefined || user_id == 'null' ? (
                        <></>
                    ) : (
                        <div>
                            <Box sx={{ color: 'action.active', ml: 2, mr: 2 }}>
                                <IconButton edge="end" aria-describedby={id} variant="contained" onClick={handleClick}>
                                    <Badge color="secondary" variant="dot">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                >
                                    <Typography sx={{ p: '1.2rem' }}>
                                        <NotificationList />
                                    </Typography>
                                    <HrWrapper />
                                    <Link href="/notification/notification">
                                        <a style={{ textDecoration: 'none', color: '#191970' }}>
                                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>View all</div>
                                        </a>
                                    </Link>
                                </Popover>
                            </Box>
                        </div>
                    )}
                </div>
                <div>
                    {isBig ? (
                        user_id == undefined || user_id == 'null' ? (
                            <> </>
                        ) : (
                            <div>
                                {/*<CustomMenu icon={<MenuIcon />} itemList={menuTwoList} />*/}
                                <Link href="/user/profile">
                                    <IconButton edge="end" aria-label="delete">
                                        <AccountCircleIcon />
                                    </IconButton>
                                </Link>
                            </div>
                        )
                    ) : (
                        <CustomMenu icon={<MenuIcon />} itemList={menuList} />
                    )}
                </div>
            </Toolbar>
        </ContainerWrapper>
    );
}
