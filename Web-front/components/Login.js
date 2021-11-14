import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import Cookies from "universal-cookie";
const cookies = new Cookies();
//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const verifyToken = "/verify";
const clientID =
  "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success!] currentUser: ", res.profileObj);
    // console.log(res.tokenObj["access_token"]);
    // console.log(res.tokenObj["id_token"]);
    // console.log(res.tokenObj);

    refreshTokenSetup(res);

    axiosInstance
      .get(verifyToken, {
        params: {
          token: res.tokenObj["id_token"],
        },
      })
      .then((response) => {
        if (response["status"] == 200) {
          //   console.log(response);
          console.log("response from backend", response["data"]);
          if (
            cookies.get("user_token") == null ||
            cookies.get("user_token") == "null" ||
            cookies.get("user_token") == undefined
          ) {
            cookies.set("user_token", response["data"], { path: "/" });
          }
          console.log("yes");
          console.log(cookies.get("user_token"));
          console.log(cookies.getAll());
          // window.location.reload();
        }
      });
  };

  const onFailure = (res) => {
    console.log("[Login Failed!] res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </div>
  );
}

export default Login;
