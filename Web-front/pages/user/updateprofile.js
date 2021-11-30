import Link from "next/link";
import ProfileCard from "../../components/ProfileCard";
import Box from "@mui/material/Box";
import * as React from "react";
import EditProfile from "../../components/EditProfile";
import { useEffect, useState } from "react";

//Importing and settings vars for axios parse
import { useUser } from "@auth0/nextjs-auth0";
import axiosInstance from "../../utils/routeUtil";
const users = "/users/";

export default function UpdateProfile() {
  const { user, error, isLoading } = useUser();
  const [userLoaded, setUserLoaded] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user) {
      console.log("Getting values to edit the profile");
      console.log(user);
      axiosInstance.get(users + user.sub, {}).then((response) => {
        if (response["status"] == 200) {
          const temp = response["data"];
          const temp_json = JSON.parse(temp);
          const user_info = temp_json.user;
          setProfile({
            email: user_info.user_email_address,
            nick: user_info.user_nickname,
            tag: temp_json.tags,
          });
          setUserLoaded(false);
        } else if (response["status"] == 403) {
          alert("Could not verify token at Backend");
        }
      });
    }
  }, []);

  if (isLoading) return <div>User data not loaded yet</div>;
  if (error) return <div>{error.message}</div>;

  if (userLoaded) {
    return <div> Loading ... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "20px", marginRight: "20px" }}>
          <EditProfile profile={profile} />
        </Box>

        <ProfileCard />
      </div>
    );
  }
}
