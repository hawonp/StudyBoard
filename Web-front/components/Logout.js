import * as React from "react";
import { GoogleLogout } from "react-google-login";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const clientID =
  "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    alert("Logout Success!");

    cookies.remove("user_token", { path: "/" })
    // cookies.set("user_token", null, { path: "/" });
    window.location.reload();
  };
  
  return (
    <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}

export default Logout;
