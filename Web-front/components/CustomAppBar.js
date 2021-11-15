import React from "react";
import Link from 'next/link'
import {Container, Toolbar, Badge, Box} from "@mui/material";
import {Menu as MenuIcon, AccountCircle} from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomMenu from "./CustomMenu";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";
import IconButton from "@mui/material/IconButton";
import LoginAuth from "./LoginAuth";

const ContainerWrapper = ({ style, children }) => {
    return (
        <Container
            style={{maxWidth: '1338px ',...style,
            }}
        >
            {" "}
            {children}{" "}
        </Container>
    );
};


export default function CustomAppBar() {
    const menuTwoList = [
        {
            title: "가나다",
            onClick: () => {
                alert("가나다");
            },
        },
        {
            title: "라마바",
            onClick: () => {
                alert("라마바");
            },
        },
    ];
    const menuThreeList = [
        {
            title: "Profile",
            onClick: () => {
                // alert("Profile");
                window.location.href="/user/profile"
            },
        },
        {
            title: "Log Out",
            onClick: () => {
                alert("Log Out");
            },
        },
    ];

    return (
        <ContainerWrapper>
            <Toolbar >
                <Link href={"/"} >
                    <img style={{height:'4rem',display:'flex', marginTop: '1.2rem' }} src="/images/StudyBoard-logo.png" alt="logo" />
                </Link>
                <Box sx={{ display: "flex", flex: 2, flexDirection: "row" }}>
                    <NavButton to={"/board"} title={"❓ AskQuesiton"} />
                    <NavButton to={"/about"} title={"📢 About"} sx={{ ml: 3 }} />
                    <NavButton to={"/rank"} title={"👍 Rank"} sx={{ ml: 3 }} />
                </Box>
                <Box sx={{ display: "flex", flex: 2.0 }}>
                    <SearchBar />
                </Box>

                <LoginAuth />

                <Box sx={{ color: 'action.active' , ml: 2 , mr:2}}>
                    <Link href="/notification/notification">
                        <IconButton edge="end" aria-label="delete">
                            <Badge color="secondary" variant="dot">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </Box>

                {/*<CustomMenu icon={<MenuIcon />} itemList={menuTwoList} />*/}
                <CustomMenu icon={<AccountCircle />} itemList={menuThreeList} />
            </Toolbar>
        </ContainerWrapper>
    );
}
