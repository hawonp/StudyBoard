import Container from "@mui/material/Container";
import ProfileCard from "../../components/ProfileCard";
import * as React from "react";
import ProfileInfo from "../../components/ProfileInfo";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

//Importing and settings vars for axios parse
import axiosInstance from "../../utils/routeUtil";
const users = "/users/";

export default function Profile() {
  const { user } = useUser();
  // const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user) {
      console.log("Get profile info to display in user/profile");
      console.log(user);
      axiosInstance
        .get(users + user.sub, {})
        .then((response) => {
          if (response["status"] == 200) {
            const temp = response["data"];
            const temp_json = JSON.parse(temp);
            const user_info = temp_json.user;

            console.log(temp_json);
            setProfile({
              email: user_info.user_email_address,
              nick: user_info.user_nickname,
              tag: temp_json.tags,
            });
            // setIsLoading(true);
          }
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 403) {
            // TODO temp redirection
            window.location.href = "../error/403";
          }
        });
    }
  }, []);

  // if (!isLoading) {
  //   return <div> Loading ... </div>;
  // } else {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Container>
          {/* Profile information */}
          <ProfileInfo profile={profile} />
        </Container>
      </div>
      <ProfileCard />
    </div>
  );
}
// }
