// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

// import MUI
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

// package imports
import { useUser } from "@auth0/nextjs-auth0";

// project imports
import ProfileCard from "../../components/ProfileCard";
import PostEdit from "../../components/PostEdit";
import PostDetail from "../../components/PostDetail";
import { CommentBox } from "../../components/CommentBox";
import MyPostList from "../../components/MyPostList";

// axios instance
import axiosInstance from "../../utils/routeUtil";
const POSTTAGENDPOINT = "/feed/posts/tags";

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

//Need this to keep post id
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function MyPost() {
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);
  //   const { user, isLoading, error } = useUser();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // if (!isLoading && !error) {
    //   let userID = "";
    //   if (user) {
    //     userID = user.sub;
    //   }
    axiosInstance
      .get(POSTTAGENDPOINT, {
        params: {
          tagID: router.query.id,
        },
      })
      .then((response) => {
        setMyPosts(JSON.parse(response.data));
        console.log(response);
        setIsDataLoading(false);
      });
    // }
  }, [isDataLoading]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else if (myPosts.length == 0) {
    return <div> No Search Results </div>;
  } else {
    console.log("posts", myPosts);
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
              <h5 style={{ marginBottom: "2rem" }}>
                Search Results for Tag ID : {router.query.id}
              </h5>
              <LineWrapper />
              <BoxWrapper>
                {myPosts.map((post) => (
                  <MyPostList key={post.post_id} mypost={post} />
                ))}
              </BoxWrapper>
            </Box>
          </Container>
        </div>
        <ProfileCard />
      </div>
    );
  }
}
