import React from "react";
import Link from 'next/link';

import Nav from './Nav';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {CardMedia} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',

}));

const AppLayout = ({ children }) =>{
    return(
        <>
            <Nav />
            <div style={{}}>
                <Box sx={{ flexGrow: 2}}>
                    <Grid container spacing={2}>

                        <Grid item xs={2}>
                            {/* should be empty */}
                        </Grid>
                        <Grid item xs={8}>
                            {children}
                        </Grid>

                        <Grid item xs={2}>
                            {/* should be empty */}
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}


export default AppLayout;