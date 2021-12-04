// react imports
import { useRouter } from "next/dist/client/router";

// package imports
import { handleAuth, handleCallback, handleLogout } from "@auth0/nextjs-auth0";
import axiosInstance from "../../../utils/routeUtil";

// constants
const router = useRouter();

// action handling for after the login process is complete
const afterCallback = (req, res, session, state) => {
  axiosInstance
    .get("/login", {
      params: {
        user_id: session.user.sub,
        user_nickname: session.user.nickname,
        user_email: session.user.email,
      },
    })
    .then((response) => {
      console.log("response from backend" + response);
      if (response["status"] == 200) {
        // do nothing, automatically redirects to the same url
      }
    })
    .catch((e) => {
      const resp = e.response;
      if (resp["status"] == 403) {
        router.push("/" + "error/403");
      }
    });
  console.log("After callback -> make AXIOS call");

  return session;
};

// function component that calls the Auth0 login process
export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
