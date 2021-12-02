import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CustomAppBar from './CustomAppBar';
import { useMediaQuery } from '@mui/material';

const AppLayout = ({ children }) => {
    const isBig = useMediaQuery('(min-width:850px)');
    console.log(isBig);

    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            <CustomAppBar />
            <Box sx={{ display: 'flex', flex: 1, backgroundColor: 'rgb(242,245,249)' }}>
                <Grid container spacing={2}>
                    {isBig ? (
                        <Grid item xs={2}>
                            {/* should be empty */}
                        </Grid>
                    ) : (
                        <></>
                    )}

                    <Grid item xs={isBig ? 8 : 12}>
                        {children}
                    </Grid>

                    {isBig ? (
                        <Grid item xs={2}>
                            {/* should be empty */}
                        </Grid>
                    ) : (
                        <></>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default AppLayout;
