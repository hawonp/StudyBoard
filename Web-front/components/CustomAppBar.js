import React from "react";
import Link from 'next/link'
import {Container, Toolbar, Typography, Box} from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import CustomMenu from "./CustomMenu";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

export default function CustomAppBar() {
    const menuOneList = [
        {
            title: "ABC",
            onClick: () => {
                alert("ABC");
            },
        },
        {
            title: "DEF",
            onClick: () => {
                alert("DEF");
            },
        },
        {
            title: "GHI",
            onClick: () => {
                alert("GHI");
            },
        },
    ];
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
            title: "My account",
            onClick: () => {
                alert("My account");
            },
        },
    ];

    return (
        <Container>
            <Toolbar>
                <Link href={"/"} >
                    <img style={{height:'5rem',display:'flex', marginTop: '1.2rem'}} src="/images/StudyBoard-logo.png" alt="logo" />
                </Link>
                <Box sx={{ display: "flex", flex: 2, flexDirection: "row" }}>
                    <NavButton to={"/board"} title={"❓ AskQuesiton"} />
                    <NavButton to={"/about"} title={"📢 About"} sx={{ ml: 2 }} />
                    <NavButton to={"/rank"} title={"👍 Rank"} sx={{ ml: 2 }} />
                </Box>
                <Box sx={{ display: "flex", flex: 1.5 }}>
                    <SearchBar />
                </Box>
                <CustomMenu icon={<MenuIcon />} itemList={menuOneList} />
                <CustomMenu icon={<MenuIcon />} itemList={menuTwoList} />
                <CustomMenu icon={<AccountCircle />} itemList={menuThreeList} />
            </Toolbar>
        </Container>
    );
}
