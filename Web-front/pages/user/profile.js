// react imports
import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";

// package imports
import ProfileCard from "../../components/user/ProfileCard";
import ProfileInfo from "../../components/user/ProfileInfo";
import { useUser } from "@auth0/nextjs-auth0";
import LoadingProgress from "../../components/utils/Loading";
import axiosInstance from "../../utils/routeUtil";

// constants
const USERSENDPOINT = "/users/";

// functional component that renders the profile page
export default function Profile() {
  const { user, error, isLoading } = useUser(); // user session data from Auth0
  const [dataLoaded, setDataLoading] = useState(false); // determines the state of data crawling from backend
  const [profile, setProfile] = useState({}); // holds the profile information
  const router = useRouter(); // used for redirection

  // load in data from backend
  useEffect(() => {
    if (!isLoading && !error) {
      axiosInstance
        .get(USERSENDPOINT + user.sub, {})
        .then((response) => {
          if (response["status"] == 200) {
            const temp = response["data"];
            const temp_json = JSON.parse(temp);
            const user_info = temp_json.user;
            setProfile({
              email: user_info.user_email_address,
              nick: user_info.user_nickname,
              tag: temp_json.tags,
            });
            setDataLoading(true);
          }
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 403) {
            // TODO temp redirection
            router.push("/" + "/error/403");
          }
        });
    }
  }, [isLoading]);

  // user session data is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // data is loading from backend
  if (!dataLoaded) {
    return <LoadingProgress />;
  }
  // all data has loaded in
  else {
    return (
      <div style={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "20px", marginRight: "20px" }}>
          {/* Profile information */}
          <ProfileInfo profile={profile} />
        </Box>

        <ProfileCard />
      </div>
    );
  }
} // functional component closure
