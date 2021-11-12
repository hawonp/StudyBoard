import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginAuth () {
    return(
        <Button  variant="contained" sx={{ backgroundColor: '#dd4b39', color: 'white'}}>
            {/*npm i react-google-login might need it */}
            <GoogleIcon />&nbsp;
            Login Google+

        </Button>
    )


}