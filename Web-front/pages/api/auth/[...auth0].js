// pages/api/auth/[...auth0].js
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import axiosInstance from "../../../utils/routeUtil";

const afterCallback = (req, res, session, state) => {
  //   if (!session.user.isAdmin) {
  //     throw new UnauthorizedError("User is not admin");
  //   }
  console.log("After callback -> make AXIOS call");

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
        console.log("success");
      }
    })
    .catch((e) => {
      const resp = e.response;
      if (resp["status"] == 403) {
        // TODO temp redirection
        // cookies.remove("user_token", { path: "/" });
        // cookies.remove("user_id", { path: "/" });
        // window.location.href = "./error/403";
      }
    });

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
