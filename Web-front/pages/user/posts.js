import * as React from "react";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//Importing components
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ProfileCard from "../../components/user/ProfileCard";
import PostMinified from "../../components/misc/PostMinified";
import LoadingProgress from "../../components/utils/Loading";

//Importing and settings vars for axios parse
import axiosInstance from "../../utils/routeUtil";

const POSTS = "/posts";
const USERS = "/users";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        minWidth: "750px",
        display: "flex",
        flexDirection: "column",
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

export default function Posts() {
  const [postList, setPostList] = useState([]);
  const { user, isLoading, error } = useUser();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance.get(USERS + "/" + userID + POSTS).then((response) => {
        setPostList(JSON.parse(response.data));
        console.log(response);
        console.log("henlo", JSON.parse(response.data));
        setIsDataLoading(false);
      });
    }
  }, [isLoading]);

  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <LoadingProgress />;
  } else if (postList.length === 0) {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
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
              <h5
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                My Posts
              </h5>
              <LineWrapper />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "60px",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                {" "}
                <ReportGmailerrorredOutlinedIcon
                  sx={{ fontSize: "7.2rem", color: "lightgray" }}
                />
                <div style={{ fontSize: "0.8rem", color: "#B0B0B0" }}>
                  No Posts
                </div>
              </Box>
            </Box>
          </Box>
        </div>

        <ProfileCard />
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
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
              <h5
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                My Posts
              </h5>
              <LineWrapper />
              <BoxWrapper>
                {postList.map((post) => (
                  <PostMinified key={post.post_id} data={post} />
                ))}
              </BoxWrapper>
            </Box>
          </Box>
        </div>
        <ProfileCard />
      </div>
    );
  }
}