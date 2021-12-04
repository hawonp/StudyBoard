// react imports
import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";

// package imports
import ProfileCard from "../../components/user/ProfileCard";
import ProfileEdit from "../../components/user/ProfileEdit";
import { useUser } from "@auth0/nextjs-auth0";
import axiosInstance from "../../utils/routeUtil";
import LoadingProgress from "../../components/utils/Loading";

// constants
const USERSENDPOINT = "/users/";

// functional component that loads the page for update a user profile
export default function UpdateProfile() {
  const { user, error, isLoading } = useUser(); // user session data from Auth0
  const [userLoaded, setUserLoaded] = useState(false); // determines if the user data has loaded in
  const [profile, setProfile] = useState({}); // holds the current profile data
  const router = useRouter(); // used for redirection

  // load in data from the backend
  useEffect(() => {
    if (user) {
      axiosInstance.get(USERSENDPOINT + user.sub, {}).then((response) => {
        if (response["status"] == 200) {
          const temp = response["data"];
          const temp_json = JSON.parse(temp);
          const user_info = temp_json.user;
          setProfile({
            email: user_info.user_email_address,
            nick: user_info.user_nickname,
            tag: temp_json.tags,
          });
          setUserLoaded(true);
        } else if (response["status"] == 403) {
          router.push("/" + "error/403");
        }
      });
    }
  }, []);

  // user session data is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // profile data from backend is loading
  if (!userLoaded) {
    return <LoadingProgress />;
  }
  // all data has loaded
  else {
    return (
      <div style={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "20px", marginRight: "20px" }}>
          <ProfileEdit profile={profile} />
        </Box>

        <ProfileCard />
      </div>
    );
  }
} // functional component closure
