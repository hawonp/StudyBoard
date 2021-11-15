import Container from "@mui/material/Container";
import ProfileCard from "../../components/ProfileCard";
import * as React from "react";
import ProfileInfo from "../../components/ProfileInfo";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "PK",
    email: "PK@naver.com",
    nick: "PKPKPK",
    tag: "#MATH #CSE #HARD",
  });

  useEffect(() => {
    // TODO: API CALL (BACKEND)
  }, []);

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
