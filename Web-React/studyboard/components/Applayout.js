import React from "react";
import Link from 'next/link';
import Nav from './Nav';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AppLayout = ({children }) =>{
    return(
        <>
            <Nav />
            <div>
                <Box sx={{ flexGrow: 2}}>
                    <Grid container spacing={4}>
                    
                        <Grid item xs={2}>
                            <Item></Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                            {children}
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item></Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}


export default AppLayout;