// package imports
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import axiosInstance from "../../../utils/routeUtil";

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
      if (response["status"] == 200) {
        // do nothing, automatically redirects to the same url
      }
    })
    .catch((e) => {
      console.log(e);
      const resp = e.response;
      if (resp["status"] == 403) {
        alert("Could not log in");
      }
    });

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
}); // functional component closure
