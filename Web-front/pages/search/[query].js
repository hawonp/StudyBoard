import * as React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Box from "@mui/material/Box";
//Importing components
import ProfileCard from "../../components/ProfileCard";
import MyPostList from "../../components/MyPostList";
//Importing and settings vars for axios parse
import axiosInstance from "../../utils/routeUtil";
import { useRouter } from "next/router";

const SEARCHQUERY = "/search/query";

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

export default function SearchResult() {
  const router = useRouter();
  // url 쿼리에 input값
  const searchValue = router.query.input;

  const [searchPosts, setSearchPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const { user, isLoading, error } = useUser();
  const [isDataLoading, setIsDataLoading] = useState(false); //추후 true 로 해야함

  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }

      axiosInstance
        .get(SEARCHQUERY, {
          params: { input: router.query.query },
        })
        .then((response) => {
          console.log(response.data);
          console.log(JSON.parse(response.data));
          //   const data = JSON.parse(response.data);
          //   console.log("Search Result", data);
          //   setSearchPosts(data[0]);
          //   setSearchTags(data[1]);
          //   setIsDataLoading(false);
        });
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else {
    console.log("posts", searchPosts);
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
              <h5 style={{ marginBottom: "2rem" }}>Tag Results</h5>
              {searchTags.length > 0 ? (
                <TagWrapper>
                  {searchTags.map((tag, i) => (
                    // <Link href={`/tags/${tag}`} key={tag}>
                    //   <a style={{ textDecoration: "none" }}>
                    //     <HashtagWrapper>{tag}</HashtagWrapper>
                    //   </a>
                    // </Link>
                    <HashtagWrapper key={i}>{tag}</HashtagWrapper>
                  ))}
                </TagWrapper>
              ) : (
                <p style={{ fontSize: "1rem" }}>No tags for search</p>
              )}

              {/* Post */}
              {/* UI는 MyPost때와 동일함 */}
              <h5 style={{ marginBottom: "2rem" }}>Post Results</h5>
              <BoxWrapper>
                {searchPosts.map((post) => (
                  <MyPostList key={post.post_id} mypost={post} />
                ))}
              </BoxWrapper>
            </SmallBoxWrapper>
          </Box>
        </div>
        <ProfileCard />
      </div>
    );
  }
}
