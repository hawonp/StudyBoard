// react imports
import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useReducer } from "react";
import Link from "next/link";

// MUI imports
import Box from "@mui/material/Box";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ProfileCard from "../../components/user/ProfileCard";
import PostMinified from "../../components/misc/PostMinified";

// package imports
import axiosInstance from "../../utils/routeUtil";
import LoadingProgress from "../../components/utils/Loading";

// constants
const SEARCHQUERY = "/search/query";

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

// SmallBoxWrapper styling
const SmallBoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        border: "0.1rem solid lightgray",
        borderRadius: "8px",
        marginBottom: "16px",
        marginTop: "20px",
        padding: "10px 12px",
        backgroundColor: "white",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// TagWrapper styling
const TagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "start",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// HashtagWrapper styling
const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "2px 6px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
        marginRight: "4px",
        marginBottom: "2px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

//Need this to keep search_query
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

// functional component that renders the dynamic search query router
export default function SearchResult() {
  const router = useRouter(); // used for redirection
  const [searchPosts, setSearchPosts] = useState([]); // holds the search query results for posts
  const [searchTags, setSearchTags] = useState([]); // holds the search query results for tags
  const [isDataLoading, setIsDataLoading] = useState(true); // determines whether the data has been loaded from the backend

  // used to force a re-render of the functional component
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }

  // load in data from backend
  useEffect(() => {
    axiosInstance
      .get(SEARCHQUERY, {
        params: { input: router.query.query },
      })
      .then((response) => {
        const temp = response["data"];
        const temp_json = JSON.parse(temp);
        if (temp_json.posts != null) {
          setSearchPosts(temp_json.posts);
        }
        setSearchTags(temp_json.tags);
        setIsDataLoading(false);
      });
    // if dynamic route has changed, re-render UI componet with new data
    const handleRouteChange = (url, { shallow }) => {
      setIsDataLoading(true);
      handleClick();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [isDataLoading]);

  // post data is loading in
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // post data has loaded in
  else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
            <SmallBoxWrapper>
              <h5
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                Search Results for "{router.query.query}"
              </h5>
              {/* tag */}
              <h5 style={{ marginBottom: "0.8rem" }}>Tag Results</h5>
              {searchTags.length > 0 ? (
                <TagWrapper>
                  {searchTags.map((tag, i) => (
                    <Link href={`/tags/${tag}`} key={tag}>
                      <a style={{ textDecoration: "none" }}>
                        <HashtagWrapper>{tag}</HashtagWrapper>
                      </a>
                    </Link>
                  ))}
                </TagWrapper>
              ) : (
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
                    There were no tags matching "{router.query.query}"
                  </p>
                </Box>
              )}

              {/* Post */}
              <h5 style={{ marginBottom: "0.8rem" }}>Post Results</h5>
              {searchPosts.length > 0 ? (
                <BoxWrapper>
                  {searchPosts.map((post) => (
                    <PostMinified key={post.post_id} data={post} />
                  ))}
                </BoxWrapper>
              ) : (
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
                    There were no posts matching "{router.query.query}"
                  </p>
                </Box>
              )}
            </SmallBoxWrapper>
          </Box>
        </div>
        <ProfileCard />
      </div>
    );
  }
}
