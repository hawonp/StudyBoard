import Link from "next/link";
import ProfileCard from "../../components/ProfileCard";
import Container from "@mui/material/Container";
import * as React from "react";
import EditProfile from "../../components/EditProfile";
import { useEffect, useState } from "react";

export default function UpdateProfile() {
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
          <EditProfile profile={profile} />
        </Container>
      </div>
      <ProfileCard />
    </div>
  );
}
