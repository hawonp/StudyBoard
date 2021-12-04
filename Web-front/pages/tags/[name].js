// @refresh reset

// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useReducer } from "react";

// MUI imports
import { Box } from "@mui/material";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

// package imports
import { useUser } from "@auth0/nextjs-auth0";
import ProfileCard from "../../components/user/ProfileCard";
import LoadingProgress from "../../components/utils/Loading";
import PostMinified from "../../components/misc/PostMinified";
import axiosInstance from "../../utils/routeUtil";

// constants
const POSTTAGENDPOINT = "/feed/posts/tags";

// BoxWrapper styling
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

// LineWrapper styling
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

// functional component that renders the dynamic route for a tag page
export default function Tag() {
  const router = useRouter(); // used for redirection
  const [postList, setPostList] = useState([]); // holds the current postlist that matches the tag
  const [isDataLoading, setIsDataLoading] = useState(true); // determines whether or not the data has loaded from the backend

  // used to force a re-rendering of the UI
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }

  // load in data from backend
  useEffect(() => {
    axiosInstance
      .get(POSTTAGENDPOINT, {
        params: {
          tagName: router.query.name,
        },
      })
      .then((response) => {
        setPostList(JSON.parse(response.data));
        setIsDataLoading(false);
      });

    // rerender UI component for route change with new data
    const handleRouteChange = (url, { shallow }) => {
      setIsDataLoading(true);
      handleClick();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [isDataLoading]);

  // data is still loading
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // if there is no posts that match the tag query
  else if (postList.length == 0) {
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ReportGmailerrorredOutlinedIcon
                  sx={{ fontSize: "7.2rem", color: "lightgray" }}
                />
                <p style={{ fontSize: "0.8rem" }}>
                  There were no tags matching "{router.query.name}"
                </p>
              </Box>
            </Box>
          </Box>
        </div>
        <ProfileCard />
      </div>
    );
  }
  // data has loaded, and there are query results
  else {
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
