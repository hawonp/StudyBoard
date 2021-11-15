import * as React from "react";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MyPostList from "../components/MyPostList";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        minWidth: "750px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "space-around",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const LineWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        marginBottom: "16px",
        opacity: 1,
        borderColor: "lightgray",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function MyPost() {
  const [myPosts, setMyPosts] = useState([
    "my1",
    "my2",
    "my3",
    "my4",
    "my5",
    "my6",
  ]);

  useEffect(() => {
    // TODO: API CALL (BACKEND)
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Container>
          <Box
            style={{
              border: "0.1rem solid lightgray",
              borderRadius: "8px",
              marginBottom: "16px",
              marginTop: "20px",
              padding: "10px 12px",
              backgroundColor: "white",
            }}
          >
            <h5 style={{ marginBottom: "2rem" }}>Pyungkang&apos;s Post</h5>
            <LineWrapper />
            <BoxWrapper>
              {myPosts.map((id) => (
                <MyPostList key={id} mypost={id} />
              ))}
            </BoxWrapper>
          </Box>
        </Container>
      </div>
      <ProfileCard />
    </div>
  );
}