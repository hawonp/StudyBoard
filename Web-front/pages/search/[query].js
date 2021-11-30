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

const dummy_posts = [
  {
    post_id: 13,
    user_id: "google-oauth2|115178471204410613298",
    post_title: "hi",
    post_text: "<p>hi</p>",
    post_image: "None",
    post_like_count: 1,
    post_reply_count: 4,
    post_favourite_count: 1,
    post_date: "2021-11-28 00:20:25",
    post_tags: ["hi"],
  },
  {
    post_id: 14,
    user_id: "google-oauth2|115178471204410613298",
    post_title: "\uc9c8\ubb38\uc788\uc2b5\ub2c8\ub2e4 ",
    post_text: "<p>\uc9c8\ubb38\uc774 \uc788\uc5b4\uc694&nbsp;</p>",
    post_image: "https://ucarecdn.com/5a6f8312-3b80-44cb-a3a9-ed4e2377f07d/",
    post_like_count: 0,
    post_reply_count: 1,
    post_favourite_count: 0,
    post_date: "2021-11-28 13:21:51",
    post_tags: ["\uc218\ud559", " \uc911\ud559\uad50", " \ub367\uc0d8"],
  },
];

export default function SearchResult() {
  const router = useRouter();
  // url 쿼리에 input값
  const searchValue = router.query.input;

  const [searchPosts, setSearchPosts] = useState(dummy_posts);
  const [searchTags, setSearchTags] = useState(["hi", "cse416"]);
  const { user, isLoading, error } = useUser();
  const [isDataLoading, setIsDataLoading] = useState(false); //추후 true 로 해야함

  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      // * 읽어봐야합니다 *
      // [endpoint1]: Search Posts API endpoint
      // response.data는 MyPost때와 동일해야함
      // [endpoint2]: Search Tags API endpoint
      // response.data는 String 리스트여야 함

      // Promise.all(
      //   axiosInstance.get([endpoint1]),
      //   axiosInstance.get([endpoint2])).then((result) => {
      //     const postsData = JSON.parse(result[0].data);
      //     console.log("search posts", postsData);
      //     setSearchPosts(postsData);

      //     const tagsData = JSON.parse(result[1].data);
      //     console.log("search tags", tagsData);
      //     setSearchTags(tagsData);

      //     setIsDataLoading(false);
      // })
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
