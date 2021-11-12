import * as React from 'react';
import {GoogleLogout} from 'react-google-login';

const clientID = "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert('Logout Success!');
    };

    return (
        <GoogleLogout
            clientId = {clientID}
            buttonText = "Logout"
            onLogoutSuccess = {onSuccess}
        />
    );
}

export default Logout;
