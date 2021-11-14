import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import Cookies from "universal-cookie";
const cookies = new Cookies();
//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const verifyToken = "/login";
const clientID =
  "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success!");
    console.log(res.tokenObj);
    const id_token = res.tokenObj["id_token"];

    refreshTokenSetup(res);
    console.log("Make AXIOS call to BE");
    axiosInstance
      .get(verifyToken, {
        params: {
          id_token: id_token,
        },
      })
      .then((response) => {
        if (response["status"] == 200) {
          if (
            cookies.get("user_token") == null ||
            cookies.get("user_token") == "null" ||
            cookies.get("user_token") == undefined
          ) {
            cookies.set("user_id", response["data"], { path: "/" });
            cookies.set("user_token", id_token, { path: "/" });
          }
          // alert("Log-In Success!");
          window.location.reload();
        } else if (response["status"] == 403) {
          alert("Could not verify token at Backend");
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
