import * as React from 'react';
import { GoogleLogin} from 'react-google-login';
import { refreshTokenSetup} from '../utils/refreshToken';

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const verifyToken = "/verify";
const clientID = "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com";

function Login () {

    const onSuccess = (res) => {
        console.log('[Login Success!] currentUser: ', res.profileObj)
        console.log(res.tokenObj['access_token'])
        console.log(res.tokenObj['id_token'])
        console.log(res.tokenObj)

        refreshTokenSetup(res);

        axiosInstance
          .get(verifyToken, {
              params: {
                token : res.tokenObj['id_token']
              },
          })
          .then((response) => {
            if(response["status"] == 200){
                console.log(response)
                console.log(response["data"])
            }
        });    

    };
  
    const onFailure = (res) => {
        console.log('[Login Failed!] res: ', res)
    };

    return(
        <div>
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    );
}

export default Login;

