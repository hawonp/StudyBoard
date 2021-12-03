// @refresh reset

// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import MUI
import { Box } from "@mui/material";

// package imports
import { useUser } from "@auth0/nextjs-auth0";

// project imports
import ProfileCard from "../../components/ProfileCard";
import LoadingProgress from "../../components/utils/Loading";
import MyPostList from "../../components/MyPostList";
import { useReducer } from "react";

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

//Need this to keep tag_id
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function MyPost() {
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  // const [tagName, setTagName] = useState(router.query.name);
  //   const dynamicRoute = router.asPath;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }
  useEffect(() => {
    // console.log("This is tag name", tagName, router.query, router.query.name);
    axiosInstance
      .get(POSTTAGENDPOINT, {
        params: {
          tagName: router.query.name,
        },
      })
      .then((response) => {
        setMyPosts(JSON.parse(response.data));
        setIsDataLoading(false);
      });
    const handleRouteChange = (url, { shallow }) => {
      console.log("routechanged");
      console.log(router.asPath);
      setIsDataLoading(true);
      handleClick();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [isDataLoading]);

  if (isDataLoading) {
    return <LoadingProgress />;
  } else if (myPosts.length == 0) {
    return <div> No Search Results </div>;
  } else {
    console.log("posts", myPosts);
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box
            sx={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
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
                Search Results for the Tag "{router.query.name}"
              </h5>
              <LineWrapper />
              <BoxWrapper>
                {myPosts.map((post) => (
                  <MyPostList key={post.post_id} mypost={post} />
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
