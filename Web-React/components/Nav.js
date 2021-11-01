import * as React from 'react';
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from "material-ui-search-bar";


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

    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href = "/">
                        <a> StudyBoard </a>
                    </Link>
                </li>

                <li>
                    <Link href = "/board">
                        <a> ❓ AskQuesiton</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about"><a>📢 About </a></Link>
                </li>

                <li>
                    <Link href="/rank"><a>👍 Rank  </a></Link>
                </li>

                {/*search*/}
                <SearchBar

                    onRequestSearch={() => console.log("onRequestSearch")}
                    style={{
                        margin: "0.5rem 0.5rem ",
                        maxWidth: 1250
                    }}
                />
                {/* notification */}
                <Badge color="secondary" variant="dot" invisible={invisible}>
                    <NotificationsNoneIcon color="action" />
                </Badge>

                {/* profile */}
                <li>
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
                        <MenuItem onClick={handleClose}><Link href="/profile"><a>Profile</a></Link></MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </li>
            </ul>
        </nav>
    )
}



export default Nav;