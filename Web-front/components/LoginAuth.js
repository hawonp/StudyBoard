import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import {useEffect } from "react";

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const login = "/login"

export default function LoginAuth () {

    function handleClick() {
        console.log("Hello there")
        axiosInstance
          .get(login)
          .then((response) => {
            // setPosts(JSON.parse(response.data)["posts"]);
            // setMaxPage(JSON.parse(response.data)["maxPageCount"]);
            console.log(response)
          });
    }


    return(
        <Button  onClick= {handleClick} variant="contained" sx={{ backgroundColor: '#dd4b39', color: 'white'}}>
            {/*npm i react-google-login might need it */}
            <GoogleIcon />&nbsp;
            Login Google+

        </Button>
    )


}