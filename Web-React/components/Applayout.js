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
}));

const AppLayout = ({ children }) =>{
    return(
        <>
            <Nav />
            <div style={{}}>
                <Box sx={{ flexGrow: 2}}>
                    <Grid container spacing={4}>
                    
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