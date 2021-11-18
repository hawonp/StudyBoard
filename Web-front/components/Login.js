import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup, delCookies } from "../utils/utils";
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
        console.log("response status: " + response["status"]);
        if (response["status"] == 200) {
          if (
            cookies.get("user_token") == null ||
            cookies.get("user_token") == "null" ||
            cookies.get("user_token") == undefined
          ) {
            cookies.set("user_id", response["data"], { path: "/" });
            cookies.set("user_token", id_token, { path: "/" });
          }
          window.location.href = "./board";
        }
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 401) {
          // TODO temp redirection
          cookies.remove("user_token", { path: "/" });
          cookies.remove("user_id", { path: "/" });
          window.location.href = "./error/401";
        }
      });
  };

  const onFailure = (res) => {
    console.log("[Login Failed!] res: ", res);
  };

  return (
    <div style={{ marginRight: "3rem" }}>
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
