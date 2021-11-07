import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Nav = () => {
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //login button
    const [openButton, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const loginopen = () => setOpen(false);

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li className="product-name" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>

                    <Link href = "/">
                        <a>
                            <div style={{marginTop: '1.2rem'}}>
                                <Image src = "/images/StudyBoard-logo.png" alt="logo" height="60rem" width ="150rem" display="flex"/>
                                {/* <img style={{height:'5rem',display:'flex'}} src="/images/StudyBoard-logo.png" alt="logo" /> */}
                            </div>
                        </a>
                    </Link>
                </li>

                <li className="font-style">
                    <Link href = "/board" >
                        <a> ❓Ask a Question</a>
                    </Link>
                </li>

                <li className="font-style">
                    <Link href="/about"><a>📢 About </a></Link>
                </li>

                <li className="font-style">
                    <Link href="/rank"><a>👍 Rank  </a></Link>
                </li>

                {/*search*/}
                <SearchBar
                    onRequestSearch={() => console.log("onRequestSearch")}
                    style={{
                        maxWidth: 1250
                    }}
                />

                <li>
                    {/* notification */}
                    <Badge color="secondary" variant="dot" invisible={invisible}>
                        <NotificationsNoneIcon color="action" />
                    </Badge>
                </li>


                <li>
                    <div>
                        <Button onClick={handleOpen}>Log In</Button>
                        <Modal
                            open={openButton}
                            onClose={loginopen}
                            aria-labelledby="login-title"
                            aria-describedby="login-description"
                        >
                            <Box sx={style}>
                                <Typography id="login-title" variant="h6" component="h2">
                                    Login
                                </Typography>
                                <Typography id="login-description" sx={{ mt: 2 }}>
                                    Google Login
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </li>

                {/* profile */}
                <li>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <AccountCircleIcon color="action" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link href="/user/profile"><a>Profile</a></Link></MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </li>

            </ul>
        </nav>
    )
}



export default Nav;