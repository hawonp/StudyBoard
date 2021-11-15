import Link from "next/link";
import ProfileCard from "../../components/ProfileCard";
import Container from "@mui/material/Container";
import * as React from "react";
import EditProfile from "../../components/EditProfile";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
//Importing and settings vars for axios parse
import axiosInstance from "../../utils/routeUtil";
const users = "/users/";

export default function UpdateProfile() {
  const [isLoading, setIsLoading] = useState(true);

  const [profile, setProfile] = useState({
    // name: "PK",
    // email: "PK@naver.com",
    // nick: "PKPKPK",
    // tag: "#MATH #CSE #HARD",
  });

  const cookies = new Cookies();
  const user_id = cookies.get("user_id");
  const id_token = cookies.get("user_token");

  useEffect(() => {
    if (user_id == null || user_id == undefined || user_id == "null") {
      console.log("User Id is null");
    } else {
      console.log("Get profile info to display in user/profile");
      axiosInstance
        .get(users + user_id, {
          params: {
            id_token: id_token,
          },
        })
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
            setIsLoading(false);
          } else if (response["status"] == 403) {
            alert("Could not verify token at Backend");
          }
        });
    }
  }, []);

  if (isLoading) {
    return <div> Loading ... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <Container>
            <EditProfile profile={profile} />
          </Container>
        </div>
        <ProfileCard />
      </div>
    );
  }
}
